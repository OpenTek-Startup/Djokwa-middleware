import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import PDFDocument from 'pdfkit';
import ExcelJS from 'exceljs';
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';

const prisma = new PrismaClient();
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width: 600, height: 400 });

// 1. Generate Balance Sheet Report Data
export const generateBalanceSheet = async (req: Request, res: Response): Promise<void> => {
  const { startDate, endDate, department } = req.query;

  try {
    // Fetch income and expenses based on query parameters
    const incomes = await prisma.income.findMany({
      where: {
        Date: {
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
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.Amount, 0);
    const netBalance = totalIncome - totalExpenses;

    res.status(200).json({
      totalIncome,
      totalExpenses,
      netBalance,
      incomes,
      expenses,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 2. Generate Cash Flow Report Data with Visualization
export const generateCashFlowReport = async (req: Request, res: Response): Promise<void> => {
  const { startDate, endDate } = req.query;

  try {
    // Fetch cash flow data (incomes and expenses)
    const incomes = await prisma.income.findMany({
      where: {
        Date: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
      },
    });
    const expenses = await prisma.expenses.findMany({
      where: {
        Date: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
      },
    });

    // Generate chart data for visualization
    const incomeData = incomes.map((income) => income.Amount);
    const expenseData = expenses.map((expense) => expense.Amount);

    const chart = await chartJSNodeCanvas.renderToBuffer({
      type: 'bar',
      data: {
        labels: ['Incomes', 'Expenses'],
        datasets: [
          { label: 'Incomes', data: incomeData, backgroundColor: 'green' },
          { label: 'Expenses', data: expenseData, backgroundColor: 'red' },
        ],
      },
    });

    res.setHeader('Content-Type', 'image/png');
    res.send(chart);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 3. Export Report in PDF Format
export const exportReportToPDF = async (req: Request, res: Response): Promise<void> => {
  const { startDate, endDate } = req.query;

  try {
    // Fetch data for the report
    const incomes = await prisma.income.findMany({ where: { Date: { gte: new Date(String(startDate)), lte: new Date(String(endDate)) } } });
    const expenses = await prisma.expenses.findMany({ where: { Date: { gte: new Date(String(startDate)), lte: new Date(String(endDate)) } } });
    
    const totalIncome = incomes.reduce((sum, income) => sum + income.Amount, 0);
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.Amount, 0);

    // Create a PDF document
    const doc = new PDFDocument();
    doc.pipe(res);

    doc.fontSize(18).text('Financial Report', { align: 'center' });
    doc.text(`Date Range: ${startDate} to ${endDate}`);
    doc.text(`Total Income: ${totalIncome}`);
    doc.text(`Total Expenses: ${totalExpenses}`);
    doc.text(`Net Balance: ${totalIncome - totalExpenses}`);

    doc.end();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 4. Export Report in Excel Format
export const exportReportToExcel = async (req: Request, res: Response): Promise<void> => {
  const { startDate, endDate } = req.query;

  try {
    // Fetch data for the report
    const incomes = await prisma.income.findMany({ where: { Date: { gte: new Date(String(startDate)), lte: new Date(String(endDate)) } } });
    const expenses = await prisma.expenses.findMany({ where: { Date: { gte: new Date(String(startDate)), lte: new Date(String(endDate)) } } });
    
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Financial Report');

    sheet.columns = [
      { header: 'Type', key: 'type', width: 15 },
      { header: 'Amount', key: 'amount', width: 15 },
      { header: 'Date', key: 'date', width: 20 },
    ];

    incomes.forEach(income => sheet.addRow({ type: 'Income', amount: income.Amount, date: income.Date }));
    expenses.forEach(expense => sheet.addRow({ type: 'Expense', amount: expense.Amount, date: expense.Date }));

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=financial_report.xlsx');

    await workbook.xlsx.write(res);
    res.end();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
