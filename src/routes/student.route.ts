import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
  getStudentById,
  signInStudent,
  logoutStudent,
} from '../controllers/student.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Student
 *   description: Operations related to Student
 */
/**
 * @swagger
 * paths:
 *   /api/student/create:
 *     post:
 *       tags: [Student]
 *       summary: Create a student
 *       responses:
 *         201:
 *           description: Student created successfully
 *         400:
 *           description: Invalid details
 *         500:
 *           description: Error creating student
 *
 *   /api/student/sign-in:
 *     post:
 *       tags: [Student]
 *       summary: Singin a student
 *       responses:
 *         201:
 *           description: Student signed in successfully
 *         400:
 *           description: Invalid details
 *         500:
 *           description: Error Signing in student
 *
 *   /api/student/delete/{id}:
 *     delete:
 *       tags: [Student]
 *       summary: Delete a student
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: number
 *           description: The student's ID
 *       responses:
 *         200:
 *           description: Student account deleted successfully
 *         400:
 *           description: Validation failed
 *         404:
 *           description: Student ID not found
 *         500:
 *           description: Error deleting student
 *
 *   /api/student:
 *     get:
 *       tags: [Student]
 *       summary: Retrieve all students
 *       responses:
 *         200:
 *           description: Successfully retrieved students
 *         404:
 *           description: Error retrieving students
 *
 *   /api/student/{id}:
 *     get:
 *       tags: [Student]
 *       summary: Retrieve a student by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: number
 *           description: The student's ID
 *       responses:
 *         200:
 *           description: Successfully retrieved student
 *         404:
 *           description: Student ID not found
 *
 *   /api/student/logout:
 *     post:
 *       tags: [Student]
 *       summary: Log out a student
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Successfully logged out
 *         401:
 *           description: Unauthorized
 *
 *   /api/student/update/{id}:
 *     put:
 *       tags: [Student]
 *       summary: Update a student's information
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: number
 *           description: The student's ID
 *       responses:
 *         200:
 *           description: Student information updated successfully
 *         400:
 *           description: Validation failed
 *         404:
 *           description: Invalid student ID
 *         500:
 *           description: Error updating student
 */

router.post('/create', createStudent);
router.post('/sign-in', signInStudent);
router.post('/logout', authMiddleware(['student']), logoutStudent);
router.get('/:id', authMiddleware, getStudentById);
router.put('/update/:id', authMiddleware, updateStudent);
router.delete('/delete/:id', authMiddleware, deleteStudent);
router.get('/', getStudents);

export default router;
