"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareExpensesToBudget = exports.createBudget = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Create Budget
const createBudget = async (req, res) => {
    const { Name, Description, Amount, Year, TimeFrame } = req.body;
    try {
        const newBudget = await prisma.budget.create({
            data: { Name, Description, Amount, Year, TimeFrame },
        });
        res.status(201).json(newBudget);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.createBudget = createBudget;
// Compare Actual Expenses Against Budget
const compareExpensesToBudget = async (req, res) => {
    const { budgetId } = req.params;
    try {
        // Retrieve the specified budget and related expenses
        const budget = await prisma.budget.findUnique({
            where: { Budget_ID: Number(budgetId) },
            include: { Expenses: true },
        });
        if (!budget) {
            res.status(404).json({ error: 'Budget not found' });
            return;
        }
        // Calculate total actual expenses
        const totalExpenses = budget.Expenses.reduce((sum, expense) => sum + expense.Amount, 0);
        // Update the budget with actual expenses
        await prisma.budget.update({
            where: { Budget_ID: Number(budgetId) },
            data: { ActualExpenses: totalExpenses },
        });
        // Check for discrepancies and send an alert if the budget is exceeded
        const alertMessage = totalExpenses > budget.Amount
            ? `Alert: Actual expenses (${totalExpenses}) exceed the budgeted amount (${budget.Amount})!`
            : `Actual expenses (${totalExpenses}) are within the budgeted amount (${budget.Amount}).`;
        res.status(200).json({
            Budget_ID: budget.Budget_ID,
            Name: budget.Name,
            Amount: budget.Amount,
            ActualExpenses: totalExpenses,
            Status: totalExpenses > budget.Amount ? 'Exceeded' : 'Within Budget',
            Alert: totalExpenses > budget.Amount ? alertMessage : null,
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.compareExpensesToBudget = compareExpensesToBudget;
