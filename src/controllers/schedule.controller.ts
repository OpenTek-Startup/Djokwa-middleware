import { Request, Response } from "express";
import { prisma } from "../app";
import { Days } from "@prisma/client";

// creating a schedule
export const createSchedule = async(req: Request, res: Response) => {
    const {
        Day, 
        Start_Time, 
        End_Time, 
        Room_ID, 
        Course_ID
          }: {
        Day: Days;
        Start_Time: string;
        End_Time: string;
        Room_ID: number;
        Course_ID: number;

        } = req.body;
    try{
        const schedule = await prisma.schedule.create({
            data:{
                Day,
                Start_Time,
                End_Time,
                Room_ID: Number(Room_ID),
                Course_ID: Number(Course_ID)
            },
        })
        res.status(201).json({
            message:"Schedule Created Successfully",
            data: schedule
        })
    }catch(error){
        res.status(500).json({
            message:"Error Creating Schedule"
        })
    }
}

// getting all schedules

export const getAllSchedules = async(req: Request, res: Response) => {
    try{
        const schedules = await prisma.schedule.findMany();
        if(!schedules){
            return res.status(404).json({
                message:"Schedule Not Found"
            })
        }
        res.status(200).json({
            message:"Schedules Retrieved Successfully",
            data: schedules
        })
    }catch(error){
        res.status(500).json({
            message:"Error Retrieving Schedules"
        })
    }
}

// getting a schedule by id

export const getScheduleById = async(req: Request, res: Response) => {
    const { sid } = req.params;
    try{
        const schedule = await prisma.schedule.findUnique({
            where:{
                Schedule_ID: Number(sid)
            }
        })
        if(!schedule){
            return res.status(404).json({
                message:"Schedule Not Found"
            })
        }
        res.status(200).json({
            message:"Schedule Retrieved Successfully",
            data: schedule
        })
    }catch(error){
        res.status(500).json({
            message:"Error Retrieving Schedule"
        })
    }
}

// updating a schedule

export const updateSchedule = async(req: Request, res: Response) => {
    const { id } = req.params;
     const {
        Day, 
        Start_Time, 
        End_Time, 
        Room_ID, 
        Course_ID
          }: {
        Day: Days;
        Start_Time: string;
        End_Time: string;
        Room_ID: number;
        Course_ID: number;

        } = req.body;
    try{
        const schedule = await prisma.schedule.update({
            where:{
                Schedule_ID: Number(id)
            },
            data:{
                Day,
                Start_Time,
                End_Time,
                Room_ID: Number(Room_ID),
                Course_ID: Number(Course_ID)
            }
        })
        if(!schedule){
            return res.status(404).json({
                message:"Schedule Not Found"
            })
        }
        res.status(200).json({
            message:"Schedule Updated Successfully",
            data: schedule
        })
    }catch(error){
        res.status(500).json({
            message:"Error Updating Schedule"
        })
    }
}

// deleting a schedule

export const deleteSchedule = async(req: Request, res: Response) => {
    const { sid } = req.params;
    try{
        const schedule = await prisma.schedule.delete({
            where:{
                Schedule_ID: Number(sid)
            }
        })
        if(!schedule){
            return res.status(404).json({
                message:"Schedule Not Found"
            })
        }
        res.status(200).json({
            message:"Schedule Deleted Successfully",
            data: schedule
        })
    }catch(error){
        res.status(500).json({
            message:"Error Deleting Schedule"
        })
    }
}

