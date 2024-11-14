import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 1. Create Income Entry
export const createIncome = async (req: Request, res: Response): Promise<void> => {
  const { Description, Amount, Date, IncomeType, User_ID } = req.body;
  try {
    const newIncome = await prisma.income.create({
      data: {
        Description,
        Amount,
        Date,
        IncomeType,
        User_ID
      },
    });
    res.status(201).json(newIncome);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

// 2. Generate Receipt for Income Entry
export const generateReceipt = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const income = await prisma.income.findUnique({
      where: { Income_ID: Number(id) },
      include: { User: true },
    });

    if (income) {
      const receipt = {
        receiptID: `REC-${income.Income_ID}-${Date.now()}`,
        date: income.Date,
        payer: `${income.User?.First_Name} ${income.User?.Last_Name}`,
        amount: income.Amount,
        incomeType: income.IncomeType,
        description: income.Description,
      };
      res.status(200).json(receipt);
    } else {
      res.status(404).json({ message: "Income record not found" });
    }
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

// 3. Filter Income Data
export const filterIncome = async (req: Request, res: Response): Promise<void> => {
  const { userId, startDate, endDate, incomeType } = req.query;
  try {
    const incomes = await prisma.income.findMany({
      where: {
        User_ID: userId ? Number(userId) : undefined,
        Date: startDate && endDate ? { gte: new Date(startDate as string), lte: new Date(endDate as string) } : undefined,
        IncomeType: incomeType ? String(incomeType) : undefined,
      },
      include: { User: true },
    });
    res.status(200).json(incomes);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
