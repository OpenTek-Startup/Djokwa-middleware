import { Router } from "express";
import { getAttendance, 
    updateAttendance, 
    deleteAttendance, 
    recordAttendance } from "../controllers/attendance.controller";

const router = Router();

/**
 * @swagger
 * /api/attendanceRecord:
 *   get:
 *     summary: Get a list of attendance records
 *     tags: [Attendance]
 *     responses:
 *       200:
 *         description: A list of attendance records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/attendanceRecord', getAttendance);

/**
 * @swagger
 * /api/attendance:
 *   post:
 *     summary: Record a new attendance
 *     tags: [Attendance]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: integer
 *               course_id:
 *                 type: integer
 *               date:
 *                 type: string
 *                 format: date-time
 *               permission:
 *                 type: string
 *               Absence:
 *                 type: string
 *               Lateness:
 *                 type: string
 *     responses:
 *       201:
 *         description: Attendance recorded successfully
 */
router.post('/attendance', recordAttendance);

/**
 * @swagger
 * /api/{id}/updateAttendance:
 *   put:
 *     summary: Update an existing attendance record
 *     tags: [Attendance]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The attendance record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: integer
 *               course_id:
 *                 type: integer
 *               date:
 *                 type: string
 *                 format: date-time
 *               permission:
 *                 type: string
 *               Absence:
 *                 type: string
 *               Lateness:
 *                 type: string
 *               Presence:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Attendance updated successfully
 */
router.put('/:id/updateAttendance', updateAttendance);

/**
 * @swagger
 * /api/{id}/deleteAttendance:
 *   delete:
 *     summary: Delete an attendance record by ID
 *     tags: [Attendance]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The attendance record ID
 *     responses:
 *       200:
 *         description: Attendance record deleted successfully
 */
router.delete('/:id/deleteAttendance', deleteAttendance);

export default router;
