import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { getStudentData } from '../services/studentService';

const prisma = new PrismaClient();

export const processStudentFee = async (req: Request, res: Response): Promise<void> => {
  const { studentId, amount } = req.body;

  try {
    // Fetch student data from the Student Management module
    const student = await getStudentData(studentId);
    if (!student) {
      res.status(404).json({ error: "Student not found." });
      return;
    }

    // Record fee payment in financial module
    const payment = await prisma.income.create({
      data: {
        Amount: amount,
        Description: `Fee payment for ${student.firstName} ${student.lastName}`,
        Date: new Date(),
        IncomeType: "Tuition",
        User_ID: studentId,
      },
    });

    res.status(201).json({ message: "Fee processed successfully", payment });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
