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
 *         400:
 *           description: Invalid details
 *
 *    /api/student/delete/{id}:
      delete:
        tags: [Student]
        summary: Delete a student
        security:
          - bearerAuth: []
        parameters:
          - in: path
            name: id
            required: true
            schema:
              type: string
            description: The student's ID
        responses:
          200:
            description: Student account deleted successfully
          401:
            description: Unauthorized
          404:
            description: Student account not found

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
 *    /api/student/update/{id}:
      put:
        tags: [Student]
        summary: Update a Student Information
        security:
          - bearerAuth: []
        parameters:
          - in: path
            name: id
            required: true
            schema:
              type: string
            description: The student's ID
        responses:
          200:
            description: Student updated successfully
          401:
            description: Unauthorized
          404:
            description: Student Not Found

 *
 */

router.post('/create', createStudent);
router.put('/update/:id', authMiddleware, updateStudent);
router.delete('/delete/:id', authMiddleware, deleteStudent);
router.get('/all-students', getStudent);

export default router;
