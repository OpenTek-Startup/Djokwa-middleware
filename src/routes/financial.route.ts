import express from 'express';
import { createBudget, getAllBudgets, updateBudget, deleteBudget, createAnnualBudget, getAnnualBudget } from '../controllers/budget.controller';
import { createExpense, getAllExpenses, updateExpense, deleteExpense } from '../controllers/expenses.controller';
import { recordTuitionPayment } from '../controllers/income.controller';
import { createProduct, getAllProducts, updateProduct, deleteProduct } from '../controllers/product.controller';

const router = express.Router();

// Budget Routes
router.post('/budget', createBudget);
router.get('/budgets', getAllBudgets);
router.put('/budget/:id', updateBudget);
router.delete('/budget/:id', deleteBudget);
router.post('/budget/annual', createAnnualBudget);
router.get('/budget/annual/:year', getAnnualBudget);

// Expense Routes
router.post('/expense', createExpense);
router.get('/expenses', getAllExpenses);
router.put('/expense/:id', updateExpense);
router.delete('/expense/:id', deleteExpense);

// Income Routes
router.post('/income/tuition', recordTuitionPayment);

// Product Routes
router.post('/product', createProduct);
router.get('/products', getAllProducts);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;
