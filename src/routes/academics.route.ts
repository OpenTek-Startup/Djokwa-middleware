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
  createGrade,
  getAllGrades,
  getGradeById,
  updateGrade,
  deleteGrade,
} from '../controllers/academics.controller';

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

/**
 * @swagger
 * paths:
 *    /api/academics/grade:
 *     post:
 *       tags: [academics]
 *       summary: Creating a grade
 *       responses:
 *         201:
 *           description: Grade created successfully
 *         400:
 *           description: Invalid input
 *
 *    /api/academics/grade/{id}:
 *     get:
 *       tags: [academics]
 *       summary: Get grade by ID
 *       responses:
 *         200:
 *           description: Grade fetched successfully
 *         404:
 *           description: Grade not found
 *
 *    /api/academics/grades:
 *     get:
 *       tags: [academics]
 *       summary: Retrieve all grades
 *       responses:
 *         200:
 *           description: Grades fetched successfully
 *         404:
 *           description: No grades found
 *
 *    /api/academics/grade/{id}:
 *     put:
 *       tags: [academics]
 *       summary: Update a grade
 *       responses:
 *         200:
 *           description: Grade updated successfully
 *         400:
 *           description: Invalid input
 *         404:
 *           description: Grade not found
 *
 *    /api/academics/grade/{id}:
 *     delete:
 *       tags: [academics]
 *       summary: Delete a grade
 *       responses:
 *         200:
 *           description: Grade deleted successfully
 *         404:
 *           description: Grade not found
 */

// Grade Routes
router.post('/grade', createGrade);
router.get('/grades', getAllGrades);
router.get('/grade/:id', getGradeById);
router.put('/grade/:id', updateGrade);
router.delete('/grade/:id', deleteGrade);

export default router;
