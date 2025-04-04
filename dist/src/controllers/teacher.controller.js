"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeavesForTeacher = exports.getRHEvaluationForTeacher = exports.getPaysleepsForTeacher = exports.getDisciplineForTeacher = exports.getAbsencesForTeacher = exports.getSubjectsForTeacher = exports.getClassesForTeachers = exports.getTeachers = exports.logoutTeacher = exports.deleteTeacher = exports.updateTeacher = exports.signInTeacher = exports.signUpTeacher = void 0;
const client_1 = require("@prisma/client");
const teacher_validator_1 = require("../valdators/teacher.validator");
const class_validator_1 = require("class-validator");
const argon2_1 = __importDefault(require("argon2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getAuthUser_middleware_1 = require("../middlewares/getAuthUser.middleware");
const auth_middleware_1 = require("../middlewares/auth.middleware");
// Type guard to ensure user_role is an array
const isUserRoleArray = (userRole) => {
    return Array.isArray(userRole);
};
const prisma = new client_1.PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || '';
/*
  @route    POST: /teachers/sign-up
  @access   private
  @desc     Create a new teacher
*/
const signUpTeacher = async (req, res) => {
    try {
        const teacherData = req.body;
        console.log(req.body);
        // Validate the incoming data
        const createTeacherDto = new teacher_validator_1.CreateTeacherDto();
        Object.assign(createTeacherDto, teacherData);
        const errors = await (0, class_validator_1.validate)(createTeacherDto);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Failed signing up',
                errors,
            });
        }
        // Check if passwords match
        if (teacherData.password !== teacherData.confirmPassword) {
            return res.status(400).json({
                type: 'error',
                message: 'Passwords do not match',
            });
        }
        // Check for unique email
        // const existingEmail = await prisma.user.findUnique({
        //   where: { Email: teacherData.email },
        // });
        // if (existingEmail) {
        //   return res.status(400).json({
        //     type: 'error',
        //     message: 'Email already in use, use different email',
        //   });
        // }
        // Check for unique phone number
        // const existingPhone = await prisma.user.findUnique({
        //   where: { Phone: teacherData.Phone },
        // });
        // if (existingPhone) {
        //   return res.status(400).json({
        //     type: 'error',
        //     message: 'Phone number already in use',
        //   });
        // }
        // encrypt password
        const hashedPassword = await argon2_1.default.hash(teacherData.password);
        // Create the user in the `User` table
        const createdUser = await prisma.user.create({
            data: {
                First_Name: teacherData.First_Name,
                Last_Name: teacherData.Last_Name,
                Email: teacherData.Email,
                Phone: teacherData.Phone,
                password: hashedPassword,
                Gender: teacherData.gender,
                role: 'teacher',
                createdAt: new Date(),
            },
        });
        // Now create the teacher entry, linking to the created user
        const newTeacher = await prisma.teacher.create({
            data: {
                UserId: createdUser.Id, // Link the teacher to the user
                Hiring_Date: teacherData.Hiring_Date,
                Salary: teacherData.Salary,
                Specialty: teacherData.Specialty,
                Image: teacherData.Image,
                address: teacherData.address,
            },
        });
        // Assign the role to the new teacher
        const teacherRole = await prisma.roles.findUnique({
            where: { name: 'teacher' },
        });
        if (teacherRole) {
            await prisma.user_roles.create({
                data: {
                    user_id: createdUser.Id,
                    role_id: teacherRole.Id,
                },
            });
        }
        // Fetch user with roles and generate a token
        const userWithRoles = await (0, getAuthUser_middleware_1.getUserWithRoles)('teacher', teacherData.Email);
        if (userWithRoles) {
            const token = (0, auth_middleware_1.generateToken)(userWithRoles);
            return res.status(201).json({
                type: 'success',
                message: 'Teacher account created successfully',
                token,
                data: {
                    id: newTeacher.Id,
                    email: createdUser.Email,
                    name: `${createdUser.First_Name} ${createdUser.Last_Name}`,
                },
            });
        }
        else {
            return res.status(404).json({
                type: 'error',
                message: 'User not found after account creation',
            });
        }
    }
    catch (error) {
        console.error('Error creating teacher:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error when creating the teacher',
        });
    }
};
exports.signUpTeacher = signUpTeacher;
/*
  @route    POST: /teachers/sign-in
  @access   private
  @desc     Get teacher details
*/
const signInTeacher = async (req, res) => {
    try {
        const { Email, password } = req.body;
        console.log(req.body);
        // Find the teacher by email
        const teacher = await prisma.user.findUnique({
            where: { Email: Email },
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
        const isPasswordValid = await argon2_1.default.verify(teacher.password, password);
        if (!isPasswordValid) {
            return res
                .status(401)
                .json({ message: 'The password provided is invalid' });
        }
        // Prepare roles array
        const roles = isUserRoleArray(teacher.user_role)
            ? teacher.user_role.map((ur) => ({
                id: ur.roles.Id,
                name: ur.roles.name,
            }))
            : [];
        // Create JWT token
        const token = jsonwebtoken_1.default.sign({ id: teacher.Id, email: teacher.Email, roles }, SECRET_KEY, { expiresIn: '1h' });
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
    }
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error during login',
        });
    }
};
exports.signInTeacher = signInTeacher;
/*
  @route    PUT: /teacher/update
  @access   private
  @desc     Update a teacher
*/
const updateTeacher = async (req, res) => {
    try {
        const teacherId = req.user?.id;
        if (!teacherId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }
        const updateData = req.body;
        // Validate incoming data
        const updateTeacherDto = new teacher_validator_1.UpdateTeacherDto();
        Object.assign(updateTeacherDto, updateData);
        const errors = await (0, class_validator_1.validate)(updateTeacherDto);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors: errors,
            });
        }
        // Fetch the existing teacher record
        const teacher = await prisma.user.findUnique({
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
        // // Handle password update if provided
        // if (updateData.password) {
        //   const isPasswordValid = await argon2.verify(
        //     teacher.password,
        //     updateData.currentPassword
        //   );
        //   if (!isPasswordValid) {
        //     return res.status(401).json({ message: 'Invalid current password' });
        //   }
        //   // Hash the new password before saving
        //   updateData.password = await argon2.hash(updateData.password);
        // } else {
        //   updateData.password = teacher.password; //keep existing pwd
        // }
        // Update user information
        const updatedUser = await prisma.user.update({
            where: { Id: teacherId },
            data: {
                password: updateData.password,
                Email: updateData.Email,
                Phone: updateData.Phone,
            },
        });
        // Update teacher information
        const updatedTeacher = await prisma.teacher.update({
            where: { Id: updatedUser.Id },
            data: {
                Salary: updateData.Salary,
                Image: updateData.Image,
            },
        });
        // Handle role updates if roles are included in updateData
        if (updateData.roles) {
            await prisma.user_roles.deleteMany({
                where: { user_id: teacherId },
            });
            const newRoles = updateData.roles.map((roleId) => ({
                user_id: teacherId,
                roleId: roleId,
            }));
            await prisma.user_roles.createMany({ data: newRoles });
        }
        res.status(200).json({
            type: 'success',
            message: 'Teacher information updated successfully',
            data: updatedTeacher,
        });
    }
    catch (error) {
        console.error('Error updating teacher:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error updating teacher information',
            error,
        });
    }
};
exports.updateTeacher = updateTeacher;
/*
  @route    DELETE: /teachers/delete
  @access   private
  @desc     delete a teacher
*/
const deleteTeacher = async (req, res) => {
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
            where: { user_id: teacherId },
        });
        // Delete the teacher from the database
        await prisma.teacher.delete({
            where: { Id: teacherId },
        });
        // Delete the user from the database
        await prisma.user.delete({
            where: { Id: teacherId },
        });
        res.status(200).json({
            type: 'success',
            message: 'Teacher deleted successfully',
        });
    }
    catch (error) {
        console.error('Error deleting teacher:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error deleting teacher',
        });
    }
};
exports.deleteTeacher = deleteTeacher;
/*
  @route    DELETE: /teacher/logout
  @access   private
  @desc     logout a teacher
*/
const logoutTeacher = async (req, res) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1] || '';
        const Hashtoken = await argon2_1.default.hash(token);
        if (Hashtoken) {
            // Add the token to the blacklist
            await prisma.tokenBlacklist.create({
                data: {
                    token: Hashtoken,
                    createdAt: new Date(),
                },
            });
        }
        res.status(200).json({
            type: 'success',
            message: 'Logout successful',
        });
    }
    catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error during logout',
        });
    }
};
exports.logoutTeacher = logoutTeacher;
/*
  @route    GET: /teachers/all-teachers
  @access   private
  @desc     Get all teachers
*/
const getTeachers = async (req, res) => {
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
    }
    catch (error) {
        console.error('Error retrieving teachers:', error);
        res.status(500).json({
            type: 'error',
            message: 'An error occurred while retrieving teachers',
        });
    }
};
exports.getTeachers = getTeachers;
/*
  @route    GET: /teachers/classes
  @access   private
  @desc     Get only assigned classes for a teacher
*/
const getClassesForTeachers = async (req, res, next) => {
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
exports.getClassesForTeachers = getClassesForTeachers;
/*
  @route    GET: {:id}/teachers/courses
  @access   private
  @desc     Get only assigned subjects for a teacher
*/
const getSubjectsForTeacher = async (req, res) => {
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
exports.getSubjectsForTeacher = getSubjectsForTeacher;
const getAbsencesForTeacher = async (req, res) => {
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
exports.getAbsencesForTeacher = getAbsencesForTeacher;
const getDisciplineForTeacher = async (req, res) => {
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
exports.getDisciplineForTeacher = getDisciplineForTeacher;
const getPaysleepsForTeacher = async (req, res) => {
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
exports.getPaysleepsForTeacher = getPaysleepsForTeacher;
const getRHEvaluationForTeacher = async (req, res) => {
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
exports.getRHEvaluationForTeacher = getRHEvaluationForTeacher;
const getLeavesForTeacher = async (req, res) => {
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
exports.getLeavesForTeacher = getLeavesForTeacher;
