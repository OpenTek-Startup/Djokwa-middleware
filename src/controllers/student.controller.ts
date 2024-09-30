import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateStudentDto } from '../valdators/student.validator';
import { validate } from 'class-validator';

const prisma = new PrismaClient();

/*
  @route    POST: /teachers
  @access   private
  @desc     Create a new teacher
*/
export const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body;

    // Validate the incoming data
    const createStudentDto = new CreateStudentDto();
    Object.assign(createStudentDto, studentData); // Assign the incoming data to the DTO

    const errors = await validate(createStudentDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors: errors,
      });
    }

    const newStudent = await prisma.student.create({
      data: {
        First_Name: studentData.First_Name,
        Last_Name: studentData.Last_Name,
        Date_Of_Birth: studentData.Date_Of_Birth, //2024-09-24T00:00:00.000Z
        Address: studentData.Address,
        Gender: studentData.Gender,
        Image: studentData.Image,
        Phone: studentData.Phone,
        // Student_ID: studentData.Student_ID,
      },
    });

    res.status(201).json({
      type: 'success',
      message: 'Student created successfully',
      data: newStudent,
    });
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error creating student',
      data: {},
    });
  }
};

export const getStudent = async (req: Request, res: Response) => {
  try {
    const students = await prisma.student.findMany();

    res.json({
      type: 'success',
      message: '',
      data: students,
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

export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { name, subject } = req.body;

    const updatedTeacher = await prisma.teacher.update({
      where: { Teacher_ID: Number(id) },
      data: {
        First_Name: '',
        Hiring_Date: '',
        Last_Name: '',
      },
    });

    res.json({
      type: 'success',
      message: `Teacher with ID ${id} updated successfully`,
      data: updatedTeacher,
    });
  } catch (error) {
    console.error('Error updating teacher:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error updating teacher',
      data: {},
    });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.student.delete({
      where: { Student_ID: Number(id) },
    });

    res.json({
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
