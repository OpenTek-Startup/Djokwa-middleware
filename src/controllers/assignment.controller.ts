import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";


const prisma = new PrismaClient();
 

export const createAssignment = async (req: Request, res: Response) => {
  
    try{
       const {
        
        due_Date,
        title,
        class_id,
        course_id,
        // teacher_id,
        description,
        // Submission, 
        // Grade
       } = req.body

       const newAssignment = await prisma.assignment.create({
        data: {
          due_Date,
          title,
          description,
          Course: {
            connect: {
              Course_ID: course_id // Ensure course_id exists and matches schema field
            }
          },
          // Teacher: {
          //   connect: {
          //     Teacher_ID: teacher_id // Ensure teacher_id exists and matches schema field
          //   }
          // },
          Class: {
            connect: {
              Class_id: class_id 
            }
          },
          
          // Submission: Submission && Submission.length > 0
          //   ? { connect: Submission.map((submission: { id: number }) => ({ id: submission.id })) }
          //   : undefined,
          // Grade: Grade && Grade.length > 0
          //   ? { connect: Grade.map((grade: { id: number }) => ({ id: grade.id })) }
          //   : undefined
        }
      });
      
       res.status(201).json({
        type: "success",
        data: newAssignment,
        message: "Created assignment successfully"
       })
    }catch(error){
      console.error("Error in creating assignment", error)

      res.status(500).json({
        type: "Error",
        message: "Error creating assignment",
        data: {error: error.message}
      })
    }
}


export const submitAssignment = async (req: Request, res: Response) =>{
    const {
        Assignment_id,
        studentId,
        file_Url,
        // teacherId,
        submitted_at
     } = req.body

    try{

    const submission = await prisma.submission.create({
        data: {
            file_Url, 
            submitted_at: new Date(submitted_at),
            Student: { connect: { Student_ID: studentId}},
            Assignment: { connect: { Assignment_id: Assignment_id}},
            // Teacher: {connect: { Teacher_ID: teacherId}},
        }
    })

    res.json({
        type: "Success",
        message:"Assignment submitted successfully",
        data: submission
    })

    }catch(error){
      console.error("Error in submitting assignment",error)

      res.status(500).json({
        type: "Error",
        message: "Error in submitting assignment",
        data: {error: error.message}
      })
    }
}

export const getSubmissions = async (req: Request, res: Response) =>{

    const { Assignment_id } = req.params
    try{
     const submissions = await prisma.submission.findMany({
        where: { assignment_id: Number(Assignment_id)},
        // include: { Student: true}
     })

     res.json({
        type: "success",
        message: " Submissions fetched Successfully ",
        data: submissions
     })
    }catch(error){
     console.error("Error in fetching submissions: ", error)

     res.status(500).json({
        type: "Error",
        message: "Error in fetching submissions",
        data: {error: error.message}
     })
    }
}


export const deleteAssignment = async (req: Request, res: Response) => {
    const { id } = req.params

    try{
     const deletedAssignment = await prisma.assignment.delete({
        where: { Assignment_id: Number(id)}
     })

     res.json({
        type: "Success",
        message:"Assignment deleted successfully",
        data: deletedAssignment
     })
    }catch(error){
     console.error("Error in deleting assignment", error)

     res.status(500).json({
        type: "Error",
        message: "Error in deleting assignment",
        data: {}
      })
    }
}