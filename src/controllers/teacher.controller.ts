import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import {
  CreateTeacherDto,
  UpdateTeacherDto,
} from '../valdators/teacher.validator';
import { validate } from 'class-validator';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { getUserWithRoles } from '../utils/getAuthUser';
import { generateToken } from '../middlewares/auth.middleware';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || '';

/*
  @route    POST: /teachers/sign-up
  @access   private
  @desc     Create a new teacher
*/
export const signUpTeacher = async (req: Request, res: Response) => {
  try {
    const teacherData = req.body;

    // Validate the incoming data
    const createTeacherDto = new CreateTeacherDto();
    Object.assign(createTeacherDto, teacherData); // Assign the incoming data to the DTO

    const errors = await validate(createTeacherDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Failed signing up',
        // errors: errors,
      });
    }

    // Check if passwords match
    if (teacherData.password !== teacherData.confirmPassword) {
      return res.status(400).json({
        type: 'error',
        message: 'Passwords do not match',
      });
    }

    // // Check for unique email
    // const existingEmail = await prisma.teacher.findUnique({
    //   where: { Email: teacherData.email },
    // });
    // if (existingEmail) {
    //   return res.status(400).json({
    //     type: 'error',
    //     message: 'Email already in use, use different email',
    //   });
    // }

    // // Check for unique phone number
    // const existingPhone = await prisma.teacher.findUnique({
    //   where: { Phone: teacherData.Phone },
    // });
    // if (existingPhone) {
    //   return res.status(400).json({
    //     type: 'error',
    //     message: 'Phone number already in use',
    //   });
    // }

    // encrypt password
    const hash = await argon2.hash(teacherData.password);

    const newTeacher = await prisma.teacher.create({
      data: {
        First_Name: teacherData.First_Name,
        Last_Name: teacherData.Last_Name,
        Hiring_Date: teacherData.Hiring_Date, //2024-09-24T00:00:00.000Z
        Salary: teacherData.Salary,
        Specialty: teacherData.Specialty,
        Email: teacherData.Email,
        Image: teacherData.Image,
        Phone: teacherData.Phone,
        password: hash,
        gender: teacherData.gender,
        address: teacherData.address,

        Courses: {},
        Disciplines: {},
        Leaves: {},
        PaySleeps: {},
        RHEvaluations: {},
        user_role: {},
        abscences: {},
        classes: {},
      },
    });

    // Assign the role to the new teacher
    const role = await prisma.roles.findUnique({
      where: { name: 'teacher' },
    });

    if (role) {
      await prisma.user_roles.create({
        data: {
          teacher_id: newTeacher.Id,
          role_id: role.Id,
        },
      });
    }

    // get the user with role
    const userRole = role?.name;
    if (userRole) {
      const user = await getUserWithRoles(userRole, teacherData.Email);
      if (user) {
        const token = generateToken(user); // Generate token with roles
        res.status(201).json({
          type: 'success',
          message: 'Teacher created successfully',
          token: token,
        });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } else {
      res.status(400).json({ message: 'Invalid role' });
    }
  } catch (error) {
    console.error('Error creating teacher:', error);
    res.status(500).json({
      type: 'error',
      message:
        'Credentials have already been taken, use different email and/or different phone number',
      data: {},
    });
  }
};

