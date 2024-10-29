import express from 'express';
import {
  createAssignment,
  submitAssignment,
  getSubmissions,
  deleteAssignment,
  createClass,
  getClass,
  updateClass,
  deleteClass,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
  createGrade,
  getAllGrades,
  getGradeById,
  updateGrade,
  deleteGrade
} from '../controllers/academics.controller';


const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Assignment:
 *       type: object
 *       required:
 *         - title
 *         - dueDate
 *         - classId
 *         - courseId
 *         - teacherId
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the assignment
 *         dueDate:
 *           type: string
 *           format: date-time
 *           description: Due date of the assignment
 *         description:
 *           type: string
 *           description: Assignment description
 *         classId:
 *           type: integer
 *           description: ID of the associated class
 *         courseId:
 *           type: integer
 *           description: ID of the associated course
 *         teacherId:
 *           type: integer
 *           description: ID of the teacher
 *     
 *     Class:
 *       type: object
 *       required:
 *         - name
 *         - classCode
 *         - teacherId
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the class
 *         classCode:
 *           type: string
 *           description: Unique code for the class
 *         teacherId:
 *           type: integer
 *           description: ID of the teacher
 *         capacity:
 *           type: integer
 *           description: Maximum number of students
 *         currentEnrollment:
 *           type: integer
 *           description: Current number of enrolled students
 *     
 *     Course:
 *       type: object
 *       required:
 *         - Name
 *         - courseCode
 *         - teacherId
 *         - classId
 *       properties:
 *         Name:
 *           type: string
 *           description: Name of the course
 *         courseCode:
 *           type: string
 *           description: Unique code for the course
 *         Coefficient:
 *           type: number
 *           description: Course coefficient/weight
 *         teacherId:
 *           type: integer
 *           description: ID of the teacher
 *         classId:
 *           type: integer
 *           description: ID of the class
 *         StartDate:
 *           type: string
 *           format: date
 *         EndDate:
 *           type: string
 *           format: date
 *     
 *     Grade:
 *       type: object
 *       required:
 *         - value
 *         - studentId
 *         - courseId
 *       properties:
 *         value:
 *           type: number
 *           description: Grade value
 *         studentId:
 *           type: integer
 *           description: ID of the student
 *         courseId:
 *           type: integer
 *           description: ID of the course
 *         assignmentId:
 *           type: integer
 *           description: ID of the assignment
 */

/**
 * @swagger
 * tags:
 *   - name: Assignments
 *     description: Assignment management
 *   - name: Classes
 *     description: Class management
 *   - name: Courses
 *     description: Course management
 *   - name: Grades
 *     description: Grade management
 */

/**
 * @swagger
 * /api/assignments:
 *   post:
 *     tags: [Assignments]
 *     summary: Create a new assignment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Assignment'
 *     responses:
 *       201:
 *         description: Assignment created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 * 
 * /api/assignments/submit:
 *   post:
 *     tags: [Assignments]
 *     summary: Submit an assignment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - assignmentId
 *               - studentId
 *               - fileUrl
 *               - teacherId
 *             properties:
 *               assignmentId:
 *                 type: integer
 *               studentId:
 *                 type: integer
 *               fileUrl:
 *                 type: string
 *               teacherId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Assignment submitted successfully
 * 
 * /api/assignments/{id}/submissions:
 *   get:
 *     tags: [Assignments]
 *     summary: Get all submissions for an assignment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of submissions
 * 
 * /api/assignments/{id}:
 *   delete:
 *     tags: [Assignments]
 *     summary: Delete an assignment
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Assignment deleted successfully
 */

/**
 * @swagger
 * /api/classes:
 *   post:
 *     tags: [Classes]
 *     summary: Create a new class
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       201:
 *         description: Class created successfully
 *   
 *   get:
 *     tags: [Classes]
 *     summary: Get all classes
 *     responses:
 *       200:
 *         description: List of all classes
 * 
 * /api/classes/{id}:
 *   put:
 *     tags: [Classes]
 *     summary: Update a class
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: Class updated successfully
 *   
 *   delete:
 *     tags: [Classes]
 *     summary: Delete a class
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Class deleted successfully
 */

/**
 * @swagger
 * /api/courses:
 *   post:
 *     tags: [Courses]
 *     summary: Create a new course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: Course created successfully
 *   
 *   get:
 *     tags: [Courses]
 *     summary: Get all courses
 *     responses:
 *       200:
 *         description: List of all courses
 * 
 * /api/courses/{id}:
 *   put:
 *     tags: [Courses]
 *     summary: Update a course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course updated successfully
 *   
 *   delete:
 *     tags: [Courses]
 *     summary: Delete a course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Course deleted successfully
 */

/**
 * @swagger
 * /api/grades:
 *   post:
 *     tags: [Grades]
 *     summary: Create a new grade
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Grade'
 *     responses:
 *       201:
 *         description: Grade created successfully
 *   
 *   get:
 *     tags: [Grades]
 *     summary: Get all grades
 *     responses:
 *       200:
 *         description: List of all grades
 * 
 * /api/grades/{id}:
 *   get:
 *     tags: [Grades]
 *     summary: Get a grade by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Grade details
 *   
 *   put:
 *     tags: [Grades]
 *     summary: Update a grade
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Grade'
 *     responses:
 *       200:
 *         description: Grade updated successfully
 *   
 *   delete:
 *     tags: [Grades]
 *     summary: Delete a grade
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Grade deleted successfully
 */


// Assignment routes
router.post('/assignments', createAssignment);
router.post('/assignments/submit', submitAssignment);
router.get('/assignments/:id/submissions', getSubmissions);
router.delete('/assignments/:id', deleteAssignment);

// Class routes
router.post('/classes', createClass);
router.get('/classes', getClass);
router.put('/classes/:id', updateClass);
router.delete('/classes/:id', deleteClass);

// Course routes
router.post('/courses', createCourse);
router.get('/courses', getCourse);
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

// Grade routes
router.post('/grades', createGrade);
router.get('/grades', getAllGrades);
router.get('/grades/:id', getGradeById);
router.put('/grades/:id', updateGrade);
router.delete('/grades/:id', deleteGrade);

export default router;


