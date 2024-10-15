import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateStudentDto } from '../valdators/student.validator';
import { isNumber, validate } from 'class-validator';

const prisma = new PrismaClient();

/*
  @route    POST: /students
  @access   private
  @desc     Create a new student
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
        message: 'Invalid details',
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
        classes: studentData.classes, //Still not clear what this does
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

    res.status(200).json({
      type: 'success',
      message: 'Succesfully retrieved students',
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

  if (isNaN(Number(id))) {
    return res.status(404).json({
      type: 'error',
      message: 'Invalid student id',
    });
  }

  try {
    const updateData = req.body;
    const createStudentDto = new CreateStudentDto();
    Object.assign(createStudentDto, updateData); // Assign the incoming data to the DTO

    const errors = await validate(createStudentDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors: errors,
      });
    }

    const updatedstudent = await prisma.student.update({
      where: { Student_ID: Number(id) },
      data: {
        First_Name: updateData.First_Name,
        Last_Name: updateData.Last_Name,
        Date_Of_Birth: updateData.Date_Of_Birth,
        Gender: updateData.Gender,
        Address: updateData.Address,
        Phone: updateData.Phone,
        Medical_Info: updateData.Medical_Info,
      },
    });

    res.status(200).json({
      type: 'success',
      message: `student with ID ${id} updated successfully`,
      data: updatedstudent,
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

export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(404).json({
      type: 'error',
      message: 'Invalid student Id',
    });
  }

  try {
    await prisma.student.delete({
      where: { Student_ID: Number(id) },
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
