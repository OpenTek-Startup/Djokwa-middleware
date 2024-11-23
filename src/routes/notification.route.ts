import { Router } from 'express';
import {
  createNotification,
  getNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification,
} from '../controllers/notification.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Operations related to disciplinary Notifications
 */

/**
 * @swagger
 * paths:
 *   /api/admin/Notification/create:
 *     post:
 *       tags: [Admin]
 *       summary: Create a new disciplinary Notification
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
 *                   description: ID of the student involved in the Notification
 *                 place:
 *                   type: string
 *                   description: The location where the Notification occurred
 *                 witness:
 *                   type: string
 *                   description: The witness to the Notification
 *                 description:
 *                   type: string
 *                   default: Pending
 *                   description: Description of the Notification
 *                 disciplinary_recomendation:
 *                   type: string
 *                   description: Optional disciplinary recommendation
 *       responses:
 *         201:
 *           description: Notification created successfully
 *         400:
 *           description: Bad request, validation failed
 *         401:
 *           description: Unauthorized
 */

/**
 * @swagger
 *   /api/admin/Notification:
 *     get:
 *       tags: [Admin]
 *       summary: Retrieve all Notifications
 *       responses:
 *         200:
 *           description: A list of Notifications
 *         404:
 *           description: No Notifications found
 */

/**
 * @swagger
 *   /api/admin/Notification/{id}:
 *     get:
 *       tags: [Admin]
 *       summary: Get Notification details by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID of the Notification to retrieve
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: Notification found
 *         404:
 *           description: Notification not found
 */

/**
 * @swagger
 *   /api/admin/Notification/{id}:
 *     put:
 *       tags: [Admin]
 *       summary: Update Notification by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID of the Notification to update
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
 *                   description: Updated description of the Notification
 *                 disciplinary_recomendation:
 *                   type: string
 *                   description: Updated disciplinary recommendation
 *       responses:
 *         200:
 *           description: Notification updated successfully
 *         400:
 *           description: Bad request, validation failed
 *         404:
 *           description: Notification not found
 */

/**
 * @swagger
 *   /api/admin/Notification/{id}:
 *     delete:
 *       tags: [Admin]
 *       summary: Delete Notification by ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: ID of the Notification to delete
 *           schema:
 *             type: integer
 *       responses:
 *         204:
 *           description: Notification deleted successfully
 *         404:
 *           description: Notification not found
 */

router.post('/create', createNotification);
router.get('/', getNotifications);
router.get('/:id', getNotificationById);
router.put('/:id', updateNotification);
router.delete('/:id', deleteNotification);

export default router;
