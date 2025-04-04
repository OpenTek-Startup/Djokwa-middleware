"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacher_controller_1 = require("../controllers/teacher.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
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
router.post('/sign-in', teacher_controller_1.signInTeacher);
router.post('/sign-up', teacher_controller_1.signUpTeacher);
router.put('/update', (0, auth_middleware_1.authMiddleware)(['teacher', 'admin']), teacher_controller_1.updateTeacher);
router.delete('/delete', (0, auth_middleware_1.authMiddleware)(['teacher']), teacher_controller_1.deleteTeacher);
router.post('/logout', (0, auth_middleware_1.authMiddleware)(['teacher']), teacher_controller_1.logoutTeacher);
router.get('/all-teachers', teacher_controller_1.getTeachers);
router.get('/:id/classes', teacher_controller_1.getClassesForTeachers);
router.get('/:id/subjects', teacher_controller_1.getSubjectsForTeacher);
router.get('/:id/absences', (0, auth_middleware_1.authMiddleware)(['teacher']), teacher_controller_1.getAbsencesForTeacher);
router.get('/:id/disciplines', (0, auth_middleware_1.authMiddleware)(['teacher']), teacher_controller_1.getDisciplineForTeacher);
router.get('/:id/pay-sleeps', (0, auth_middleware_1.authMiddleware)(['teacher']), teacher_controller_1.getPaysleepsForTeacher);
router.get('/:id/rhevaluations', teacher_controller_1.getRHEvaluationForTeacher);
router.get('/:id/leaves', teacher_controller_1.getLeavesForTeacher);
exports.default = router;
