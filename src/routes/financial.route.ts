import express from 'express';
import { createBudget,  compareExpensesToBudget } from '../controllers/budget.controller';
import { createExpense, approveExpense, generateExpenseReport, } from '../controllers/expenses.controller';
import { filterIncome, createIncome, generateReceipt, recordDonation, fetchDonations, generateReportWithDonations } from '../controllers/income.controller';
import { createProduct, getAllProducts, updateProduct, deleteProduct, getProductById, checkInventoryLevels, recordSale } from '../controllers/product.controller';
import {
    generateBalanceSheet,
    
    exportReportToPDF,
    exportReportToExcel,
  } from '../controllers/financialReport.controller';
import { processStudentFee } from '../controllers/fee.controller';
const router = express.Router();




/**
 * @swagger
 * tags:[]
 *   name: Financial module
 *   description: Operations related to finances
 */
    


/**
 * @swagger
 * /api/financial/budget:
 *   post:
 *     summary: Create a new budget
 *     tags: [Budget]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 description: The name of the budget
 *                 example: Annual IT Budget
 *               Description:
 *                 type: string
 *                 description: A brief description of the budget
 *                 example: Budget allocated for IT infrastructure
 *               Amount:
 *                 type: number
 *                 description: Total allocated budget
 *                 example: 100000
 *               Year:
 *                 type: string
 *                 description: The fiscal year for the budget
 *                 example: 2024
 *               TimeFrame:
 *                 type: string
 *                 enum: [Daily, Weekly, Monthly, Annual]
 *                 description: The time frame for the budget
 *                 example: Annual
 *     responses:
 *       201:
 *         description: Budget created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Budget_ID:
 *                   type: integer
 *                   example: 1
 *                 Name:
 *                   type: string
 *                   example: Annual IT Budget
 *                 Amount:
 *                   type: number
 *                   example: 100000
 *                 TimeFrame:
 *                   type: string
 *                   example: Annual
 */


// Route to create a new budget
router.post('/budget', createBudget);

// Route to compare actual expenses against a specific budget
router.get('/budget/:budgetId/compare', compareExpensesToBudget);


/**
 * @swagger
 * /api/financial/expense:
 *   post:
 *     summary: Create a new expense
 *     tags: [Expense]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 description: Name of the expense
 *                 example: IT Supplies
 *               Description:
 *                 type: string
 *                 description: A description of the expense
 *                 example: Purchase of new laptops for IT department
 *               Amount:
 *                 type: number
 *                 description: Expense amount
 *                 example: 5000
 *               Date:
 *                 type: string
 *                 format: date
 *                 description: Expense date
 *                 example: 2024-10-20
 *               Department:
 *                 type: string
 *                 description: Department the expense is associated with
 *                 example: IT
 *               Vendor:
 *                 type: string
 *                 description: Name of the vendor
 *                 example: Tech Supplies Inc.
 *               Budget_ID:
 *                 type: integer
 *                 description: ID of the associated budget
 *                 example: 1
 *     responses:
 *       201:
 *         description: Expense created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Expense_ID:
 *                   type: integer
 *                   example: 5
 *                 Name:
 *                   type: string
 *                   example: IT Supplies
 *                 Amount:
 *                   type: number
 *                   example: 5000
 * 
 * /api/financial/expense/{id}/approve:
 *   put:
 *     summary: Approve or reject an expense
 *     tags: [Expense]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the expense to approve or reject
 *     responses:
 *       200:
 *         description: Expense approved or rejected successfully
 * 
 * /api/financial/expense/report:
 *   get:
 *     summary: Generate an expense report
 *     tags: [Expense]
 *     responses:
 *       200:
 *         description: Expense report generated successfully
 */


// Expense Routes
// Route to create a new expense
router.post('/expense', createExpense);

// Route to approve or reject an expense
router.put('/expense/:id/approve', approveExpense);

// Route to generate an expense report
router.get('/expense/report', generateExpenseReport);



/**
 * @swagger
 * /api/financial/income:
 *   post:
 *     summary: Record a new income entry
 *     tags: [Income]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Description:
 *                 type: string
 *                 description: Description of the income
 *                 example: Tuition payment for John Doe
 *               Amount:
 *                 type: number
 *                 description: Income amount
 *                 example: 1500
 *               Date:
 *                 type: string
 *                 format: date
 *                 description: Date of income
 *                 example: 2024-10-01
 *               IncomeType:
 *                 type: string
 *                 description: Type of income
 *                 example: Tuition
 *               User_ID:
 *                 type: integer
 *                 description: ID of the user associated with the income
 *                 example: 1
 *     responses:
 *       201:
 *         description: Income recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Income_ID:
 *                   type: integer
 *                   example: 12
 *                 Amount:
 *                   type: number
 *                   example: 1500
 * 
 * /api/financial/income/{id}/receipt:
 *   get:
 *     summary: Generate receipt for a specific income entry
 *     tags: [Income]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the income entry
 *     responses:
 *       200:
 *         description: Receipt generated successfully
 * 
 * /api/financial/income/filter:
 *   get:
 *     summary: Filter income data by criteria
 *     tags: [Income]
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date for filtering
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: End date for filtering
 *     responses:
 *       200:
 *         description: Filtered income data retrieved successfully
 */

