import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { title } from 'process';

const prisma = new PrismaClient();

export const createCourse = async (req: Request, res: Response) => {
  try {
    const {
      Course_name,
      Course_Code,
      Title,
      Coefficient,
      Start_Date,
      End_Date,
      Class_ID,
      
    } = req.body;
    
    const newCourse = await prisma.course.create({
      data: {
        Course_name,
        Course_Code,
        Title,
        Coefficient,
        Start_Date: new Date(Start_Date),
        End_Date: new Date(End_Date),
        Class: {
          connect: { Class_id: Class_ID}
        },
      }
    });
    

    res.status(200).json({
      type: 'success',
      message: 'Course created successfully',
      data: newCourse,
    });
  } catch (error) {
    console.error('Error in creating course', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in creating course',
      data: { error: error.message },
    });
  }
};



export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      include: {Class: true, Schedule: true, Attendance: true},
    });

    res.json({
      type: 'success',
      message: ' ',
      data: courses,
    });
  } catch (error) {
    console.error('Error in getting course', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting course',
      data: {error: error.message},
    });
  }
};

export const getCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const courses = await prisma.course.findUnique({
      where: { Course_ID: Number(id) },
      include: {Class: true, Schedule: true, Attendance: true},
    });

    res.json({
      type: 'success',
      message: ' ',
      data: courses,
    });
  } catch (error) {
    console.error('Error in getting course', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting course',
      data: {error: error.message},
    });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { 
      Course_name,
      Coefficient,
      Start_Date,
      End_Date,
      Title,
      Class_ID,
      Course_Code,
      
    } = req.body;

    const updatedCourse = await prisma.course.update({
      where: { Course_ID: Number(id) },
      data: {
        Course_name,
        Course_Code,
        Coefficient,
        Title,
        Start_Date: new Date(Start_Date),
        End_Date: new Date (End_Date),
        Class: { connect: { Class_id: Class_ID  } },
        
      },
    });
    res.json({
      type: 'success',
      message: `Course with ID ${id} updated successfully`,
      data: updatedCourse,
    });
  } catch (error) {
    console.error('Error in updating course', error);
    res.status(500).json({
      type: 'error',
      message: `Error in updating course with ID ${id}`,
      data: {error: error.message},
    });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedCourse = await prisma.course.delete({
      where: { Course_ID: Number(id) },
    });

    res.json({
      type: 'success',
      message: `Course with ID ${id} deleted successfully`,
      data: deletedCourse,
    });
  } catch (error) {
    console.error('Error in deleting course', error);
    res.status(500).json({
      type: 'error',
      message: `Error in deleting course with ID ${id}`,
      data: {},
    });
  }
};

export const createSchedule = async (req: Request, res: Response) => {
  const { Day, Start_Time, End_Time, Room_ID, Course_ID } = req.body;

  try {
    const newSchedule = await prisma.schedule.create({
      data: {
        Day,
        Start_Time: new Date(Start_Time),
        End_Time: new Date(End_Time),
        Room_ID,
        Course_ID,
      },
    });

    res.status(201).json({
      type: 'success',
      message: 'Schedule created successfully',
      data: newSchedule,
    });
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'Error in creating schedule',
      data: { error: error.message },
    });
  }
};


export const getScheduleByCourse = async (req: Request, res: Response) => {
  const { Course_ID } = req.params;

  try {
    const schedule = await prisma.schedule.findMany({
      where: { Course_ID: Number(Course_ID) },
    });

    res.status(200).json({
      type: 'success',
      data: schedule,
    });
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'Error in fetching schedule',
      data: { error: error.message },
    });
  }
};

export const getSchedules= async (req: Request, res: Response) => {
  try {
    const schedules = await prisma.schedule.findMany({
      include: {Course: true},
    });

    res.json({
      type: 'success',
      message: ' ',
      data: schedules,
    });
  } catch (error) {
    console.error('Error in getting schedule', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting schedule',
      data: {error: error.message},
    });
  }
};


export const createRoom = async (req: Request, res: Response) => {
    const { Name } = req.body;

    try {
        const room = await prisma.room.create({
            data: {
                Name,
            },
        });
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create room' });
    }
};


export const getRooms = async (req: Request, res: Response) => {
    try {
        const rooms = await prisma.room.findMany({
            include: {
                Schedules: true,
            }
        });
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve rooms' });
    }
};

