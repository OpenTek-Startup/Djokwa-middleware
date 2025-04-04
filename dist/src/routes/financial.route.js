"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const budget_controller_1 = require("../controllers/budget.controller");
const expenses_controller_1 = require("../controllers/expenses.controller");
const income_controller_1 = require("../controllers/income.controller");
const product_controller_1 = require("../controllers/product.controller");
const financialReport_controller_1 = require("../controllers/financialReport.controller");
const fee_controller_1 = require("../controllers/fee.controller");
const router = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   - name: Financial
 *     description: Financial operations and management
 */
/**
 * @swagger
 * /api/financial/budget:
 *   post:
 *     summary: Create a new budget
 *     tags: [Financial]
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
router.post('/budget', budget_controller_1.createBudget);
// Route to compare actual expenses against a specific budget
router.get('/budget/:budgetId/compare', budget_controller_1.compareExpensesToBudget);
/**
 * @swagger
 * /api/financial/expense:
 *   post:
 *     summary: Create a new expense
 *     tags: [Financial]
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
 *     tags: [Financial]
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
 *     tags: [Financial]
 *     responses:
 *       200:
 *         description: Expense report generated successfully
 */
// Expense Routes
// Route to create a new expense
router.post('/expense', expenses_controller_1.createExpense);
// Route to approve or reject an expense
router.put('/expense/:id/approve', expenses_controller_1.approveExpense);
// Route to generate an expense report
router.get('/expense/report', expenses_controller_1.generateExpenseReport);
/**
 * @swagger
 * /api/financial/income:
 *   post:
 *     summary: Record a new income entry
 *     tags: [Financial]
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
 *     tags: [Financial]
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
 *     tags: [Financial]
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
 *     tags: [Financial]
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
router.post('/donation', income_controller_1.recordDonation);
/**
 * @swagger
 * /api/financial/donation:
 *   get:
 *     summary: Fetch donations
 *     tags: [Financial]
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
router.get('/donation', income_controller_1.fetchDonations);
// Route to manually input income data
router.post('/income', income_controller_1.createIncome);
// Route to generate receipt for specific income entry
router.get('/income/:id/receipt', income_controller_1.generateReceipt);
// Route to filter income data by criteria
router.get('/income/filter', income_controller_1.filterIncome);
/**
 * @swagger
 * /api/financial/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Financial]
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
 *     tags: [Financial]
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
 *     tags: [Financial]
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
 *     tags: [Financial]
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
 *     tags: [Financial]
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
 *     tags: [Financial]
 *     responses:
 *       200:
 *         description: Inventory levels checked successfully
 *
 * /api/financial/products/sale:
 *   post:
 *     summary: Record a sale
 *     tags: [Financial]
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
router.post('/products', product_controller_1.createProduct);
router.get('/products', product_controller_1.getAllProducts);
router.get('/products/:id', product_controller_1.getProductById);
router.put('/products/:id', product_controller_1.updateProduct);
router.delete('/products/:id', product_controller_1.deleteProduct);
// Inventory Management Routes
router.get('/products/inventory/check', product_controller_1.checkInventoryLevels);
router.post('/products/sale', product_controller_1.recordSale);
/**
 * @swagger
 * /api/financial/reports/balance-sheet:
 *   get:
 *     summary: Generate a balance sheet report
 *     tags: [Financial]
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
 *     tags: [Financial]
 *     responses:
 *       200:
 *         description: Report exported to PDF successfully
 *
 * /api/financial/reports/export/excel:
 *   get:
 *     summary: Export report to Excel
 *     tags: [Financial]
 *     responses:
 *       200:
 *         description: Report exported to Excel successfully
 */
// Generate financial
// Generate financial report with donations
router.get('/report', income_controller_1.generateReportWithDonations);
router.get('/reports/balance-sheet', financialReport_controller_1.generateBalanceSheet);
//router.get('/reports/cash-flow', generateCashFlowReport);
// Export reports to different formats
router.get('/reports/export/pdf', financialReport_controller_1.exportReportToPDF);
router.get('/reports/export/excel', financialReport_controller_1.exportReportToExcel);
//services
router.post('/process-fee', fee_controller_1.processStudentFee);
exports.default = router;
