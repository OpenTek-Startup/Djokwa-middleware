import { Router } from 'express';
import {
  createIncident,
  getIncidents,
  getIncidentById,
  updateIncident,
  deleteIncident,
} from '../controllers/incident.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Incidents
 *   description: Operations related to disciplinary incidents
 */

/**
 * @swagger
 * paths:
 *   /api/incident/create:
 *     post:
 *       tags: [Incidents]
 *       summary: Create a new disciplinary incident
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - Student_ID
 *                 - place
 *                 - witness
 *                 - description
 *               properties:
 *                 Student_ID:
 *                   type: integer
 *                   description: ID of the student involved in the incident
 *                 place:
 *                   type: string
 *                   description: The location where the incident occurred
 *                 witness:
 *                   type: string
 *                   description: The witness to the incident
 *                 description:
 *                   type: string
 *                   default: Pending
 *                   description: Description of the incident
 *                 disciplinary_recomendation:
 *                   type: string
 *                   description: Optional disciplinary recommendation
 *       responses:
 *         201:
 *           description: Incident created successfully
 *         400:
 *           description: Bad request, validation failed
 *         401:
 *           description: Unauthorized
 */

/**
 * @swagger
 *   /api/incident:
 *     get:
 *       tags: [Incidents]
 *       summary: Retrieve all incidents
 *       responses:
 *         200:
 *           description: A list of incidents
 *         404:
 *           description: No incidents found
 */

/**
 * @swagger
 *   /api/incident/{id}:
 *     get:
 *       tags: [Incidents]
 *       summary: Get incident details by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID of the incident to retrieve
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: Incident found
 *         404:
 *           description: Incident not found
 */

/**
 * @swagger
 *   /api/incident/{id}:
 *     put:
 *       tags: [Incidents]
 *       summary: Update incident by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID of the incident to update
 *           schema:
 *             type: integer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 description:
 *                   type: string
 *                   description: Updated description of the incident
 *                 disciplinary_recomendation:
 *                   type: string
 *                   description: Updated disciplinary recommendation
 *       responses:
 *         200:
 *           description: Incident updated successfully
 *         400:
 *           description: Bad request, validation failed
 *         404:
 *           description: Incident not found
 */

/**
 * @swagger
 *   /api/incident/{id}:
 *     delete:
 *       tags: [Incidents]
 *       summary: Delete incident by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID of the incident to delete
 *           schema:
 *             type: integer
 *       responses:
 *         204:
 *           description: Incident deleted successfully
 *         404:
 *           description: Incident not found
 */

router.post('/incident/create', createIncident);
router.get('/incident', getIncidents);
router.get('/incident/:id', getIncidentById);
router.put('/incident/:id', authMiddleware, updateIncident);
router.delete('/incident/:id', authMiddleware, deleteIncident);

export default router;
