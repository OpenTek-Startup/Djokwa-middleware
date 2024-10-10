import { Router } from "express";
import {
  createStudent,
  getAcademicRecord,
  getStudent,
  getStudents,
  deleteStudent,
  updateStudent,
  getAcademicRecords,
  createAttendance,
  getAttendance,
  getAttendanceByStudent,
} from "../controllers/studentRecord.controller";

const router = Router();

/**
 * @swagger
 * /api/student:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               First_Name:
 *                 type: string
 *               Last_Name:
 *                 type: string
 *               Date_Of_Birth:
 *                 type: string
 *                 format: date
 *               Gender:
 *                 type: string
 *               Address:
 *                 type: string
 *               Phone:
 *                 type: string
 *               Medical_Info:
 *                 type: string
 *               Class_ID:
 *                 type: integer
 *               Program_id:
 *                 type: integer
 *               enrollmentYear:
 *                 type: integer
 *               gpa:
 *                 type: number
 *               Graduation_id:
 *                 type: integer
 *               Discipline_ids:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       201:
 *         description: Student created successfully
 */
router.post("/student", createStudent);

/**
 * @swagger
 * /api/{id}/student:
 *   get:
 *     summary: Get student by ID
 *     tags: [Students]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student data
 */
router.get("/:id/student", getStudent);

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get list of all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: A list of students
 */
router.get("/students", getStudents);

/**
 * @swagger
 * /api/student/Student_ID:
 *   put:
 *     summary: Update student by ID
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               First_Name:
 *                 type: string
 *               Last_Name:
 *                 type: string
 *               Class_ID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Student updated successfully
 */
router.put("/student/Student_ID", updateStudent);

/**
 * @swagger
 * /api/student/Student_ID:
 *   delete:
 *     summary: Delete student by ID
 *     tags: [Students]
 *     parameters:
 *       - name: Student_ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Student deleted successfully
 */
router.delete("/student/Student_ID", deleteStudent);

/**
 * @swagger
 * /api/studentRecord/Student_ID:
 *   get:
 *     summary: Get academic record of a student by ID
 *     tags: [Academic Records]
 *     parameters:
 *       - name: Student_ID
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Academic record data
 */
router.get("/studentRecord/Student_ID", getAcademicRecord);

/**
 * @swagger
 * /api/studentRecords:
 *   get:
 *     summary: Get all academic records
 *     tags: [Academic Records]
 *     responses:
 *       200:
 *         description: List of academic records
 */
router.get("/studentRecords", getAcademicRecords);

/**
 * @swagger
 * /api/attendance:
 *   post:
 *     summary: Create a new attendance record
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
 *                 format: date
 *               permission:
 *                 type: string
 *               Absence:
 *                 type: string
 *               Lateness:
 *                 type: string
 *     responses:
 *       201:
 *         description: Attendance record created successfully
 */
router.post("/attendance", createAttendance);

/**
 * @swagger
 * /api/attendance/{id}:
 *   get:
 *     summary: Get attendance by student ID
 *     tags: [Attendance]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Attendance record for the student
 */
router.get("/attendance/:id", getAttendanceByStudent);

/**
 * @swagger
 * /api/attendances:
 *   get:
 *     summary: Get all attendance records
 *     tags: [Attendance]
 *     responses:
 *       200:
 *         description: List of attendance records
 */
router.get("/attendances", getAttendance);

export default router;
