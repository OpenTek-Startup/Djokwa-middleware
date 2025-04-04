"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schoolEvents_controller_1 = require("../controllers/schoolEvents.controller");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Operations related to school events
 */
/**
 * @swagger
 * paths:
 *   /api/admin/school-events/create:
 *     post:
 *       tags: [Admin]
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
 *   /api/admin/school-events:
 *     get:
 *       tags: [Admin]
 *       summary: Retrieve all school events
 *       responses:
 *         200:
 *           description: A list of school events
 *         404:
 *           description: No school events found
 *   /api/admin/school-events/{id}:
 *     get:
 *       tags: [Admin]
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
 *   /api/admin/school-events/{id}/update:
 *     put:
 *       tags: [Admin]
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
 *   /api/admin/school-events/{id}/delete:
 *     delete:
 *       tags: [Admin]
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
router.post('/school-events/create', schoolEvents_controller_1.createSchoolEvent);
router.get('/school-events', schoolEvents_controller_1.getAllSchoolEvents);
router.get('/school-events/:id', schoolEvents_controller_1.getSchoolEventById);
router.put('/school-events/:id/update', schoolEvents_controller_1.updateSchoolEvent);
router.delete('/school-events/:id/delete', schoolEvents_controller_1.deleteSchoolEvent);
exports.default = router;
