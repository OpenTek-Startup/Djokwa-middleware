"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportReportToExcel = exports.exportReportToPDF = exports.generateBalanceSheet = exports.generateReportWithDonations = void 0;
const client_1 = require("@prisma/client");
const pdfkit_1 = __importDefault(require("pdfkit"));
const exceljs_1 = __importDefault(require("exceljs"));
const prisma = new client_1.PrismaClient();
const validateDates = (startDate, endDate) => {
    if (startDate && isNaN(Date.parse(startDate)))
        throw new Error('Invalid startDate format');
    if (endDate && isNaN(Date.parse(endDate)))
        throw new Error('Invalid endDate format');
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
        throw new Error('startDate cannot be later than endDate');
    }
};
// 1. Generate Financial Report with Donations
const generateReportWithDonations = async (req, res) => {
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
        const totalDonations = donations.reduce((sum, donation) => sum + donation.Amount, 0);
        const netIncome = totalIncome + totalDonations;
        res.status(200).json({
            totalIncome,
            totalDonations,
            netIncome,
            incomes,
            donations,
        });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.generateReportWithDonations = generateReportWithDonations;
// 2. Generate Balance Sheet
const generateBalanceSheet = async (req, res) => {
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
        const totalDonations = donations.reduce((sum, donation) => sum + donation.Amount, 0);
        const totalExpenses = expenses.reduce((sum, expense) => sum + expense.Amount, 0);
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
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.generateBalanceSheet = generateBalanceSheet;
// 3. Export Report to PDF
const exportReportToPDF = async (req, res) => {
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
        const totalDonations = donations.reduce((sum, donation) => sum + donation.Amount, 0);
        const totalExpenses = expenses.reduce((sum, expense) => sum + expense.Amount, 0);
        const netBalance = totalIncome + totalDonations - totalExpenses;
        const doc = new pdfkit_1.default();
        doc.pipe(res);
        doc.fontSize(18).text('Financial Report', { align: 'center' });
        doc.text(`Date Range: ${startDate} to ${endDate}`);
        doc.text(`Total Income: ${totalIncome}`);
        doc.text(`Total Donations: ${totalDonations}`);
        doc.text(`Total Expenses: ${totalExpenses}`);
        doc.text(`Net Balance: ${netBalance}`);
        doc.end();
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.exportReportToPDF = exportReportToPDF;
// 4. Export Report to Excel
const exportReportToExcel = async (req, res) => {
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
        const workbook = new exceljs_1.default.Workbook();
        const sheet = workbook.addWorksheet('Financial Report');
        sheet.columns = [
            { header: 'Type', key: 'type', width: 15 },
            { header: 'Amount', key: 'amount', width: 15 },
            { header: 'Date', key: 'date', width: 20 },
        ];
        incomes.forEach((income) => sheet.addRow({ type: 'Income', amount: income.Amount, date: income.Date }));
        donations.forEach((donation) => sheet.addRow({
            type: 'Donation',
            amount: donation.Amount,
            date: donation.DonationDate,
        }));
        expenses.forEach((expense) => sheet.addRow({
            type: 'Expense',
            amount: expense.Amount,
            date: expense.Date,
        }));
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=financial_report.xlsx');
        await workbook.xlsx.write(res);
        res.end();
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.exportReportToExcel = exportReportToExcel;
