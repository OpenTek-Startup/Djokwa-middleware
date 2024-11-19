import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 1. Create Income Entry
export const createIncome = async (req: Request, res: Response): Promise<void> => {
  const { Description, Amount, Date, IncomeType, User_ID } = req.body;

  try {
    // Validate User existence
    const user = await prisma.user.findUnique({ where: { Id: User_ID } });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Validate IncomeType
    const validIncomeTypes = ["Tuition", "Donation", "Grant", "Other"];
    if (!validIncomeTypes.includes(IncomeType)) {
      res.status(400).json({ error: `Invalid IncomeType. Valid types: ${validIncomeTypes.join(", ")}` });
      return;
    }

    // Create income entry
    const newIncome = await prisma.income.create({
      data: {
        Description,
        Amount,
        Date: Date || new Date(),
        IncomeType,
        User_ID,
      },
    });

    res.status(201).json(newIncome);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 2. Record a Donation
export const recordDonation = async (req: Request, res: Response): Promise<void> => {
  const { Amount, Reason, Type, First_Name, Last_Name, Email, Phone, Gender } = req.body;

  try {
    // Create a donation record
    const donation = await prisma.donation.create({
      data: {
        Amount,
        Reason,
        Type,
        First_Name,
        Last_Name,
        Email,
        Phone,
        Gender,
        DonationDate: new Date(),
      },
    });

    res.status(201).json({ message: "Donation recorded successfully", donation });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Fetch Donations
export const fetchDonations = async (req: Request, res: Response): Promise<void> => {
  const { startDate, endDate, type, reason, page = 1, limit = 10 } = req.query;

  try {
    const donations = await prisma.donation.findMany({
      where: {
        DonationDate: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
        Type: type ? String(type) : undefined,
        Reason: reason ? String(reason) : undefined,
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
    });

    res.status(200).json(donations);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 4. Generate Receipt for Income Entry
export const generateReceipt = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const income = await prisma.income.findUnique({
      where: { Income_ID: Number(id) },
    });

    if (!income) {
      res.status(404).json({ message: "Income record not found" });
      return;
    }

    const receipt = {
      receiptID: `REC-${income.Income_ID}-${Date.now()}`,
      date: income.Date,
      payer: income.User_ID || "Unknown User",
      amount: income.Amount,
      incomeType: income.IncomeType,
      description: income.Description,
    };

    res.status(200).json(receipt);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 5. Filter Income Data
export const filterIncome = async (req: Request, res: Response): Promise<void> => {
  const { userId, startDate, endDate, incomeType, page = 1, limit = 10 } = req.query;

  try {
    const incomes = await prisma.income.findMany({
      where: {
        User_ID: userId ? Number(userId) : undefined,
        Date: startDate && endDate ? { gte: new Date(String(startDate)), lte: new Date(String(endDate)) } : undefined,
        IncomeType: incomeType ? String(incomeType) : undefined,
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
    });

    res.status(200).json(incomes);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 6. Generate Financial Report with Donations
export const generateReportWithDonations = async (req: Request, res: Response): Promise<void> => {
  const { startDate, endDate } = req.query;

  try {
    // Fetch income data
    const incomes = await prisma.income.findMany({
      where: {
        Date: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
      },
    });

    // Fetch donations
    const donations = await prisma.donation.findMany({
      where: {
        DonationDate: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
      },
    });

    const totalIncome = incomes.reduce((sum, income) => sum + income.Amount, 0);
    const totalDonations = donations.reduce((sum, donation) => sum + donation.Amount, 0);
    const netIncome = totalIncome + totalDonations;

    res.status(200).json({
      totalIncome,
      totalDonations,
      netIncome,
      incomes,
      donations,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
