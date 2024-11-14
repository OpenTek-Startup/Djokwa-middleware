import express from 'express';
import { createBudget,  compareExpensesToBudget } from '../controllers/budget.controller';
import { createExpense, approveExpense, generateExpenseReport, } from '../controllers/expenses.controller';
import { filterIncome, createIncome, generateReceipt } from '../controllers/income.controller';
import { createProduct, getAllProducts, updateProduct, deleteProduct, getProductById, checkInventoryLevels, recordSale } from '../controllers/product.controller';
import {
    generateBalanceSheet,
    generateCashFlowReport,
    exportReportToPDF,
    exportReportToExcel,
  } from '../controllers/financialReport.controller';
const router = express.Router();

// Route to create a new budget
router.post('/budget', createBudget);

// Route to compare actual expenses against a specific budget
router.get('/budget/:budgetId/compare', compareExpensesToBudget);


// Expense Routes
// Route to create a new expense
router.post('/expense', createExpense);

// Route to approve or reject an expense
router.put('/expense/:id/approve', approveExpense);

// Route to generate an expense report
router.get('/expense/report', generateExpenseReport);




// Income Routes
// Route to manually input income data
router.post('/income', createIncome);

// Route to generate receipt for specific income entry
router.get('/income/:id/receipt', generateReceipt);

// Route to filter income data by criteria
router.get('/income/filter', filterIncome);

// CRUD Routes for Products
router.post('/products', createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// Inventory Management Routes
router.get('/products/inventory/check', checkInventoryLevels);
router.post('/products/sale', recordSale);


// Generate financial reports
router.get('/reports/balance-sheet', generateBalanceSheet);
router.get('/reports/cash-flow', generateCashFlowReport);

// Export reports to different formats
router.get('/reports/export/pdf', exportReportToPDF);
router.get('/reports/export/excel', exportReportToExcel);
export default router;
