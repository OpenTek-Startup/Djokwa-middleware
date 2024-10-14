import { Router } from 'express';
import {
  createLeave,
  getAllLeaves,
  getLeaveById,
  updateLeave,
  updateLeaveStatus,
  deleteLeave,
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
  createPaySleep,
  getAllPaySleep,
  getPaySleep,
  updatePaySleep,
  updatePaySleepStatus,
  deletePaySleep,
} from '../controllers/humanresources.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: HR
 *   description: Operations related to Human Resources Management
 */
/**
 * @swagger
 * paths:
 *    /api/hr/leave/create:
 *     post:
 *       tags: [HR]
 *       summary: Creating a Leave Request
 *       responses:
 *         200:
 *           description: Leave Created Successfully
 *         401:
 *           description: Invalid credentials
 *
 *    /api/hr/leave/{:id}/delete:
 *     delete:
 *       tags: [HR]
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
 *    /api/hr/leave/all-leaves:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve all Leave Requests
 *       responses:
 *         200:
 *           description: A list of Leaves data
 *         404:
 *           description: No Leave Request found
 *
 *    /api/hr/leave/{:id}/retrieve:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve a Leave Requests by ID
 *       responses:
 *         200:
 *           description: display Leave data
 *         404:
 *           description: Leave Not Found
 *
 *    /api/hr/leave/{:id}/update:
 *     put:
 *       tags: [HR]
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
 *    /api/hr/leave/{:id}/status:
 *     put:
 *       tags: [HR]
 *       summary: Update the Status of a Leave Request
 *       responses:
 *         200:
 *           description: Leave data with updated status
 *         404:
 *           description: Leave Not Found
 *    /api/hr/payslip/create:
 *     post:
 *       tags: [HR]
 *       summary: Creating a PaySleep
 *       responses:
 *         200:
 *           description: PaySleep Created Successfully
 *         401:
 *           description: Invalid credentials
 *
 *    /api/hr/payslip/{:id}/update:
 *     put:
 *       tags: [HR]
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
 *    /api/hr/payslip/{:id}/delete:
 *     delete:
 *       tags: [HR]
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
 *    /api/hr/payslip/all-paysleeps:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve all PaySleeps
 *       responses:
 *         200:
 *           description: A list of PaySleeps data
 *         404:
 *           description: No PaySleep found
 *
 *    /api/hr/payslip/{:id}/retrieve:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve a PaySleep by ID
 *       responses:
 *         200:
 *           description: display PaySleep data
 *         404:
 *           description: PaySleep Not Found
 *
 *    /api/hr/payslip/{:id}/status:
 *     put:
 *       tags: [HR]
 *       summary: Update the Status of a PaySleep
 *       responses:
 *         200:
 *           description: PaySleep data with updated status
 *         404:
 *           description: PaySleep Not Found
 *    /api/hr/schedule/create:
 *     post:
 *       tags: [HR]
 *       summary: Creating a Schedule
 *       responses:
 *         200:
 *           description: Schedule Created Successfully
 *         401:
 *           description: Invalid credentials
 *
 *    /api/hr/schedule/{:id}/update:
 *     put:
 *       tags: [HR]
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
 *    /api/hr/schedule/{:id}/delete:
 *     delete:
 *       tags: [HR]
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
 *    /api/hr/schedule/all-schedule:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve all Schedule
 *       responses:
 *         200:
 *           description: A list of Schedules data
 *         404:
 *           description: No PaySleep found
 *
 *    /api/hr/schedule/{:id}/retrieve:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve a Schedule by ID
 *       responses:
 *         200:
 *           description: display Schedule data
 *         404:
 *           description: Schedule Not Found
 *
 */

// LEAVES
router.get('/leave', getAllLeaves);
router.post('/leave', createLeave);
router.get('/leave/:id', getLeaveById);
router.put('/leave/:id', updateLeave);
router.put('/leave/:id/status', updateLeaveStatus);
router.delete('/leave/:id', deleteLeave);

// PAYSLIP
router.get('/payslip', getAllPaySleep);
router.post('/payslip', createPaySleep);
router.get('/payslip/:id', getPaySleep);
router.put('/payslip/:id', updatePaySleep);
router.put('/payslip/:id/status', updatePaySleepStatus);
router.delete('/payslip/:id', deletePaySleep);

// SCHEDULE
router.get('/schedule', getAllSchedules);
router.post('/schedule/', createSchedule);
router.get('/schedule/:id', getScheduleById);
router.put('/schedule/:id', updateSchedule);
router.delete('/schedule/:id', deleteSchedule);

export default router;
