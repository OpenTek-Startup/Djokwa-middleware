import { Request, Response } from "express";
import { prisma } from "../app";
import { ProgressStatus } from "@prisma/client";
import { validate } from "class-validator"; 
import { CreatePaySleepDto } from "../valdators/paysleep.validator"; 

// Creating PaySleeps 
export const createPaySleep = async (req: Request, res: Response) => {
    const createPaySleepDTO = new CreatePaySleepDto();
    const paysleepData = req.body;

    Object.assign(createPaySleepDTO, paysleepData);
    
    const errors = await validate(createPaySleepDTO); // Correct input for validation
    
    if (errors.length > 0) {
        console.log(errors);
        return res.status(400).json({
            type: 'error',
            message: 'Validation failed',
            errors: errors,
        });
    }

    try {
        const paysleep = await prisma.paySleep.create({
            data: {
                FirstName: paysleepData.FirstName,  // Use camelCase if that's your schema naming
                LastName: paysleepData.LastName,  
                Pay_Date: new Date(paysleepData.Pay_Date),  
                Create_Date: new Date(paysleepData.Create_Date),
                Amount: paysleepData.Amount,
                Status: paysleepData.Status,
                Personnel_ID: paysleepData.Personnel_ID ? Number(paysleepData.Personnel_ID) : null,
                Teacher_ID: paysleepData.Teacher_ID ? Number(paysleepData.Teacher_ID) : null,
                Budget_ID: paysleepData.Budget_ID? Number(paysleepData.Budget_ID) : null
            },
        });
        res.status(201).json({
            message: "PaySleep created successfully",
            data: paysleep,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error creating PaySleep",
        });
    }
};

// retrieving a Payrol record

export const getPaySleep = async(req: Request, res: Response) => {
    const { id } = req.params;

    try{
        const paySleep = await prisma.paySleep.findUnique({
            where: {
                PaySleep_ID: Number(id),
            },
        });

        if (!paySleep) {
            return res.status(404).json({ message: "PaySleep not found" });
        }

        res.status(200).json({
            message: "PaySleep retrieved successfully",
            data: paySleep,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

// retrieving all Payrol records

export const getAllPaySleep = async(req: Request, res: Response) => {
    try{
        const paySleeps = await prisma.paySleep.findMany();
        res.status(200).json({
            message: "PaySleeps retrieved successfully",
            data: paySleeps,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
}

// updating a Payrol record

export const updatePaySleep = async(req: Request, res: Response) => {
    const { id } = req.params;
     const { 
        FirstName, 
        LastName,  
        Pay_Date, 
        Create_Date, 
        Amount, 
        Status, 
        Personnel_ID, 
        Teacher_ID,
        Budget
    }: { 
        FirstName: string; 
        LastName: string; 
        Pay_Date: string; 
        Create_Date: string; 
        Amount: number;         
        Status:ProgressStatus ;    
        Personnel_ID?: number; 
        Teacher_ID?: number;
        Budget?: number;
    } = req.body; 

    try{
        const paySleep = await prisma.paySleep.update({
            where: {
                PaySleep_ID: Number(id)
            },
            data: {
                FirstName,
                LastName,
                Pay_Date: Pay_Date? new Date(Pay_Date) : null,
                Create_Date: Create_Date ? new Date(Create_Date) : new Date(), // Set to now if not provided
                Amount,
                Status,
                Personnel_ID: Number(Personnel_ID),
                Teacher_ID: Number(Teacher_ID),
                Budget_ID: Number(Budget)
            },
        });

        if (!paySleep) {
            return res.status(404).json({
                 message: "PaySleep not found"
                 });
        }
    
        res.status(200).json({
            message: "PaySleep updated successfully",
            data: paySleep,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: "Server Error"
         });
    }
}

// updating the status of a payroll and Pay Date
export const updatePaySleepStatus = async (req: Request, res: Response) => {
            const { psid } = req.params;
            const { Pay_Date, Status }:{
                Pay_Date?: string;
                Status: ProgressStatus;
            } = req.body;
            try {
                const status = await prisma.paySleep.update({
                    where: {
                        PaySleep_ID: Number(psid),
                    },
                    data: {
                        Pay_Date: Pay_Date? new Date(Pay_Date) : null,  // if Pay_Date is provided, convert it to a Date object
                        Status,
                    },
                })
                if(!status){
                    return res.status(404).json({
                        message: "PaySleep not found"
                    });
                }
                res.status(200).json({
                    message: "PaySleep status updated successfully",
                    data: status,
                });
            } catch (error) {
                res.status(500).json({
                    message: "Error updating PaySleep status",
                })
            }
        }

// deleting a Payrol record

export const deletePaySleep = async(req: Request, res: Response) => {
    const { psid } = req.params;

    try{
        const paySleep = await prisma.paySleep.delete({
            where: {
                PaySleep_ID: Number(psid),
            },
        });

        if (!paySleep) {
            return res.status(404).json({
                message: "PaySleep not found"
            });
        }

        res.status(200).json({
            message: "PaySleep deleted successfully",
            data: paySleep,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
}