import { Router } from "express";
import {
    createLeave,
    getAllLeaves,
    getLeaveById,
    updateLeave,
    updateLeaveStatus,
    deleteLeave,
} from "../controllers/leaves.controller" 

    const router = Router();

/**
 * @swagger
 * tags:
 *   name: Human_Resources_Management
 *   description: Operations related to Human Resources Management
 */
/**
 * @swagger
 * paths:
 *    /api/leave/create:
 *     post:
 *       tags: [Leaves]
 *       summary: Creating a Leave Request
 *       responses:
 *         200:
 *           description: Leave Created Successfully
 *         401:
 *           description: Invalid credentials
 * 
 *    /api/leave/{:id}/delete:
 *     delete:
 *       tags: [Leaves]
 *       summary: Delete a Leave Request
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Leave deleted successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Leave Not Found
 * 
 *    /api/leave/all-leaves:
 *     get:
 *       tags: [Leaves]
 *       summary: Retrieve all Leave Requests
 *       responses:
 *         200:
 *           description: A list of Leaves data
 *         404:
 *           description: No Leave Request found
 * 
 *    /api/leave/{:id}/retrieve:
 *     get:
 *       tags: [Leaves]
 *       summary: Retrieve a Leave Requests by ID
 *       responses:
 *         200:
 *           description: display Leave data
 *         404:
 *           description: Leave Not Found
 * 
 *    /api/leave/{:id}/update:
 *     put:
 *       tags: [Leaves]
 *       summary: Update a Leave Information
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Leave updated successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Leave Not Found
 * 
 *    /api/leave/{:id}/status:
 *     put:
 *       tags: [Leaves]
 *       summary: Update the Status of a Leave Request
 *       responses:
 *         200:
 *           description: Leave data with updated status
 *         404:
 *           description: Leave Not Found
 * 
 *
 */
    
    router.get('/', getAllLeaves);
    router.post('/', createLeave);
    router.get('/:id', getLeaveById);
    router.put('/:id', updateLeave);
    router.put('/:id/status', updateLeaveStatus);
    router.delete('/:id', deleteLeave);

    export default router;
