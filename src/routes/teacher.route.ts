import { Router } from 'express';
import {
  signInTeacher,
  signUpTeacher,
  updateTeacher,
  deleteTeacher,
  logoutTeacher,
  getTeachers,
  getClassesForTeachers,
  getSubjectsForTeacher,
  getAbsencesForTeacher,
  getDisciplineForTeacher,
  getPaysleepsForTeacher,
  getRHEvaluationForTeacher,
  getLeavesForTeacher,
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
 *   /api/teacher/{:id}/classes:
 *     get:
 *       tags: [Teachers]
 *       summary: Retrieve teacher's classes
 *       responses:
 *         200:
 *           description: A list of teacher's classes
 *         404:
 *           description: No classes found
 *   /api/teacher/{:id}/subjects:
 *     get:
 *       tags: [Teachers]
 *       summary: Retrieve teacher's courses
 *       responses:
 *         200:
 *           description: A list of courses for a teacher
 *         404:
 *           description: No course found for the teacher
 *   /api/teacher/{:id}/absences:
 *     get:
 *       tags: [Teachers]
 *       summary: Retrieve teacher's absences
 *   /api/teacher/{:id}/disciplines:
 *     get:
 *       tags: [Teachers]
 *       summary: Retrieve teacher's disciplines
 *   /api/teacher/{:id}/pay-sleeps:
 *     get:
 *       tags: [Teachers]
 *       summary: Retrieve teacher's pay-sleeps
 *   /api/teacher/{:id}/rhevaluations:
 *     get:
 *       tags: [Teachers]
 *       summary: Retrieve teacher's rhevaluations
 *   /api/teacher/{:id}/leaves:
 *     get:
 *       tags: [Teachers]
 *       summary: Retrieve teacher's leaves
 *
 */
router.post('/sign-in', signInTeacher);
router.post('/sign-up', signUpTeacher);
router.put('/update', authMiddleware, updateTeacher);
router.delete('/delete', authMiddleware, deleteTeacher);
router.post('/logout', authMiddleware, logoutTeacher);
router.get('/all-teachers', getTeachers);
router.get('/:id/classes', getClassesForTeachers);
router.get('/:id/subjects', getSubjectsForTeacher);
router.get('/:id/absences', authMiddleware, getAbsencesForTeacher);
router.get('/:id/disciplines', authMiddleware, getDisciplineForTeacher);
router.get('/:id/pay-sleeps', authMiddleware, getPaysleepsForTeacher);
router.get('/:id/rhevaluations', getRHEvaluationForTeacher);
router.get('/:id/leaves', getLeavesForTeacher);

export default router;
