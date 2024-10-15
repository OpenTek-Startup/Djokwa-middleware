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
 *         201:
 *           description: Student created successfully
 *         400:
 *           description: Invalid details
 *         500:
 *            description: Error creating students
 *
 *    /api/student/delete/{id}:
 *    delete:
        tags: [Student]
        summary: Delete a student
        security:
          - bearerAuth: []
        parameters:
          - in: path
            name: id
            required: true
            schema:
              type: number
            description: The student's ID
        responses:
          200:
            description: Student account deleted successfully
          400:
            description: Validation failed
          404:
            description: Student id not found
          500:
            description: Error deleting student

 *
 *    /api/student/all-students:
 *     get:
 *       tags: [Student]
 *       summary: Retrieve all Students
 *       responses:
 *         200:
 *           description: Succesfully retrieved students
 *         404:
 *           description: Error retrieving students
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
              type: number
            description: The student's ID
        responses:
          200:
            description: Student information updated successfully
          400:
            description: Validation failed
          404:
            description: Invalid Student ID
          500:
            description: Error updating student
 *
 */

router.post('/create', createStudent);
router.put('/update/:id', authMiddleware, updateStudent);
router.delete('/delete/:id', authMiddleware, deleteStudent);
router.get('/all-students', getStudent);

export default router;