// Income Routes
//donation
/**
 * @swagger
 * /api/financial/donation:
 *   post:
 *     summary: Record a new donation
 *     tags: [Donation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Amount:
 *                 type: number
 *                 description: Amount of the donation
 *                 example: 1000
 *               Reason:
 *                 type: string
 *                 description: Reason for the donation
 *                 example: Support for school library
 *               Type:
 *                 type: string
 *                 description: Type of donation (e.g., one-time, recurring)
 *                 example: One-time
 *     responses:
 *       201:
 *         description: Donation recorded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Donation recorded successfully
 */
router.post('/donation', recordDonation);
/**
 * @swagger
 * /api/financial/donation:
 *   get:
 *     summary: Fetch donations
 *     tags: [Donation]
 *     parameters:
 *       - name: startDate
 *         in: query
 *         description: Start date for fetching donations
 *         schema:
 *           type: string
 *           format: date
 *           example: 2024-01-01
 *       - name: endDate
 *         in: query
 *         description: End date for fetching donations
 *         schema:
 *           type: string
 *           format: date
 *           example: 2024-12-31
 *     responses:
 *       200:
 *         description: Donations retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/donation', fetchDonations);

// Route to manually input income data
router.post('/income', createIncome);

// Route to generate receipt for specific income entry
router.get('/income/:id/receipt', generateReceipt);

// Route to filter income data by criteria
router.get('/income/filter', filterIncome);


/**
 * @swagger
 * /api/financial/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 description: Name of the product
 *                 example: Physics Textbook
 *               Description:
 *                 type: string
 *                 description: A brief description of the product
 *                 example: Advanced physics textbook
 *               Price:
 *                 type: number
 *                 description: Price of the product
 *                 example: 25
 *               Quantity:
 *                 type: number
 *                 description: Available stock quantity
 *                 example: 100
 *               LowStockAlert:
 *                 type: number
 *                 description: Threshold for low stock alerts
 *                 example: 20
 *               Warehouse_ID:
 *                 type: integer
 *                 description: ID of the warehouse storing the product
 *                 example: 1
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Product_ID:
 *                   type: integer
 *                   example: 10
 * 
 *   get:
 *     summary: Get all products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 * 
 * /api/financial/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product
 *     responses:
 *       200:
 *         description: Product details retrieved successfully
 * 
 *   put:
 *     summary: Update a product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 description: Name of the product
 *                 example: Physics Textbook
 *               Description:
 *                 type: string
 *                 description: A brief description of the product
 *                 example: Advanced physics textbook
 *               Price:
 *                 type: number
 *                 description: Price of the product
 *                 example: 25
 *               Quantity:
 *                 type: number
 *                 description: Available stock quantity
 *                 example: 100
 *               LowStockAlert:
 *                 type: number
 *                 description: Threshold for low stock alerts
 *                 example: 20
 *               Warehouse_ID:
 *                 type: integer
 *                 description: ID of the warehouse storing the product
 *                 example: 1
 *     responses:
 *       200:
 *         description: Product updated successfully
 * 
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
 * 
 * /api/financial/products/inventory/check:
 *   get:
 *     summary: Check inventory levels
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Inventory levels checked successfully
 * 
 * /api/financial/products/sale:
 *   post:
 *     summary: Record a sale
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Product_ID:
 *                 type: integer
 *                 description: ID of the product sold
 *                 example: 10
 *               Quantity:
 *                 type: number
 *                 description: Quantity sold
 *                 example: 5
 *     responses:
 *       201:
 *         description: Sale recorded successfully
 */

// CRUD Routes for Products
router.post('/products', createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// Inventory Management Routes
router.get('/products/inventory/check', checkInventoryLevels);
router.post('/products/sale', recordSale);


/**
 * @swagger
 * tags:
 *   name: Report
 *   description: Endpoints for generating financial reports
 */

/**
 * @swagger
 * /api/financial/reports/balance-sheet:
 *   get:
 *     summary: Generate a balance sheet report
 *     tags: [Report]
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date for the report
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         description: End date for the report
 *     responses:
 *       200:
 *         description: Balance sheet report generated successfully
 * 
 * /api/financial/reports/export/pdf:
 *   get:
 *     summary: Export report to PDF
 *     tags: [Report]
 *     responses:
 *       200:
 *         description: Report exported to PDF successfully
 * 
 * /api/financial/reports/export/excel:
 *   get:
 *     summary: Export report to Excel
 *     tags: [Report]
 *     responses:
 *       200:
 *         description: Report exported to Excel successfully
 */


  
// Generate financial 

// Generate financial report with donations
router.get('/report', generateReportWithDonations);
router.get('/reports/balance-sheet', generateBalanceSheet);
//router.get('/reports/cash-flow', generateCashFlowReport);

// Export reports to different formats
router.get('/reports/export/pdf', exportReportToPDF);
router.get('/reports/export/excel', exportReportToExcel);


//services
router.post('/process-fee', processStudentFee);
export default router;