/*
  @route    POST: /teachers/sign-in
  @access   private
  @desc     Get teacher details
*/
export const signInTeacher = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find the teacher by email
    const teacher = await prisma.teacher.findUnique({
      where: { Email: email },
      include: {
        user_role: {
          include: {
            roles: true,
          },
        },
      },
    });

    if (!teacher) {
      return res
        .status(401)
        .json({ message: 'The email provided does not exist' });
    }

    // Verify the password
    const isPasswordValid = await argon2.verify(teacher.password, password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: 'The password provided is invalid' });
    }

    // Prepare roles array
    const roles = teacher.user_role
      ? teacher.user_role.map((ur) => ({
          id: ur.roles.Id,
          name: ur.roles.name,
        }))
      : [];

    // Create JWT token
    const token = jwt.sign(
      { id: teacher.Id, email: teacher.Email, roles },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      type: 'success',
      message: 'Login successful',
      token,
      teacher: {
        Teacher_ID: teacher.Id,
        First_Name: teacher.First_Name,
        Last_Name: teacher.Last_Name,
        Email: teacher.Email,
        Phone: teacher.Phone,
        roles,
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error during login',
    });
  }
};
/*
  @route    PUT: /teacher/update
  @access   private
  @desc     Update a teacher
*/
export const updateTeacher = async (req: Request, res: Response) => {
  try {
    const teacherId = req.user?.id;
    if (!teacherId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const updateData = req.body;

    // Validate incoming data
    const updateTeacherDto = new UpdateTeacherDto();
    Object.assign(updateTeacherDto, updateData);
    const errors = await validate(updateTeacherDto);

    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors: errors,
      });
    }

    // Fetch the existing teacher record
    const teacher = await prisma.teacher.findUnique({
      where: { Id: teacherId },
      include: {
        user_role: {
          include: {
            roles: true,
          },
        },
      },
    });

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    // Handle password update if provided
    if (updateData.password) {
      const isPasswordValid = await argon2.verify(
        teacher.password,
        updateData.currentPassword
      );
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid current password' });
      }
      // Hash the new password before saving
      updateData.password = await argon2.hash(updateData.password);
    } else {
      updateData.password = teacher.password; //keep existing pwd
    }

    // Update teacher information
    const updatedTeacher = await prisma.teacher.update({
      where: { Id: teacherId },
      data: {
        ...updateData,
      },
    });

    // Handle role updates if roles are included in updateData
    if (updateData.roles) {
      await prisma.user_roles.deleteMany({
        where: { teacher_id: teacherId },
      });
      const newRoles = updateData.roles.map((roleId: number) => ({
        teacherId: teacherId,
        roleId: roleId,
      }));
      await prisma.user_roles.createMany({ data: newRoles });
    }

    res.status(200).json({
      type: 'success',
      message: 'Teacher information updated successfully',
      data: updatedTeacher,
    });
  } catch (error) {
    console.error('Error updating teacher:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error updating teacher information',
    });
  }
};

/*
  @route    DELETE: /teachers/delete
  @access   private
  @desc     delete a teacher
*/
export const deleteTeacher = async (req: Request, res: Response) => {
  try {
    const teacherId = req.user?.id;
    if (!teacherId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // Check if the teacher exists before deletion
    const teacher = await prisma.teacher.findUnique({
      where: { Id: teacherId },
    });

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    // Delete associated roles if necessary
    await prisma.user_roles.deleteMany({
      where: { teacher_id: teacherId },
    });

    // Delete the teacher from the database
    await prisma.teacher.delete({
      where: { Id: teacherId },
    });

    res.status(200).json({
      type: 'success',
      message: 'Teacher deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting teacher:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error deleting teacher',
    });
  }
};

/*
  @route    DELETE: /teacher/logout
  @access   private
  @desc     logout a teacher
*/
export const logoutTeacher = async (req: Request, res: Response) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];

    if (token) {
      // Add the token to the blacklist
      await prisma.tokenBlacklist.create({
        data: {
          token,
          createdAt: new Date(),
        },
      });
    }

    res.status(200).json({
      type: 'success',
      message: 'Logout successful',
    });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error during logout',
    });
  }
};

/*
  @route    GET: /teachers/all-teachers
  @access   private
  @desc     Get all teachers
*/
export const getTeachers = async (req: Request, res: Response) => {
  try {
    // Retrieve all teachers from the database
    const teachers = await prisma.teacher.findMany();

    // Check if any teachers were found
    if (teachers.length === 0) {
      return res.status(404).json({
        type: 'error',
        message: 'No teachers found',
      });
    }

    // Return the list of teachers
    res.status(200).json({
      type: 'success',
      message: 'Teachers retrieved successfully',
      data: teachers,
    });
  } catch (error) {
    console.error('Error retrieving teachers:', error);
    res.status(500).json({
      type: 'error',
      message: 'An error occurred while retrieving teachers',
    });
  }
};

