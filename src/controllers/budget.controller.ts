import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createBudget = async (req: Request, res: Response): Promise<void> => {
  const { Name, Description, Amount, Year } = req.body;
  try {
    const newBudget = await prisma.budget.create({
      data: { Name, Description, Amount, Year },
    });
    res.status(201).json(newBudget);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllBudgets = async (req: Request, res: Response): Promise<void> => {
  try {
    const budgets = await prisma.budget.findMany();
    res.status(200).json(budgets);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateBudget = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { Name, Description, Amount, Year } = req.body;
  try {
    const updatedBudget = await prisma.budget.update({
      where: { Budget_ID: Number(id) },
      data: { Name, Description, Amount, Year },
    });
    res.status(200).json(updatedBudget);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteBudget = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await prisma.budget.delete({ where: { Budget_ID: Number(id) } });
    res.status(200).json({ message: 'Budget deleted successfully' });
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
export const createAnnualBudget = async (req:Request, res:Response) => {
  const { Name, Description, Amount, Year } = req.body;
  try {
    const newAnnualBudget = await prisma.budget.create({
      data: { Name, Description, Amount, Year },
    });
    res.status(201).json(newAnnualBudget);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAnnualBudget = async (req:Request, res:Response) => {
  const { year } = req.params;
  try {
    const annualBudget = await prisma.budget.findMany({
      where: { Year: year },
    });
    res.status(200).json(annualBudget);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
