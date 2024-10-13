import { Router } from "express";
import {
    createPaySleep,
    getAllPaySleep,
    getPaySleep,
    updatePaySleep,
    updatePaySleepStatus,
    deletePaySleep,
} from "../controllers/paysleep.controller"

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
 *    /api/paysleep/create:
 *     post:
 *       tags: [PaySleeps]
 *       summary: Creating a PaySleep
 *       responses:
 *         200:
 *           description: PaySleep Created Successfully
 *         401:
 *           description: Invalid credentials
 * 
 *    /api/paysleep/{:id}/update:
 *     put:
 *       tags: [PaySleeps]
 *       summary: Update a PaySleep Information
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: PaySleep updated successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: PaySleep Not Found
 * 
 *    /api/paysleep/{:id}/delete:
 *     delete:
 *       tags: [PaySleeps]
 *       summary: Delete a PaySleep
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: PaySleep deleted successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: PaySleep Not Found
 * 
 *    /api/paysleep/all-paysleeps:
 *     get:
 *       tags: [PaySleeps]
 *       summary: Retrieve all PaySleeps
 *       responses:
 *         200:
 *           description: A list of PaySleeps data
 *         404:
 *           description: No PaySleep found
 * 
 *    /api/paysleep/{:id}/retrieve:
 *     get:
 *       tags: [PaySleeps]
 *       summary: Retrieve a PaySleep by ID
 *       responses:
 *         200:
 *           description: display PaySleep data
 *         404:
 *           description: PaySleep Not Found
 * 
 *    /api/paysleep/{:id}/status:
 *     put:
 *       tags: [PaySleeps]
 *       summary: Update the Status of a PaySleep
 *       responses:
 *         200:
 *           description: PaySleep data with updated status
 *         404:
 *           description: PaySleep Not Found
 * 
 *
 */

router.get('/', getAllPaySleep);
router.post('/', createPaySleep);
router.get('/:id', getPaySleep);
router.put('/:id', updatePaySleep);
router.put('/:id/status', updatePaySleepStatus);
router.delete('/:id', deletePaySleep);

export default router;