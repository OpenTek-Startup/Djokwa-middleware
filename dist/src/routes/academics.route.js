"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const academics_controller_1 = require("../controllers/academics.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Academics
 *   description: Operations related to an academic year
 */
/**
 * @swagger
 * paths:
 *   /api/academics/assignment:
 *     post:
 *       tags: [Academics]
 *       summary: Create an assignment
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         201:
 *           description: Assignment created successfully
 *         400:
 *           description: Invalid details
 *         401:
 *           description: Invalid credentials
 *
 *   /api/academics/assignment/submit:
 *     post:
 *       tags: [Academics]
 *       summary: Submit an assignment
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Assignment submitted successfully
 *         401:
 *           description: Invalid credentials
 *
 *   /api/academics/assignment/{id}/submissions:
 *     get:
 *       tags: [Academics]
 *       summary: Retrieve submissions for an assignment
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: A list of assignments submitted
 *         404:
 *           description: No assignment found
 *
 *   /api/academics/assignment/{id}/delete:
 *     delete:
 *       tags: [Academics]
 *       summary: Delete an assignment
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Assignment deleted successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Assignment not found
 *
 *   /api/academics/assignments/{id}:
 *     put:
 *       tags: [Academics]
 *       summary: Update an existing assignment
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Assignment updated successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Assignment not found
 *
 *   /api/academics/class:
 *     post:
 *       tags: [Academics]
 *       summary: Create a class
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         201:
 *           description: Class created successfully
 *         400:
 *           description: Invalid details
 *         401:
 *           description: Invalid credentials
 *
 *   /api/academics/get-class:
 *     get:
 *       tags: [Academics]
 *       summary: Retrieve information about classes
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: A list of class data
 *         404:
 *           description: No class found
 *
 *   /api/academics/update-class/{id}:
 *     put:
 *       tags: [Academics]
 *       summary: Update class information
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Class updated successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Class not found
 *
 *   /api/academics/class/{id}:
 *     delete:
 *       tags: [Academics]
 *       summary: Delete a class
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Class deleted successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Class not found
 *
 *   /api/academics/course/:
 *     post:
 *       tags: [Academics]
 *       summary: Create a course
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         201:
 *           description: Course created successfully
 *         400:
 *           description: Invalid details
 *         401:
 *           description: Invalid credentials
 *
 *   /api/academics/course:
 *     get:
 *       tags: [Academics]
 *       summary: Retrieve all courses
 *       responses:
 *         200:
 *           description: A list of courses
 *         404:
 *           description: No courses found
 *
 *   /api/academics/course/{id}/:
 *     put:
 *       tags: [Academics]
 *       summary: Update a course
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Course updated successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Course not found
 *
 *   /api/academics/course/{id}:
 *     delete:
 *       tags: [Academics]
 *       summary: Delete a course
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Course deleted successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Course not found
 */
// Class Routes
router.post('/class', (0, auth_middleware_1.authMiddleware)(['admin', 'teacher']), academics_controller_1.createClass);
router.get('/get-class', academics_controller_1.getClass);
router.put('/update-class/:id', auth_middleware_1.authMiddleware, academics_controller_1.updateClass);
router.delete('/class/:id', auth_middleware_1.authMiddleware, academics_controller_1.deleteClass);
// Course Routes
router.post('/course', auth_middleware_1.authMiddleware, academics_controller_1.createCourse);
router.get('/course', academics_controller_1.getCourse);
router.put('/course/:id', auth_middleware_1.authMiddleware, academics_controller_1.updateCourse);
router.delete('/course/:id', auth_middleware_1.authMiddleware, academics_controller_1.deleteCourse);
// Assignment Routes
router.post('/assignment', auth_middleware_1.authMiddleware, academics_controller_1.createAssignment);
router.post('/assignment/submit', auth_middleware_1.authMiddleware, academics_controller_1.submitAssignment);
router.put('/assignments/:id', auth_middleware_1.authMiddleware, academics_controller_1.updateAssignment);
router.get('/assignment/:id/submissions', auth_middleware_1.authMiddleware, academics_controller_1.getSubmissions);
router.delete('/assignment/:id/delete', auth_middleware_1.authMiddleware, academics_controller_1.deleteAssignment);
exports.default = router;
