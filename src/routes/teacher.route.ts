import { Router } from 'express';
import {
  signInTeacher,
  signUpTeacher,
  updateTeacher,
  deleteTeacher,
  logoutTeacher,
  getTeachers,
} from '../controllers/teacher.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: Operations related to teachers
 */
/**
 * @swagger
 * paths:
 *   /api/teacher/sign-in:
 *     post:
 *       tags: [Teachers]
 *       summary: Sign in a teacher
 *       responses:
 *         200:
 *           description: Successfully signed in
 *         401:
 *           description: Invalid credentials
 *   /api/teacher/sign-up:
 *     post:
 *       tags: [Teachers]
 *       summary: Sign up a new teacher
 *       responses:
 *         201:
 *           description: Teacher created successfully
 *         400:
 *           description: Failed to sign up
 *   /api/teacher/update:
 *     put:
 *       tags: [Teachers]
 *       summary: Update teacher information
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Teacher updated successfully
 *         401:
 *           description: Unauthorized
 *   /api/teacher/delete:
 *     delete:
 *       tags: [Teachers]
 *       summary: Delete a teacher
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Teacher deleted successfully
 *         401:
 *           description: Unauthorized
 *   /api/teacher/logout:
 *     post:
 *       tags: [Teachers]
 *       summary: Log out a teacher
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Successfully logged out
 *         401:
 *           description: Unauthorized
 *   /api/teacher/all-teachers:
 *     get:
 *       tags: [Teachers]
 *       summary: Retrieve all teachers
 *       responses:
 *         200:
 *           description: A list of teachers
 *         404:
 *           description: No teachers found
 */
router.get('/sign-in', signInTeacher);
router.post('/sign-up', signUpTeacher);
router.put('/update', authMiddleware, updateTeacher);
router.delete('/delete', authMiddleware, deleteTeacher);
router.post('/logout', authMiddleware, logoutTeacher);
router.get('/all-teachers', getTeachers);

export default router;
