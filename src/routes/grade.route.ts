import { Router } from "express";
import {
  getGrades,
  assignGrade,
  getWeeklyGradingReport,
  getMonthlyGradingReport,
} from "../controllers/grade.controller";

const router = Router();

/**
 * @swagger
 * /api/grades:
 *   get:
 *     summary: Get all grades
 *     tags: [Grades]
 *     responses:
 *       200:
 *         description: A list of grades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Grade_ID:
 *                     type: integer
 *                   Value:
 *                     type: number
 *                   Assignment_ID:
 *                     type: integer
 *                   Student_ID:
 *                     type: integer
 *                   Course_ID:
 *                     type: integer
 */
router.get("/grades", getGrades);

/**
 * @swagger
 * /api/assign/grade:
 *   post:
 *     summary: Assign a grade to a student
 *     tags: [Grades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Value:
 *                 type: number
 *               Assignment_ID:
 *                 type: integer
 *               Student_ID:
 *                 type: integer
 *               Course_ID:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Grade assigned successfully
 */
router.post("/assign/grade", assignGrade);

/**
 * @swagger
 * /api/grades/weekly:
 *   get:
 *     summary: Get weekly grading report
 *     tags: [Grades]
 *     responses:
 *       200:
 *         description: Weekly grading report
 */
router.get("/grades/weekly", getWeeklyGradingReport);

/**
 * @swagger
 * /api/grade/monthly:
 *   get:
 *     summary: Get monthly grading report
 *     tags: [Grades]
 *     responses:
 *       200:
 *         description: Monthly grading report
 */
router.get("/grade/monthly", getMonthlyGradingReport);

export default router;
