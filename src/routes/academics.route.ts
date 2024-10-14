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
} from '../controllers/academics.controller';

const router = Router();
/**
 * @swagger
 * tags:
 *   name: academics
 *   description: Operations related an academic year
 */
/**
 * @swagger
 * paths:
 *    /api/academics/assignment:
 *     post:
 *       tags: [academics]
 *       summary: Creating an assignment
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
 *    /api/academics/class:
 *     post:
 *       tags: [academics]
 *       summary: Creating a class
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

// Assignment Routes
router.post('/assignment', createAssignment);
router.post('/assignment/submit', submitAssignment);
router.get('/assignment/:id/submissions', getSubmissions);
router.delete('/assignment/:id/delete', deleteAssignment);

// Class Routes
router.post('/class', createClass);
router.get('/get-class', getClass);
router.put('/update-class/:id', updateClass);
router.delete('/class/:id', deleteClass);

// Course Routes
router.post('/course', createCourse);
router.get('/course', getCourse);
router.put('/course/:id', updateCourse);
router.delete('/course/:id', deleteCourse);

export default router;
