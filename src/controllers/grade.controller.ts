import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";


const prisma =new PrismaClient();

export const getGrades = async (req: Request, res: Response) =>{
  try{
    const {Student_ID} = req.params
    const grades = await prisma.grade.findMany({
        where: {Student_ID:parseInt(Student_ID)},
        include: {Assignment: true, Student:true, Course: true}
    })
  }catch (error) {
    console.error('Error in getting grades', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting grades',
      data: {error: error.message},
    });
  }
    
}


export const assignGrade = async (req: Request, res: Response) => {
  try{
    const {
     Value,
     Assignment_id,
     Student_ID,
     Course_ID
    } = req.body

    const grade = await prisma.grade.create({
        data:{
            Value,
            Assignment: { connect: { Assignment_id: Assignment_id}},
            Student: { connect: { Student_ID: Student_ID}},
            Course: { connect: { Course_ID: Course_ID}}
        }
    })

    res.json({
        type: "success",
        message: "Grade assigned successfully",
        data: grade
    })
  }catch (error) {
    console.error('Error in assigning grades', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in assigning grades',
      data: {error: error.message},
    });
  }
}

export const getWeeklyGradingReport = async (req:Request, res: Response) => {

   try{
    const report = await prisma.grade.findMany({
      where: {
        createdAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 7))
        }
      },
      include: { Student: true, Assignment: true }
    });
    res.json(report);
  }catch (error) {
    console.error('Error in getting grades', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting grades',
      data: {error: error.message},
    });
  }
  };

export const getMonthlyGradingReport = async (req: Request, res: Response) => {
  try{
    const report = await prisma.grade.findMany({
      where: {
        createdAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 7))
        }
      },
      include: { Student: true, Assignment: true }
    });
    res.json(report);
  }catch (error) {
    console.error('Error in getting grades', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting grades',
      data: {error: error.message},
    });
  }
  };