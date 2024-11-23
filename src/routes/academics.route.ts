import { Router } from 'express';
import {
  createAssignment,
  submitAssignment,
  getSubmissions,
  deleteAssignment,
  createClass,
  getClass,
  updateClass,
  deleteClass,
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
  updateAssignment,
} from '../controllers/academics.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
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
router.post('/class', authMiddleware(['admin', 'teacher']), createClass);
router.get('/get-class', getClass);
router.put('/update-class/:id', authMiddleware, updateClass);
router.delete('/class/:id', authMiddleware, deleteClass);

// Course Routes
router.post('/course', authMiddleware, createCourse);
router.get('/course', getCourse);
router.put('/course/:id', authMiddleware, updateCourse);
router.delete('/course/:id', authMiddleware, deleteCourse);

// Assignment Routes
router.post('/assignment', authMiddleware, createAssignment);
router.post('/assignment/submit', authMiddleware, submitAssignment);
router.put('/assignments/:id', authMiddleware, updateAssignment);
router.get('/assignment/:id/submissions', authMiddleware, getSubmissions);
router.delete('/assignment/:id/delete', authMiddleware, deleteAssignment);

export default router;
