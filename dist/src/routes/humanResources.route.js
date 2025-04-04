"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const humanResources_controller_1 = require("../controllers/humanResources.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: HR
 *   description: Operations related to Human Resources Management
 */
/**
 * @swagger
 * paths:
 *   /api/hr/leave/create:
 *     post:
 *       tags: [HR]
 *       summary: Creating a Leave Request
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         201:
 *           description: Leave Created Successfully
 *         401:
 *           description: Invalid credentials
 *
 *   /api/hr/leave/{id}/delete:
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
 *   /api/hr/leave/all-leaves:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve all Leave Requests
 *       responses:
 *         200:
 *           description: A list of Leaves data
 *         404:
 *           description: No Leave Request found
 *
 *   /api/hr/leave/{id}/retrieve:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve a Leave Request by ID
 *       responses:
 *         200:
 *           description: Display Leave data
 *         404:
 *           description: Leave Not Found
 *
 *   /api/hr/leave/{id}/update:
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
 *   /api/hr/leave/{id}/status:
 *     put:
 *       tags: [HR]
 *       summary: Update the Status of a Leave Request
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Leave data with updated status
 *         404:
 *           description: Leave Not Found
 *
 *   /api/hr/payslip/create:
 *     post:
 *       tags: [HR]
 *       summary: Creating a PaySlip
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         201:
 *           description: PaySlip Created Successfully
 *         401:
 *           description: Invalid credentials
 *
 *   /api/hr/payslip/{id}/update:
 *     put:
 *       tags: [HR]
 *       summary: Update a PaySlip Information
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: PaySlip updated successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: PaySlip Not Found
 *
 *   /api/hr/payslip/{id}/delete:
 *     delete:
 *       tags: [HR]
 *       summary: Delete a PaySlip
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: PaySlip deleted successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: PaySlip Not Found
 *
 *   /api/hr/payslip/all-paysleeps:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve all PaySleeps
 *       responses:
 *         200:
 *           description: A list of PaySleeps data
 *         404:
 *           description: No PaySlip found
 *
 *   /api/hr/payslip/{id}/retrieve:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve a PaySlip by ID
 *       responses:
 *         200:
 *           description: Display PaySlip data
 *         404:
 *           description: PaySlip Not Found
 *
 *   /api/hr/payslip/{id}/status:
 *     put:
 *       tags: [HR]
 *       summary: Update the Status of a PaySlip
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: PaySlip data with updated status
 *         404:
 *           description: PaySlip Not Found
 *
 *   /api/hr/schedule/create:
 *     post:
 *       tags: [HR]
 *       summary: Creating a Schedule
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         201:
 *           description: Schedule Created Successfully
 *         401:
 *           description: Invalid credentials
 *
 *   /api/hr/schedule/{id}/update:
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
 *   /api/hr/schedule/{id}/delete:
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
 *   /api/hr/schedule/all-schedule:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve all Schedules
 *       responses:
 *         200:
 *           description: A list of Schedules data
 *         404:
 *           description: No Schedule found
 *
 *   /api/hr/schedule/{id}/retrieve:
 *     get:
 *       tags: [HR]
 *       summary: Retrieve a Schedule by ID
 *       responses:
 *         200:
 *           description: Display Schedule data
 *         404:
 *           description: Schedule Not Found
 */
// LEAVES
router.get('/leave/all-leaves', humanResources_controller_1.getAllLeaves);
router.post('/leave/create', auth_middleware_1.authMiddleware, humanResources_controller_1.createLeave);
router.get('/leave/:id/retrieve', humanResources_controller_1.getLeaveById);
router.put('/leave/:id/update', auth_middleware_1.authMiddleware, humanResources_controller_1.updateLeave);
router.put('/leave/:id/status', auth_middleware_1.authMiddleware, humanResources_controller_1.updateLeaveStatus);
router.delete('/leave/:id/delete', auth_middleware_1.authMiddleware, humanResources_controller_1.deleteLeave);
// PAYSLIP
router.get('/payslip/all-paysleeps', humanResources_controller_1.getAllPaySleep);
router.post('/payslip/create', auth_middleware_1.authMiddleware, humanResources_controller_1.createPaySleep);
router.get('/payslip/:id/retrieve', humanResources_controller_1.getPaySleep);
router.put('/payslip/:id/update', auth_middleware_1.authMiddleware, humanResources_controller_1.updatePaySleep);
router.put('/payslip/:id/status', auth_middleware_1.authMiddleware, humanResources_controller_1.updatePaySleepStatus);
router.delete('/payslip/:id/delete', auth_middleware_1.authMiddleware, humanResources_controller_1.deletePaySleep);
// SCHEDULE
router.get('/schedule/all-schedule', humanResources_controller_1.getAllSchedules);
router.post('/schedule/create', auth_middleware_1.authMiddleware, humanResources_controller_1.createSchedule);
router.get('/schedule/:id/retrieve', humanResources_controller_1.getScheduleById);
router.put('/schedule/:id/update', auth_middleware_1.authMiddleware, humanResources_controller_1.updateSchedule);
router.delete('/schedule/:id/delete', auth_middleware_1.authMiddleware, humanResources_controller_1.deleteSchedule);
exports.default = router;
