import { Router } from 'express';
import {
  createSchoolEvent,
  getAllSchoolEvents,
  getSchoolEventById,
  updateSchoolEvent,
  deleteSchoolEvent,
} from '../controllers/schoolEvents.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: School Events
 *   description: Operations related to school events
 */

/**
 * @swagger
 * paths:
 *   /api/school-events:
 *     post:
 *       tags: [School Events]
 *       summary: Create a new school event
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 venue:
 *                   type: string
 *                 organizer:
 *                   type: string
 *                 date:
 *                   type: string
 *                   format: date-time
 *                 description:
 *                   type: string
 *                 fieldTrip:
 *                   type: string
 *       responses:
 *         201:
 *           description: School event created successfully
 *         400:
 *           description: Invalid input
 *   /api/school-events:
 *     get:
 *       tags: [School Events]
 *       summary: Retrieve all school events
 *       responses:
 *         200:
 *           description: A list of school events
 *         404:
 *           description: No school events found
 *   /api/school-events/{id}:
 *     get:
 *       tags: [School Events]
 *       summary: Retrieve a school event by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID of the school event to retrieve
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: School event retrieved successfully
 *         404:
 *           description: School event not found
 *   /api/school-events/{id}:
 *     put:
 *       tags: [School Events]
 *       summary: Update a school event by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID of the school event to update
 *           schema:
 *             type: integer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 venue:
 *                   type: string
 *                 organizer:
 *                   type: string
 *                 date:
 *                   type: string
 *                   format: date-time
 *                 description:
 *                   type: string
 *                 fieldTrip:
 *                   type: string
 *       responses:
 *         200:
 *           description: School event updated successfully
 *         404:
 *           description: School event not found
 *         400:
 *           description: Invalid input
 *   /api/school-events/{id}:
 *     delete:
 *       tags: [School Events]
 *       summary: Delete a school event by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID of the school event to delete
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: School event deleted successfully
 *         404:
 *           description: School event not found
 */

router.post('/school-events', createSchoolEvent);
router.get('/school-events', getAllSchoolEvents);
router.get('/school-events/:id', getSchoolEventById);
router.put('/school-events/:id', updateSchoolEvent);
router.delete('/school-events/:id', deleteSchoolEvent);

export default router;
