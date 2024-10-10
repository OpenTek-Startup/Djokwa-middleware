import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { connect } from "http2";

const prisma = new PrismaClient()


export const createStudent = async (req: Request, res: Response) => {
   const {
     First_Name, 
     Last_Name,
     Date_Of_Birth,
     Gender,
     Address,
     Phone,
     Medical_Info,
     Image,
     password,
     Class_ID,
     Enrollment_id,  
     admissionYear,
     Program_id,
     gpa,
     cummulativeCredit,
     classRank,
     Graduation_id,
     Discipline_ids,  
   } = req.body;
 
   try {
     const newStudent = await prisma.student.create({
       data: {
         First_Name,
         Last_Name,
         Date_Of_Birth: new Date(Date_Of_Birth),
         Gender,
         Address,
         Phone,
         Medical_Info,
         Image,
         password,
         Class: { connect: { Class_id: Class_ID } },
         Enrollment: { connect: { Enrollment_id: Enrollment_id } }, 
         admissionYear,
         AcademicProgram: { connect: { Program_id: Program_id } },
         gpa,
         cummulativeCredit,
         classRank,
         Graduation: { connect: { Graduation_id } }, 
         Disciplines: Discipline_ids && Discipline_ids.length > 0
           ? { connect: Discipline_ids.map((id: number) => ({ Discipline_ID: id })) }
           : undefined,
       },
     });
 
     res.json({
       type: "success",
       message: "Student created successfully",
       data: newStudent,
     });
   } catch (error) {
     console.error("Error in creating student:", error);
     res.status(500).json({
       type: "error",
       message: "Error in creating student",
       data: { error: error.message },
     });
   }
 };
 
 



export const getStudent = async (req: Request, res: Response) => {
   const { id} = req.params
   
    try{
     const student = await prisma.student.findUnique({
        where:{
         Student_ID: Number(id)
        },
        include:{
            Enrollment: true,
            AcademicProgram: true,
            Class: true,
        }
     })

     res.json({
        type: "Success",
        message: `Student with ${id}: gotten successfully`,
        data: student
     })
    }catch(error){
     console.error(`Error getting student with id: ${id}`, error)

     res.status(500).json({
        type: "Failed",
        message: `Failed to get student with id: ${id}`,
        data: { error: error.message}
     })
    }
}

export const getStudents = async (req: Request, res: Response) => {
     try{
      const students = await prisma.student.findMany({
         include:{
             Enrollment: true,
             AcademicProgram: true,
         }
      })
 
      res.json({
         type: "Success",
         message:  "Gotten students successfully",
         data: students
      })
     }catch(error){
      console.error("Error in getting students", error)
 
      res.status(500).json({
         type: "Failed",
         message:"Error in getting students",
         data: { error: error.message}
      })
     }
 }

 export const updateStudent = async (req: Request, res: Response) => {
    const { id} = req.params
    const {
        First_Name, 
        Last_Name,
        Date_Of_Birth,
        Gender,
        Address,
        Phone,
        Medical_Info,
        Image,
        password,
        Class_ID,
        Enrollment_id,
        admissionYear,
        Program_id,
        gpa,
        cummulativeCredit,
        classRank,
        Graduation_id,
        Discipline_ids
       } = req.body

     try{
      const updatedStudent = await prisma.student.update({
         where:{
          Student_ID: Number(id)
         },
         data:{
            First_Name,
            Last_Name,
            Date_Of_Birth: new Date(Date_Of_Birth),
            Gender,
            Address,
            Phone,
            Medical_Info,
            Image,
            password,
            Class: { connect: { Class_id: Class_ID } },
            Enrollment: { connect: { Enrollment_id: Enrollment_id } }, 
            admissionYear,
            AcademicProgram: { connect: { Program_id: Program_id } },
            gpa,
            cummulativeCredit,
            classRank,
            Graduation: { connect: { Graduation_id } }, 
            Disciplines: Discipline_ids && Discipline_ids.length > 0
              ? { connect: Discipline_ids.map((id: number) => ({ Discipline_ID: id })) }
              : undefined,
          },
        });
 
      res.json({
         type: "Success",
         message: `Student with ${id}: updated successfully`,
         data: updatedStudent
      })
     }catch(error){
      console.error(`Error updating student with id: ${id}`, error)
 
      res.status(500).json({
         type: "Failed",
         message: `Failed to update student with id: ${id}`,
         data: { error: error.message}
      })
     }
 }

 export const deleteStudent = async (req: Request, res: Response) => {
    const { id} = req.params;
    try{
     const deletedStudent = await prisma.student.delete({
        where: { Student_ID: Number(id)}
     })

     res.status(200).json({
        type: "Success",
        message: "Successfully deleted student",
        data: deletedStudent
     })
    }catch(error){
        console.error("Error in deleting student", error)
        res.status(500).json({
            type: "Failed",
            message: "Error in deleting student",
            data: {error: error.message}
        })
    }
 }

 export const getAcademicRecord = async (req: Request, res: Response) => {
    const { id} = req.params
    
     try{
      const AcademicRecord = await prisma.student.findUnique({
         where:{
          Student_ID: Number(id)
         },
         include:{
             Enrollment: true,
             AcademicProgram: true,
             Graduation: true,
             Disciplines: true,
         }
      })
 
      res.json({
         type: "Success",
         message: `Student record with ${id}: gotten successfully`,
         data: AcademicRecord
      })
     }catch(error){
      console.error(`Error getting student record with id: ${id}`, error)
 
      res.status(500).json({
         type: "Failed",
         message: `Failed to get student record with id: ${id}`,
         data: { error: error.message}
      })
     }
 }

 export const getAcademicRecords= async (req: Request, res: Response) => {
   
    try{
     const AcademicRecords= await prisma.student.findMany({
        include:{
            Enrollment: true,
            AcademicProgram: true,
            Graduation: true,
            Disciplines: true,
        }
     })

     res.json({
        type: "Success",
        message: "Student records gotten successfully",
        data: AcademicRecords
     })
    }catch(error){
     console.error("Error getting student records", error)

     res.status(500).json({
        type: "Failed",
        message: "Failed to get student records",
        data: { error: error.message}
     })
    }
}


export const createAttendance = async (req: Request, res: Response) => {
  const { student_id, course_id, date, permission } = req.body;

  try {
    const newAttendance = await prisma.attendance.create({
      data: {
        student_id,
        course_id,
        date: new Date(date),
        permission,
      },
    });

    res.status(201).json({
      type: 'success',
      message: 'Attendance created successfully',
      data: newAttendance,
    });
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'Error in creating attendance',
      data: { error: error.message },
    });
  }
};


export const getAttendanceByStudent = async (req: Request, res: Response) => {
  const { student_id } = req.params;

  try {
    const attendance = await prisma.attendance.findMany({
      where: { student_id: Number(student_id) },
    });

    res.status(200).json({
      type: 'success',
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'Error in fetching attendance',
      data: { error: error.message },
    });
  }
};

export const getAttendance = async (req: Request, res: Response) => {
   try{
    const attendance = await prisma.attendance.findMany({
      
    })

    res.json({
       type: "Success",
       message:  "Gotten students successfully",
       data: attendance
    })
   }catch(error){
    console.error("Error in getting students", error)

    res.status(500).json({
       type: "Failed",
       message:"Error in getting students",
       data: { error: error.message}
    })
   }
}