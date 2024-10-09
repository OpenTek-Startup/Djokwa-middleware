import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createExpense = async (req: Request, res: Response): Promise<void> => {
  const { Name, Description, Amount, Date, Budget_ID } = req.body;
  try {
    const newExpense = await prisma.expenses.create({
      data: { Name, Description, Amount, Date, Budget_ID },
    });
    res.status(201).json(newExpense);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllExpenses = async (req: Request, res: Response): Promise<void> => {
  try {
    const expenses = await prisma.expenses.findMany();
    res.status(200).json(expenses);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateExpense = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { Name, Description, Amount, Date, Budget_ID } = req.body;
  try {
    const updatedExpense = await prisma.expenses.update({
      where: { Expense_ID: Number(id) },
      data: { Name, Description, Amount, Date, Budget_ID },
    });
    res.status(200).json(updatedExpense);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteExpense = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await prisma.expenses.delete({ where: { Expense_ID: Number(id) } });
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
