import { Router } from "express";
import { createAssignment, submitAssignment, getSubmissions, deleteAssignment } from "../controllers/assignment.controller";

const router = Router();

/**
 * @swagger
 * /api/assignment:
 *   post:
 *     summary: Create a new assignment
 *     tags: [Assignments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               due_Date:
 *                 type: string
 *                 format: date-time
 *               class_id:
 *                 type: integer
 *               course_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Assignment created successfully
 */
router.post('/assignment', createAssignment);

/**
 * @swagger
 * /api/submit:
 *   post:
 *     summary: Submit an assignment
 *     tags: [Assignments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               file_Url:
 *                 type: string
 *               submitted_at:
 *                 type: string
 *                 format: date-time
 *               Assignment_id:
 *                 type: integer
 *               Student_ID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Assignment submitted successfully
 */
router.post('/submit', submitAssignment);

/**
 * @swagger
 * /api/submissions/{Assignment_id}:
 *   get:
 *     summary: Get all submissions for a specific assignment
 *     tags: [Assignments]
 *     parameters:
 *       - in: path
 *         name: Assignment_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The assignment ID
 *     responses:
 *       200:
 *         description: A list of submissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   file_Url:
 *                     type: string
 *                   submitted_at:
 *                     type: string
 *                     format: date-time
 *                   Student_ID:
 *                     type: integer
 *                   Assignment_id:
 *                     type: integer
 */
router.get('/submissions/:Assignment_id', getSubmissions);

/**
 * @swagger
 * /api/assignment/{id}:
 *   delete:
 *     summary: Delete an assignment
 *     tags: [Assignments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The assignment ID
 *     responses:
 *       200:
 *         description: Assignment deleted successfully
 */
router.delete('/assignment/:id', deleteAssignment);

export default router;
