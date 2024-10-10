import { Router } from 'express';
import {
  createClass,
  getClass,
  updateClass,
  deleteClass,
} from '../controllers/class.controller';

const router = Router();

/**
 * @swagger
 * /api/class:
 *   post:
 *     summary: Create a new class
 *     tags: [Classes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Class_name:
 *                 type: string
 *               Class_code:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               currentEnrollment:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Class created successfully
 */
router.post('/class', createClass);

/**
 * @swagger
 * /api/classes:
 *   get:
 *     summary: Get all classes
 *     tags: [Classes]
 *     responses:
 *       200:
 *         description: A list of all classes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   Class_name:
 *                     type: string
 *                   Class_code:
 *                     type: string
 *                   capacity:
 *                     type: integer
 *                   currentEnrollment:
 *                     type: integer
 */
router.get('/classes', getClass);

/**
 * @swagger
 * /api/class/{id}:
 *   put:
 *     summary: Update a class
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The class ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Class_name:
 *                 type: string
 *               Class_code:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               currentEnrollment:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Class updated successfully
 */
router.put('/class/:id', updateClass);

/**
 * @swagger
 * /api/class/{id}:
 *   delete:
 *     summary: Delete a class
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The class ID
 *     responses:
 *       200:
 *         description: Class deleted successfully
 */
router.delete('/class/:id', deleteClass);

export default router;
