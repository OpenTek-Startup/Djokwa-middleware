import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateTeacherDto } from '../valdators/teacher.validator';
import { validate } from 'class-validator';

const prisma = new PrismaClient();

/*
  @route    POST: /teachers
  @access   private
  @desc     Create a new teacher
*/
export const createTeacher = async (req: Request, res: Response) => {
  try {
    const teacherData = req.body;

    // Validate the incoming data
    const createTeacherDto = new CreateTeacherDto();
    Object.assign(createTeacherDto, teacherData); // Assign the incoming data to the DTO

    const errors = await validate(createTeacherDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors: errors,
      });
    }

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
        Teacher_ID: teacherData.Teacher_ID,
        Courses: {},
        Disciplines: {},
        Leaves: {},
        PaySleeps: {},
        RHEvaluations: {}
      },
    });

    res.status(201).json({
      type: 'success',
      message: 'Teacher created successfully',
      data: newTeacher,
    });
  } catch (error) {
    console.error('Error creating teacher:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error creating teacher',
      data: {},
    });
  }
};

export const getTeacher = async (req: Request, res: Response) => {
  try {
    const teachers = await prisma.teacher.findMany();

    res.json({
      type: 'success',
      message: '',
      data: teachers,
    });
  } catch (error) {
    console.error('Error retrieving teachers:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error retrieving teachers',
      data: {},
    });
  }
};

export const updateTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { name, subject } = req.body;

    const updatedTeacher = await prisma.teacher.update({
      where: { Teacher_ID: Number(id) },
      data: {
        First_Name: "",
        Hiring_Date:"",
        Last_Name: "",
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

export const deleteTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.teacher.delete({
      where: { Teacher_ID: Number(id) },
    });

    res.json({
      type: 'success',
      message: `Teacher with ID ${id} deleted successfully`,
      data: {},
    });
  } catch (error) {
    console.error('Error deleting teacher:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error deleting teacher',
      data: {},
    });
  }
};
