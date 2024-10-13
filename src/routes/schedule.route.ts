import { Router } from "express";
import {
    createSchedule,
    getAllSchedules,
    getScheduleById,
    updateSchedule,
    deleteSchedule,
} from "../controllers/schedule.controller";

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
 *    /api/schedule/create:
 *     post:
 *       tags: [Schedules]
 *       summary: Creating a Schedule
 *       responses:
 *         200:
 *           description: Schedule Created Successfully
 *         401:
 *           description: Invalid credentials
 * 
 *    /api/schedule/{:id}/update:
 *     put:
 *       tags: [Schedules]
 *       summary: Update a Schedule Information
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Schedule updated successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Schedule Not Found
 * 
 *    /api/schedule/{:id}/delete:
 *     delete:
 *       tags: [Schedules]
 *       summary: Delete a Schedule
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Schedule deleted successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Schedule Not Found
 * 
 *    /api/schedule/all-schedule:
 *     get:
 *       tags: [Schedules]
 *       summary: Retrieve all Schedule
 *       responses:
 *         200:
 *           description: A list of Schedules data
 *         404:
 *           description: No PaySleep found
 * 
 *    /api/schedule/{:id}/retrieve:
 *     get:
 *       tags: [Schedules]
 *       summary: Retrieve a Schedule by ID
 *       responses:
 *         200:
 *           description: display Schedule data
 *         404:
 *           description: Schedule Not Found
 * 
 *
 */

router.get('/', getAllSchedules);
router.post('/', createSchedule);
router.get('/:id', getScheduleById);
router.put('/:id', updateSchedule);
router.delete('/:id', deleteSchedule);

export default router;