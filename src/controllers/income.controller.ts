import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const recordTuitionPayment = async (req: Request, res: Response): Promise<void> => {
  const { Name, Description, Amount, Date } = req.body;
  try {
    const tuitionPayment = await prisma.income.create({
      data: {
        Name,
        Description,
        Amount,
        Date,
        IncomeType: 'Tuition',
      },
    });
    res.status(201).json(tuitionPayment);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
