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
 *   name: academics
 *   description: Operations related to an academic year
 */
/**
 * @swagger
 * paths:
 *    /api/academics/assignment:
 *     post:
 *       tags: [academics]
 *       summary: Creating an assignment
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Assignment created successfully
 *         401:
 *           description: Invalid credentials
 *
 *    /api/academics/assignment/submit:
 *     post:
 *       tags: [academics]
 *       summary: Submitting an assignment
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Assignment submitted successfully
 *         401:
 *           description: Invalid credentials
 *
 *    /api/academics/assignment/{id}/submissions:
 *     get:
 *       tags: [academics]
 *       summary: Retrieve submissions for an assignment
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: A list of assignments submitted
 *         404:
 *           description: No assignment found
 *
 *    /api/academics/assignment/{id}/delete:
 *     delete:
 *       tags: [academics]
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
 *    /api/academics/assignments/{id}:
 *     put:
 *       tags: [academics]
 *       summary: Update an existing assignment
 *       description: Updates the details of a specific assignment.
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
 *    /api/academics/class:
 *     post:
 *       tags: [academics]
 *       summary: Creating a class
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Class created successfully
 *         401:
 *           description: Invalid credentials
 *
 *    /api/academics/get-class:
 *     get:
 *       tags: [academics]
 *       summary: Retrieve information about classes
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: A list of class data
 *         404:
 *           description: No class found
 *
 *    /api/academics/update-class/{id}:
 *     put:
 *       tags: [academics]
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
 *    /api/academics/class/{id}:
 *     delete:
 *       tags: [academics]
 *       summary: Delete a class
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Class deleted successfully
 */

// Class Routes
router.post('/class', authMiddleware, createClass);
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
