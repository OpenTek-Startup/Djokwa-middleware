import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import PDFDocument from 'pdfkit';
import ExcelJS from 'exceljs';
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';

const prisma = new PrismaClient();
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: 600, height: 400 });

const validateDates = (startDate: any, endDate: any) => {
  if (startDate && isNaN(Date.parse(startDate)))
    throw new Error('Invalid startDate format');
  if (endDate && isNaN(Date.parse(endDate)))
    throw new Error('Invalid endDate format');
  if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
    throw new Error('startDate cannot be later than endDate');
  }
};

// 1. Generate Financial Report with Donations
export const generateReportWithDonations = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { startDate, endDate } = req.query;

  try {
    validateDates(startDate, endDate);

    const incomes = await prisma.income.findMany({
      where: {
        Date: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
      },
    });

    const donations = await prisma.donation.findMany({
      where: {
        DonationDate: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
      },
    });

    const totalIncome = incomes.reduce((sum, income) => sum + income.Amount, 0);
    const totalDonations = donations.reduce(
      (sum, donation) => sum + donation.Amount,
      0
    );
    const netIncome = totalIncome + totalDonations;

    res.status(200).json({
      totalIncome,
      totalDonations,
      netIncome,
      incomes,
      donations,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// 2. Generate Balance Sheet
export const generateBalanceSheet = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { startDate, endDate, department } = req.query;

  try {
    validateDates(startDate, endDate);

    const incomes = await prisma.income.findMany({
      where: {
        Date: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
      },
    });

    const donations = await prisma.donation.findMany({
      where: {
        DonationDate: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
      },
    });

    const expenses = await prisma.expenses.findMany({
      where: {
        Department: department ? String(department) : undefined,
        Date: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
      },
    });

    const totalIncome = incomes.reduce((sum, income) => sum + income.Amount, 0);
    const totalDonations = donations.reduce(
      (sum, donation) => sum + donation.Amount,
      0
    );
    const totalExpenses = expenses.reduce(
      (sum, expense) => sum + expense.Amount,
      0
    );
    const netBalance = totalIncome + totalDonations - totalExpenses;

    res.status(200).json({
      totalIncome,
      totalDonations,
      totalExpenses,
      netBalance,
      incomes,
      donations,
      expenses,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// 3. Export Report to PDF
export const exportReportToPDF = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { startDate, endDate } = req.query;

  try {
    validateDates(startDate, endDate);

    const incomes = await prisma.income.findMany({
      where: {
        Date: {
          gte: new Date(String(startDate)),
          lte: new Date(String(endDate)),
        },
      },
    });

    const donations = await prisma.donation.findMany({
      where: {
        DonationDate: {
          gte: new Date(String(startDate)),
          lte: new Date(String(endDate)),
        },
      },
    });

    const expenses = await prisma.expenses.findMany({
      where: {
        Date: {
          gte: new Date(String(startDate)),
          lte: new Date(String(endDate)),
        },
      },
    });

    const totalIncome = incomes.reduce((sum, income) => sum + income.Amount, 0);
    const totalDonations = donations.reduce(
      (sum, donation) => sum + donation.Amount,
      0
    );
    const totalExpenses = expenses.reduce(
      (sum, expense) => sum + expense.Amount,
      0
    );
    const netBalance = totalIncome + totalDonations - totalExpenses;

    const doc = new PDFDocument();
    doc.pipe(res);

    doc.fontSize(18).text('Financial Report', { align: 'center' });
    doc.text(`Date Range: ${startDate} to ${endDate}`);
    doc.text(`Total Income: ${totalIncome}`);
    doc.text(`Total Donations: ${totalDonations}`);
    doc.text(`Total Expenses: ${totalExpenses}`);
    doc.text(`Net Balance: ${netBalance}`);

    doc.end();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// 4. Export Report to Excel
export const exportReportToExcel = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { startDate, endDate } = req.query;

  try {
    validateDates(startDate, endDate);

    const incomes = await prisma.income.findMany({
      where: {
        Date: {
          gte: new Date(String(startDate)),
          lte: new Date(String(endDate)),
        },
      },
    });

    const donations = await prisma.donation.findMany({
      where: {
        DonationDate: {
          gte: new Date(String(startDate)),
          lte: new Date(String(endDate)),
        },
      },
    });

    const expenses = await prisma.expenses.findMany({
      where: {
        Date: {
          gte: new Date(String(startDate)),
          lte: new Date(String(endDate)),
        },
      },
    });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Financial Report');

    sheet.columns = [
      { header: 'Type', key: 'type', width: 15 },
      { header: 'Amount', key: 'amount', width: 15 },
      { header: 'Date', key: 'date', width: 20 },
    ];

    incomes.forEach((income) =>
      sheet.addRow({ type: 'Income', amount: income.Amount, date: income.Date })
    );
    donations.forEach((donation) =>
      sheet.addRow({
        type: 'Donation',
        amount: donation.Amount,
        date: donation.DonationDate,
      })
    );
    expenses.forEach((expense) =>
      sheet.addRow({
        type: 'Expense',
        amount: expense.Amount,
        date: expense.Date,
      })
    );

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=financial_report.xlsx'
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
