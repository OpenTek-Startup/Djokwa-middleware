import { PrismaClient } from '@prisma/client';
import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { BadRequestError, UnauthorizedError } from '../errors/customErrors';
import {
  CreateStudentDto,
  UpdateStudentDto,
} from '../valdators/student.validator';

const prisma = new PrismaClient();

/*
  @route    POST: /students/create
  @access   private
  @desc     Create a new student
*/
export const createStudent = async (req: Request, res: Response) => {
  // try {
    const user = req.user;

    // Check if the user is a teacher
    // console.log("...",user)
    if (!user || !user.roles.some((role) => role.name === 'teacher')) {
      // authentication error here
      throw new UnauthorizedError("please only teachers are require to create a new student ")
      // return res.status(403).json({
      //   type: 'error',
      //   message: 'Only Teachers can create a student record.',
      // });
    }
    const studentData = req.body;

    // Validate the incoming data
    const createStudentDto = new CreateStudentDto();
    Object.assign(createStudentDto, studentData); // Assign the incoming data to the DTO

    const errors = await validate(createStudentDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Invalid details',
        errors: errors,
      });
    }

    const newStudent = await prisma.student.create({
      data: {
        First_Name: studentData.First_Name,
        Last_Name: studentData.Last_Name,
        Date_Of_Birth: new Date(studentData.Date_Of_Birth),
        Address: studentData.Address,
        Gender: studentData.Gender,
        Image: studentData.Image,
        Phone: studentData.Phone,
        classId: studentData.classId,
        Medical_Info: studentData.Medical_Info,
      },
    });
if(!newStudent) throw new BadRequestError("fail to create student with credentials"+studentData?.data)
    res.status(201).json({
      type: 'success',
      message: 'Student created successfully',
      data: newStudent,
    });
  // } catch (error) {
    // console.error('Error creating student:', error);
    // throw new BadRequestError("fail creating student ,AUBIM Said so 😁")
    // res.status(500).json({
    //   type: 'error',
    //   message: 'Error creating student',
    //   data: {},
    // });
  // }
};

/*
  @route    GET: /students
  @access   private
  @desc     Retrieve all students
*/
export const getStudents = async (req: Request, res: Response) => {
  try {
    // Parse query parameters with defaults
    const page = parseInt(req.query.page as string, 10) || 1; // Default to page 1
    const limit = parseInt(req.query.limit as string, 10) || 10; // Default to 10 items per page
    const skip = (page - 1) * limit; // Calculate the offset

    // Retrieve students with pagination
    const students = await prisma.student.findMany({
      take: limit,
      skip: skip,
    });

    // Optionally, get the total count for pagination metadata
    const totalStudents = await prisma.student.count();
    const totalPages = Math.ceil(totalStudents / limit);

    res.status(200).json({
      type: 'success',
      message: 'Successfully retrieved students',
      data: students,
      pagination: {
        totalStudents,
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    console.error('Error retrieving students:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error retrieving students',
      data: {},
    });
  }
};


/*
  @route    GET: /students/:id
  @access   private
  @desc     Retrieve a student by ID
*/
export const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(404).json({
      type: 'error',
      message: 'Invalid student ID',
    });
  }

  try {
    const student = await prisma.student.findUnique({
      where: { Id: Number(id) },
    });

    if (!student) {
      return res.status(404).json({
        type: 'error',
        message: 'Student not found',
      });
    }

    res.status(200).json({
      type: 'success',
      message: 'Successfully retrieved student',
      data: student,
    });
  } catch (error) {
    console.error('Error retrieving student:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error retrieving student',
      data: {},
    });
  }
};

/*
  @route    PUT: /students/update/:id
  @access   private
  @desc     Update a student's information
*/
export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(404).json({
      type: 'error',
      message: 'Invalid student ID',
    });
  }

  try {
    const updateData = req.body;
    const updateStudentDto = new UpdateStudentDto();
    Object.assign(updateStudentDto, updateData);

    const errors = await validate(updateStudentDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors: errors,
      });
    }

    const updatedStudent = await prisma.student.update({
      where: { Id: Number(id) },
      data: {
        First_Name: updateData.First_Name,
        Last_Name: updateData.Last_Name,
        Date_Of_Birth: new Date(updateData.Date_Of_Birth),
        Gender: updateData.Gender,
        Address: updateData.Address,
        Phone: updateData.Phone,
        Medical_Info: updateData.Medical_Info,
      },
    });

    res.status(200).json({
      type: 'success',
      message: `Student with ID ${id} updated successfully`,
      data: updatedStudent,
    });
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error updating student',
      data: {},
    });
  }
};

/*
  @route    DELETE: /students/delete/:id
  @access   private
  @desc     Delete a student
*/
export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(404).json({
      type: 'error',
      message: 'Invalid student ID',
    });
  }

  try {
    await prisma.student.delete({
      where: { Id: Number(id) },
    });

    res.status(200).json({
      type: 'success',
      message: `Student with ID ${id} deleted successfully`,
      data: {},
    });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error deleting student',
      data: {},
    });
  }
};
