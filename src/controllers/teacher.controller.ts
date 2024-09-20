import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const { name, subject } = req.body;

    const newTeacher = await prisma.teacher.create({
      data: {
        name,
        subject,
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
      where: { id: Number(id) },
      data: {
        name,
        subject,
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
      where: { id: Number(id) },
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
