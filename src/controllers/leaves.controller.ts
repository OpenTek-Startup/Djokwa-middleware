import { Request, Response } from "express";
import { prisma } from "../app";
import { validate } from "class-validator"; 
import { CreateLeaveDto } from "../valdators/leave.validator"; 
import { LeaveStatus } from "@prisma/client";

// Creating Leaves 
export const createLeave = async (req: Request, res: Response) => {
    const createLeaveDTO = new CreateLeaveDto();
    const leaveData = req.body;

    Object.assign(createLeaveDTO, leaveData);
    
    const errors = await validate(createLeaveDTO); // Correct input for validation
    
    if (errors.length > 0) {
        console.log(errors);
        return res.status(400).json({
            type: 'error',
            message: 'Validation failed',
            errors: errors,
        });
    }

    try {
        const leave = await prisma.leaves.create({
            data: {
                FirstName: leaveData.FirstName,  // Use camelCase if that's your schema naming
                LastName: leaveData.LastName,
                JerseyNum: leaveData.JerseyNum,  
                Start_Date: new Date(leaveData.Start_Date),  
                End_Date: new Date(leaveData.End_Date),
                Type: leaveData.Type,
                Status: leaveData.Status,
                Personnel_ID: leaveData.Personnel_ID ? Number(leaveData.Personnel_ID) : null,
                Teacher_ID: leaveData.Teacher_ID ? Number(leaveData.Teacher_ID) : null,
            },
        });
        res.status(201).json({
            message: "Leave created successfully",
            data: leave,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creating leave",
        });
    }
};

// Getting All Leaves
export const getAllLeaves = async (req: Request, res: Response) => {
    try {
        const leaves = await prisma.leaves.findMany();
        res.status(200).json({
            message: "Leaves retrieved successfully",
            data: leaves,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving leaves",
        });
    }
};

// Getting a Single Leave by ID
export const getLeaveById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const leave = await prisma.leaves.findUnique({
            where: {
                Leave_ID: Number(id),  // Ensure this matches your Prisma schema field names
            },
        });
        if (!leave) {
            return res.status(404).json({
                message: "Leave not found",
            });
        }
        res.status(200).json({
            message: "Leave retrieved successfully",
            data: leave,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving leave",
        });
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
    } = req.body;

    try {
        const leave = await prisma.leaves.update({
            where: {
                Leave_ID: Number(id),  // Prisma schema naming convention
            },
            data: {
                FirstName: FirstName,
                LastName: LastName,
                JerseyNum: JerseyNum,
                Start_Date: Start_Date,
                End_Date: new Date(End_Date),
                Type: Type,
                Status: Status,
                Personnel_ID: Personnel_ID ? Number(Personnel_ID) : null,
                Teacher_ID: Teacher_ID ? Number(Teacher_ID) : null,
            },
        });
        res.status(200).json({
            message: "Leave updated successfully",
            data: leave,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating leave",
        });
    }
};

// Updating Leave Status
export const updateLeaveStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { Status }: { Status: LeaveStatus } = req.body; // Could be Approved, Pending, Denied
    try {
        const leave = await prisma.leaves.update({
            where: {
                Leave_ID: Number(id),
            },
            data: {
                Status: Status,
            },
        });
        res.status(200).json({
            message: "Leave status updated successfully",
            data: leave,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating leave status",
        });
    }
};

// Deleting a Leave by ID
export const deleteLeave = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedLeave = await prisma.leaves.delete({
            where: {
                Leave_ID: Number(id),
            },
        });
        res.status(200).json({
            message: "Leave deleted successfully",
            data: deletedLeave,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error deleting leave",
        });
    }
};
