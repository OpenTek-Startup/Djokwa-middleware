import { Request, Response } from 'express';
import { PrismaClient, ExpenseType, ApprovalStatus } from '@prisma/client';

const prisma = new PrismaClient();

// Utility function to group expenses by a specified field
function groupExpensesByField(expenses: any[], field: string) {
  return expenses.reduce((grouped: Record<string, any[]>, expense) => {
    const key = expense[field] || 'Unknown';
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(expense);
    return grouped;
  }, {});
}

// 1. Create Expense with Approval Workflow
export const createExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    Name,
    Description,
    Amount,
    Date,
    Department,
    Type,
    Vendor,
    Budget_ID,
  } = req.body;

  try {
    // Check if the specified Budget_ID exists
    const budget = await prisma.budget.findUnique({
      where: { Budget_ID },
    });

    // If budget does not exist, respond with an error message
    if (!budget) {
      res.status(400).json({
        error: 'A valid budget must be created before adding an expense.',
      });
      return;
    }

    // Create the expense if the budget exists
    const newExpense = await prisma.expenses.create({
      data: {
        Name,
        Description,
        Amount,
        Date,
        Department,
        Type,
        Vendor,
        Status: 'PENDING',
        Budget_ID,
      },
    });

    res.status(201).json(newExpense);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// 2. Approve or Reject Expense
export const approveExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { status, approvedBy } = req.body;
  try {
    const updatedExpense = await prisma.expenses.update({
      where: { Id: Number(id) },
      data: {
        Status: status,
        ApprovedBy: approvedBy,
      },
    });
    res.status(200).json(updatedExpense);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// 3. Generate Expense Report
export const generateExpenseReport = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { department, type, vendor, status, startDate, endDate } = req.query;
  try {
    const expenses = await prisma.expenses.findMany({
      where: {
        Department: department ? String(department) : undefined,
        Type: type ? (type as ExpenseType) : undefined,
        Vendor: vendor ? String(vendor) : undefined,
        Status: status ? (status as ApprovalStatus) : undefined,
        Date: {
          gte: startDate ? new Date(String(startDate)) : undefined,
          lte: endDate ? new Date(String(endDate)) : undefined,
        },
      },
      include: {
        Budget: true,
        Approver: true,
      },
    });

    const report = {
      totalExpenses: expenses.reduce((sum, exp) => sum + exp.Amount, 0),
      expenseCount: expenses.length,
      expenses,
      groupedByDepartment: groupExpensesByField(expenses, 'Department'),
      groupedByType: groupExpensesByField(expenses, 'Type'),
      groupedByVendor: groupExpensesByField(expenses, 'Vendor'),
      groupedByStatus: groupExpensesByField(expenses, 'Status'),
    };

    res.status(200).json(report);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
