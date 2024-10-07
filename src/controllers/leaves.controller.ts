import { Request, Response } from "express";
import { prisma } from "../app";
import { LeaveStatus, LeaveType } from "@prisma/client";


// Creating Leaves 
export const createLeave = async (req: Request, res: Response) => {
   const { 
        FirstName, 
        LastName, 
        JerseyNum, 
        Start_Date, 
        End_Date, 
        Type, 
        Status, 
        Personnel_ID, 
        Teacher_ID 
    }: { 
        FirstName: string; 
        LastName: string; 
        JerseyNum?: string; 
        Start_Date: string; 
        End_Date: string; 
        Type: LeaveType;         
        Status: LeaveStatus;    
        Personnel_ID?: number; 
        Teacher_ID?: number;
    } = req.body;  

    try {
        const leaves = await prisma.leaves.create({
            data: {
                FirstName,
                LastName,
                JerseyNum,
                Start_Date,  
                End_Date: new Date(End_Date),      
                Type,                             
                Status,                           
                Personnel_ID: Number(Personnel_ID ),
                Teacher_ID: Number(Teacher_ID )
                },
            })
        res.status(201).json({
            message: "Leave created successfully",
            data: leaves,
        })
    }
    catch (error) {
        console.log(error),
        res.status(500).json({
            message: "Error creating leave",
        })  
}
};

// Getting All Leaves
export const getAllLeaves = async (req: Request, res: Response) => {
    try {
        const leaves = await prisma.leaves.findMany()
        res.status(200).json({
            message: "Leaves retrieved successfully",
            data: leaves,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Error retrieving leaves",
        })
    }
};

// Getting a Single Leave by ID
export const getLeaveById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const leave = await prisma.leaves.findUnique({
            where: {
                Leave_ID: Number(id),
            },
        })
        if (!leave) {
            return res.status(404).json({
                message: "Leave not found",
            })
        }
        res.status(200).json({
            message: "Leave retrieved successfully",
            data: leave,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Error retrieving leave",
        })
    }
};

// Updating a Leave by ID

export const updateLeave = async (req: Request, res: Response) => {
    const { id } = req.params;
   const { 
        FirstName, 
        LastName, 
        JerseyNum, 
        Start_Date, 
        End_Date, 
        Type, 
        Status, 
        Personnel_ID, 
        Teacher_ID 
    }: { 
        FirstName: string; 
        LastName: string; 
        JerseyNum?: string; 
        Start_Date: string; 
        End_Date: string; 
        Type: LeaveType;         
        Status: LeaveStatus;    
        Personnel_ID?: number; 
        Teacher_ID?: number;
    } = req.body;  
    try {
        const leave = await prisma.leaves.update({
            where: {
                Leave_ID: Number(id),
            },
            data: {
                FirstName,
                LastName,
                JerseyNum,
                Start_Date,
                End_Date: new Date(End_Date),
                Type,
                Status,
                Personnel_ID: Number(Personnel_ID),
                Teacher_ID: Number(Teacher_ID),
            },
        })
        if (!leave) {
            return res.status(404).json({
                message: "Leave not found",
            })
        }
        res.status(200).json({
            message:
            "Leave updated successfully",
            data: leave,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Error updating leave",
        })
    }}

    // Updting Leave Status
 export   const updateLeaveStatus = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { Status }: {Status: LeaveStatus} = req.body; // Could be Approved, Pending, Denied
        try {
            const leave = await prisma.leaves.update({
                where: {
                    Leave_ID: Number(id),
                },
                data: {
                    Status,
                },
            })
            if (!leave) {
                return res.status(404).json({
                    message: "Leave not found",
                })
            }
            res.status(200).json({
                message: "Leave status updated successfully",
                data: leave,
            })
        }
        catch (error) {
            res.status(500).json({
                message: "Error updating leave status",
            })
        }
    };

    // Deleting a Leave by ID
   export const deleteLeave = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const deletedLeave = await prisma.leaves.delete({
                where: {
                    Leave_ID: Number(id),
                },
            })
            if (!deletedLeave) {
                return res.status(404).json({
                    message: "Leave not found",
                })
            }
            res.status(200).json({
                message: "Leave deleted successfully",
                data: deletedLeave,
            })
        }
        catch (error) {
            console.log(error),
            res.status(500).json({
                message: "Error deleting leave",
            })
        }
    };