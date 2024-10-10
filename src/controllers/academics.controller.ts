import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const createEnrollment = async (req: Request, res: Response) => {
    const { Status} = req.body;
  
    try {
      const enrollment = await prisma.enrollment.create({
        data: {
         Status
        },
      });
  
      res.json({
        type: 'success',
        message: 'Enrollment created successfully',
        data: enrollment,
      });
    } catch (error) {
      res.status(500).json({
        type: 'error',
        message: 'Error creating enrollment',
        data: { error: error.message },
      });
    }
  };

  export const getEnrollment = async (req: Request, res: Response) => {
    try {
      const enrollments= await prisma.enrollment.findMany({
      });
  
      res.json({
        type: 'success',
        message: ' ',
        data:enrollments,
      });
    } catch (error) {
      console.error('Error in getting enrollments', error);
      res.status(500).json({
        type: 'error',
        message: 'Error in getting enrollments',
        data: {error: error.message},
      });
    }
  };

  export const getGraduation = async (req: Request, res: Response) => {
    try {
      const graduations = await prisma.graduation.findMany({
      });
  
      res.json({
        type: 'success',
        message: ' ',
        data: graduations,
      });
    } catch (error) {
      console.error('Error in getting graduations', error);
      res.status(500).json({
        type: 'error',
        message: 'Error in getting graduations',
        data: {error: error.message},
      });
    }
  };
  

  export const createGraduation = async (req: Request, res: Response) => {
    const { Graduation_Year, Degree} = req.body;
  
    try {
      const graduation = await prisma.graduation.create({
        data: {
          Graduation_Year,
          Degree
        },
      });
  
      res.json({
        type: 'success',
        message: 'Graduation record created successfully',
        data: graduation,
      });
    } catch (error) {
      res.status(500).json({
        type: 'error',
        message: 'Error creating graduation record',
        data: { error: error.message },
      });
    }
  };
  

  export const createDiscipline = async (req: Request, res: Response) => {
    const { Sanction,
      Justification
    } = req.body;
  
    try {
      const discipline = await prisma.discipline.create({
        data: {
          Sanction,
          Justification
        },
      });
  
      res.json({
        type: 'success',
        message: 'Discipline record created successfully',
        data: discipline,
      });
    } catch (error) {
      res.status(500).json({
        type: 'error',
        message: 'Error creating discipline record',
        data: { error: error.message },
      });
    }
  };
  

  export const getDiscipline = async (req: Request, res: Response) => {
    try {
      const disciplines = await prisma.discipline.findMany({
      });
  
      res.json({
        type: 'success',
        message: ' ',
        data: disciplines,
      });
    } catch (error) {
      console.error('Error in getting disciplines', error);
      res.status(500).json({
        type: 'error',
        message: 'Error in getting disciplines',
        data: {error: error.message},
      });
    }
  };

  export const createAcademicProgram = async (req: Request, res: Response) => {
    const { Name, Duration, Year } = req.body;

    try {
        const academicProgram = await prisma.academicProgram.create({
            data: {
                Name,
                Duration,
                Year
            }
        });

        res.json({
            type: 'success',
            message: 'Academic program created successfully',
            data: academicProgram
        });
    } catch (error) {
        console.error('Error in creating academic program:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error in creating academic program',
            data: { error: error.message }
        });
    }
};

export const getAcademicProgram = async (req: Request, res: Response) => {
  try {
    const academicPrograms = await prisma.academicProgram.findMany({
    });

    res.json({
      type: 'success',
      message: ' ',
      data: academicPrograms,
    });
  } catch (error) {
    console.error('Error in getting academic Program', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting academic programs',
      data: {error: error.message},
    });
  }
};


export const createTranscript = async (req: Request, res: Response) => {
    const { Name, Logo, Student_ID, Course_ID } = req.body;

    try {
        const transcript = await prisma.transcript.create({
            data: {
                Name,
                Logo,
                Student_ID,
                Course_ID,
            },
        });
        res.status(201).json(transcript);
    } catch (error) {
        res.status(500).json({
          type: "Failed",
         message: 'Failed to create transcript',
         data: { error: error.message}
      });
     
    }
};


export const getTranscripts = async (req: Request, res: Response) => {
    try {
        const transcripts = await prisma.transcript.findMany({
            include: {
                Student: true,
                Course: true,
            }
        });
        res.status(200).json(transcripts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve transcripts' });
    }
};

export const getTranscript = async (req: Request, res: Response) => {
  const { id} = req.params
  try {
      const transcript = await prisma.transcript.findUnique({
        where:{
          Student_ID: Number(id)
         },
          include: {
              Student: true,
              Course: true,
          }
      });
      res.status(200).json(transcript);
  } catch (error) {
      res.status(500).json({ 
        type: "Failed",
         message: 'Failed to get transcript',
         data: { error: error.message}
      });
  }
};