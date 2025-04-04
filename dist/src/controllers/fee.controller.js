"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processStudentFee = void 0;
const client_1 = require("@prisma/client");
const studentService_1 = require("../services/studentService");
const prisma = new client_1.PrismaClient();
const processStudentFee = async (req, res) => {
    const { studentId, amount } = req.body;
    try {
        // Fetch student data from the Student Management module
        const student = await (0, studentService_1.getStudentData)(studentId);
        if (!student) {
            res.status(404).json({ error: 'Student not found.' });
            return;
        }
        // Record fee payment in financial module
        const payment = await prisma.income.create({
            data: {
                Amount: amount,
                Description: `Fee payment for ${student.firstName} ${student.lastName}`,
                Date: new Date(),
                IncomeType: 'Tuition',
                User_ID: studentId,
            },
        });
        res.status(201).json({ message: 'Fee processed successfully', payment });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.processStudentFee = processStudentFee;
