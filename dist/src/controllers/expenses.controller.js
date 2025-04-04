"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExpenseReport = exports.approveExpense = exports.createExpense = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Utility function to group expenses by a specified field
function groupExpensesByField(expenses, field) {
    return expenses.reduce((grouped, expense) => {
        const key = expense[field] || 'Unknown';
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(expense);
        return grouped;
    }, {});
}
// 1. Create Expense with Approval Workflow
const createExpense = async (req, res) => {
    const { Name, Description, Amount, Date, Department, Type, Vendor, Budget_ID, } = req.body;
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
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createExpense = createExpense;
// 2. Approve or Reject Expense
const approveExpense = async (req, res) => {
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
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.approveExpense = approveExpense;
// 3. Generate Expense Report
const generateExpenseReport = async (req, res) => {
    const { department, type, vendor, status, startDate, endDate } = req.query;
    try {
        const expenses = await prisma.expenses.findMany({
            where: {
                Department: department ? String(department) : undefined,
                Type: type ? type : undefined,
                Vendor: vendor ? String(vendor) : undefined,
                Status: status ? status : undefined,
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
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.generateExpenseReport = generateExpenseReport;