/*
  @route    GET: /teachers/classes
  @access   private
  @desc     Get only assigned classes for a teacher
*/
export const getClassesForTeachers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  await prisma.$transaction(async (tx) => {
    const findTeacher = await tx.teacher.findUnique({
      where: {
        Id: id,
      },
    });

    if (!findTeacher) {
      return res.status(404).json({ message: 'No teacher found' });
    }

    // Get Classes for this teacher
    const classes = await tx.classes.findMany({
      where: {
        Teacher: {
          Id: findTeacher.Id,
        },
      },
    });

    res.json(classes);
  });
};

/*
  @route    GET: {:id}/teachers/courses
  @access   private
  @desc     Get only assigned subjects for a teacher
*/
export const getSubjectsForTeacher = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await prisma.$transaction(async (tx) => {
    const findTeacher = await tx.teacher.findUnique({
      where: {
        Id: id,
      },
    });

    if (!findTeacher) {
      return res.status(404).json({ message: 'No teacher found' });
    }

    // Get Subjects for this teacher
    const subjects = await tx.course.findMany({
      where: {
        Teacher: {
          Id: findTeacher.Id,
        },
      },
    });

    res.json(subjects);
  });
};

export const getAbsencesForTeacher = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await prisma.$transaction(async (tx) => {
    const findTeacher = await tx.teacher.findUnique({
      where: {
        Id: id,
      },
    });

    if (!findTeacher) {
      return res.status(404).json({ message: 'No teacher found' });
    }

    // Get Absences for this teacher
    const absences = await tx.absence.findMany({
      where: {
        Teacher: {
          Id: findTeacher.Id,
        },
      },
    });

    res.json(absences);
  });
};

export const getDisciplineForTeacher = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await prisma.$transaction(async (tx) => {
    const findTeacher = await tx.teacher.findUnique({
      where: {
        Id: id,
      },
    });

    if (!findTeacher) {
      return res.status(404).json({ message: 'No teacher found' });
    }

    // Get Absences for this teacher
    const disciplines = await tx.discipline.findMany({
      where: {
        Teacher: {
          Id: findTeacher.Id,
        },
      },
    });

    res.json(disciplines);
  });
};

export const getPaysleepsForTeacher = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await prisma.$transaction(async (tx) => {
    const findTeacher = await tx.teacher.findUnique({
      where: {
        Id: id,
      },
    });

    if (!findTeacher) {
      return res.status(404).json({ message: 'No teacher found' });
    }

    // Get pay-sleeps for this teacher
    const paysleep = await tx.paySleep.findMany({
      where: {
        Teacher: {
          Id: findTeacher.Id,
        },
      },
    });

    res.json(paysleep);
  });
};

export const getRHEvaluationForTeacher = async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  await prisma.$transaction(async (tx) => {
    const findTeacher = await tx.teacher.findUnique({
      where: {
        Id: id,
      },
    });

    if (!findTeacher) {
      return res.status(404).json({ message: 'No teacher found' });
    }

    // Get RHEvaluation for this teacher
    const rhevaluations = await tx.rHEvaluation.findMany({
      where: {
        Teacher: {
          Id: findTeacher.Id,
        },
      },
    });

    res.json(rhevaluations);
  });
};

export const getLeavesForTeacher = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  await prisma.$transaction(async (tx) => {
    const findTeacher = await tx.teacher.findUnique({
      where: {
        Id: id,
      },
    });

    if (!findTeacher) {
      return res.status(404).json({ message: 'No teacher found' });
    }

    // Get Leaves for this teacher
    const leaves = await tx.leaves.findMany({
      where: {
        Teacher: {
          Id: findTeacher.Id,
        },
      },
    });

    res.json(leaves);
  });
};
