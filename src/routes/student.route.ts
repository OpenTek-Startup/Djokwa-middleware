import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import {
  createStudent,
  deleteStudent,
  getStudent,
  updateStudent,
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
 *    /api/student/create:
 *     post:
 *       tags: [Student]
 *       summary: Create a student
 *       responses:
 *         200:
 *           description: Student registered Successfully
 *         401:
 *           description: Invalid credentials
 *
 *    /api/student/delete:
 *     delete:
 *       tags: [Student]
 *       summary: Delete a student
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Student account deleted successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Student account Not Found
 *
 *    /api/student/all-students:
 *     get:
 *       tags: [Student]
 *       summary: Retrieve all Students
 *       responses:
 *         200:
 *           description: A list of students information
 *         404:
 *           description: No student found
 *
 *    /api/student/update:
 *     put:
 *       tags: [Student]
 *       summary: Update a Student Information
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Student updated successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Student Not Found
 *
 */

router.post('/create', createStudent);
router.put('/update', authMiddleware, updateStudent);
router.delete('/delete', authMiddleware, deleteStudent);
router.get('/all-students', getStudent);

export default router;
