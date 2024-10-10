import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createClass = async (req: Request, res: Response) => {
  try {
    const {
      Class_name,
      Class_code,
      capacity,
      currentEnrollment,
      // Students,
      // Teacher,
      // Courses,
      // Assignment,
    } = req.body;

    const newClass = await prisma.class.create({
      data: {
        Class_name,
        Class_code,
        capacity,
        currentEnrollment,
      },
    });

    res.status(201).json({
      type: 'success',
      message: 'Class created successfully',
      data: newClass,
    });
  } catch (error) {
    console.error('Error in creating class', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in creating class',
      data: {error: error.message},
    });
  }
};

export const getClass = async (req: Request, res: Response) => {
  try {
    const classes = await prisma.class.findMany({
      include:{ Student: true}
    });

    res.json({
      type: 'success',
      message: ' ',
      data: classes,
    });
  } catch (error) {
    console.error('Error in getting class', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting class',
      data: {error: error.message},
    });
  }
};

export const updateClass = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const {
      Class_name,
      Class_code,
      capacity,
      currentEnrollment,
    } = req.body;

    const updatedClass = await prisma.class.update({
      where: { Class_id: Number(id) },
      data: {
        Class_name,
        capacity,
        currentEnrollment,
        Class_code,
      },
    });
    res.json({
      type: 'success',
      message: `Class with ID ${id} updated successfully`,
      data: updatedClass,
    });
  } catch (error) {
    console.error('Error in updating class', error);
    res.status(500).json({
      type: 'error',
      message: `Error in updating class with ID ${id}`,
      data: {error: error.message},
    });
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedClass = await prisma.class.delete({
      where: { Class_id: Number(id) },
    });

    res.json({
      type: 'success',
      message: `Class with ID ${id} deleted successfully`,
      data: deletedClass,
    });
  } catch (error) {
    console.error('Error in deleting class', error);
    res.status(500).json({
      type: 'error',
      message: `Error in deleting class with ID ${id}`,
      data: {},
    });
  }
};