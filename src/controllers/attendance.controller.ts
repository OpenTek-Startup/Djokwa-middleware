import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export const recordAttendance = async (req: Request, res: Response) => {

    try{
        const{
            Absence,
            Lateness,
            student_id,
            course_id,
            date,
            Presence, 
            permission
        } = req.body

      const newAttendance = await prisma.attendance.create({
        data: {
           date,
           permission,
           Student: { connect: { Student_ID: student_id}},
           Course: { connect: {Course_ID: course_id}},
           Lateness,
          Absence,
          Presence
        }
      })
    }catch(error){

    }
}

export const getAttendance= async (req: Request, res: Response) => {
  try {
    const { student_id } = req.params;

    const attendanceRecords = await prisma.attendance.findMany({
      where: { student_id: Number(student_id) },
      include: {
        Student: true,
        Course: true
      },
    });

    return res.status(200).json(attendanceRecords);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
 
export const updateAttendance = async (req: Request, res: Response) => {

  const { id } = req.params;

  try{
   
    const{
      Absence,
      Lateness,
      student_id,
      course_id,
      date,
      Presence,
      permission
  } = req.body

  const updatedAttendance = await prisma.attendance.update({
    
    where: { Attendance_id: Number(id) },
    data: {
      date,
      permission,
      Student: { connect: {Student_ID: student_id}},
      Course: { connect: {Course_ID: course_id}},
      Lateness,
      Absence,
      Presence,
    },
    include: {
      Student: true,
        Course: true
    },
  });

  res.status(200).json(updatedAttendance);

  }catch(error){
    console.error('Error updating attendance', error)
    res.status(500).json({ 
      type: "Failed",
      message: "Failed to update attendance",
      data: {error: error.message} 
    });
  }
  
}


export const deleteAttendance = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {

    await prisma.attendance.delete({
      where: { Attendance_id: Number(id) },
    });

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAttendanceAlerts = async (req: Request, res: Response) => {
   try{
    const{
      Absence,
  } = req.body

  const alerts = await prisma.attendance.findMany({
    where: { Absence},
    groupBy: {
      student_id: true,
      _count: {
        _all: true,
      },
      having: {
        _count: {
          gte: 5, 
        }
      }
    },
    include: { Student: true },
  });
  res.json(alerts);

   }catch(error){
    console.error('Error in getting attendance',error)
    res.status(500).json({
      type: "Failed",
      message: "Failed to get attendance",
      data: {error: error.message}
    })
   }
  
};