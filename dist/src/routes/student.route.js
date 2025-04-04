"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const student_controller_1 = require("../controllers/student.controller");
const router = (0, express_1.Router)();
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
router.post('/create', student_controller_1.createStudent);
router.post('/sign-in', student_controller_1.signInStudent);
router.post('/logout', (0, auth_middleware_1.authMiddleware)(['student']), student_controller_1.logoutStudent);
router.get('/:id', auth_middleware_1.authMiddleware, student_controller_1.getStudentById);
router.put('/update/:id', auth_middleware_1.authMiddleware, student_controller_1.updateStudent);
router.delete('/delete/:id', auth_middleware_1.authMiddleware, student_controller_1.deleteStudent);
router.get('/', student_controller_1.getStudents);
exports.default = router;
