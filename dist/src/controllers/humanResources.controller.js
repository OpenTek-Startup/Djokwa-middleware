"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePaySleep = exports.updatePaySleepStatus = exports.updatePaySleep = exports.getPaySleep = exports.getAllPaySleep = exports.createPaySleep = exports.deleteLeave = exports.updateLeaveStatus = exports.updateLeave = exports.getLeaveById = exports.getAllLeaves = exports.createLeave = exports.deleteSchedule = exports.updateSchedule = exports.getScheduleById = exports.getAllSchedules = exports.createSchedule = void 0;
const app_1 = require("../app");
const class_validator_1 = require("class-validator");
const humanResource_validator_1 = require("../valdators/humanResource.validator");
/*
  @route    POST: /schedules
  @access   private
  @desc     Create a new schedule
*/
const createSchedule = async (req, res) => {
    try {
        const scheduleData = req.body;
        // Validate incoming data
        const createScheduleDTO = new humanResource_validator_1.CreateSceduleDto();
        Object.assign(createScheduleDTO, scheduleData);
        const errors = await (0, class_validator_1.validate)(createScheduleDTO);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors,
            });
        }
        const schedule = await app_1.prisma.schedule.create({
            data: scheduleData,
        });
        res.status(201).json({
            type: 'success',
            message: 'Schedule Created Successfully',
            data: schedule,
        });
    }
    catch (error) {
        console.error('Error in creating schedule', error);
        res.status(500).json({
            type: 'error',
            message: 'Error Creating Schedule',
        });
    }
};
exports.createSchedule = createSchedule;
/*
  @route    GET: /schedules
  @access   private
  @desc     Get all schedules
*/
const getAllSchedules = async (req, res) => {
    try {
        const schedules = await app_1.prisma.schedule.findMany();
        if (!schedules.length) {
            return res.status(404).json({
                type: 'error',
                message: 'No Schedules Found',
            });
        }
        res.status(200).json({
            type: 'success',
            message: 'Schedules Retrieved Successfully',
            data: schedules,
        });
    }
    catch (error) {
        console.error('Error in retrieving schedules', error);
        res.status(500).json({
            type: 'error',
            message: 'Error Retrieving Schedules',
        });
    }
};
exports.getAllSchedules = getAllSchedules;
/*
  @route    GET: /schedules/:id
  @access   private
  @desc     Get a schedule by ID
*/
const getScheduleById = async (req, res) => {
    const { id } = req.params;
    try {
        const schedule = await app_1.prisma.schedule.findUnique({
            where: {
                Id: Number(id),
            },
        });
        if (!schedule) {
            return res.status(404).json({
                type: 'error',
                message: 'Schedule Not Found',
            });
        }
        res.status(200).json({
            type: 'success',
            message: 'Schedule Retrieved Successfully',
            data: schedule,
        });
    }
    catch (error) {
        console.error('Error in retrieving schedule', error);
        res.status(500).json({
            type: 'error',
            message: 'Error Retrieving Schedule',
        });
    }
};
exports.getScheduleById = getScheduleById;
/*
  @route    PUT: /schedules/:id
  @access   private
  @desc     Update a schedule
*/
const updateSchedule = async (req, res) => {
    const { id } = req.params;
    try {
        const scheduleData = req.body;
        // Validate incoming data
        const updateScheduleDTO = new humanResource_validator_1.CreateSceduleDto();
        Object.assign(updateScheduleDTO, scheduleData);
        const errors = await (0, class_validator_1.validate)(updateScheduleDTO);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors,
            });
        }
        const updatedSchedule = await app_1.prisma.schedule.update({
            where: {
                Id: Number(id),
            },
            data: scheduleData,
        });
        res.json({
            type: 'success',
            message: `Schedule with ID ${id} updated successfully`,
            data: updatedSchedule,
        });
    }
    catch (error) {
        console.error('Error in updating schedule', error);
        res.status(500).json({
            type: 'error',
            message: `Error in updating schedule with ID ${id}`,
        });
    }
};
exports.updateSchedule = updateSchedule;
/*
  @route    DELETE: /schedules/:id
  @access   private
  @desc     Delete a schedule
*/
const deleteSchedule = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedSchedule = await app_1.prisma.schedule.delete({
            where: {
                Id: Number(id),
            },
        });
        res.status(200).json({
            type: 'success',
            message: 'Schedule Deleted Successfully',
            data: deletedSchedule,
        });
    }
    catch (error) {
        console.error('Error in deleting schedule', error);
        res.status(500).json({
            type: 'error',
            message: 'Error Deleting Schedule',
        });
    }
};
exports.deleteSchedule = deleteSchedule;
/*
  @route    POST: /leaves
  @access   private
  @desc     Create a new leave
*/
const createLeave = async (req, res) => {
    try {
        const leaveData = req.body;
        // Validate incoming data
        const createLeaveDTO = new humanResource_validator_1.CreateLeaveDto();
        Object.assign(createLeaveDTO, leaveData);
        const errors = await (0, class_validator_1.validate)(createLeaveDTO);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors,
            });
        }
        const leave = await app_1.prisma.leaves.create({
            data: leaveData,
        });
        res.status(201).json({
            type: 'success',
            message: 'Leave created successfully',
            data: leave,
        });
    }
    catch (error) {
        console.error('Error in creating leave', error);
        res.status(500).json({
            type: 'error',
            message: 'Error creating leave',
        });
    }
};
exports.createLeave = createLeave;
/*
  @route    GET: /leaves
  @access   private
  @desc     Get all leaves
*/
const getAllLeaves = async (req, res) => {
    try {
        const leaves = await app_1.prisma.leaves.findMany();
        res.status(200).json({
            type: 'success',
            message: 'Leaves retrieved successfully',
            data: leaves,
        });
    }
    catch (error) {
        console.error('Error in retrieving leaves', error);
        res.status(500).json({
            type: 'error',
            message: 'Error retrieving leaves',
        });
    }
};
exports.getAllLeaves = getAllLeaves;
/*
  @route    GET: /leaves/:id
  @access   private
  @desc     Get a leave by ID
*/
const getLeaveById = async (req, res) => {
    const { id } = req.params;
    try {
        const leave = await app_1.prisma.leaves.findUnique({
            where: {
                Id: Number(id),
            },
        });
        if (!leave) {
            return res.status(404).json({
                type: 'error',
                message: 'Leave not found',
            });
        }
        res.status(200).json({
            type: 'success',
            message: 'Leave retrieved successfully',
            data: leave,
        });
    }
    catch (error) {
        console.error('Error in retrieving leave', error);
        res.status(500).json({
            type: 'error',
            message: 'Error retrieving leave',
        });
    }
};
exports.getLeaveById = getLeaveById;
/*
  @route    PUT: /leaves/:id
  @access   private
  @desc     Update a leave by ID
*/
const updateLeave = async (req, res) => {
    const { id } = req.params;
    try {
        const leaveData = req.body;
        // Validate incoming data
        const updateLeaveDTO = new humanResource_validator_1.CreateLeaveDto();
        Object.assign(updateLeaveDTO, leaveData);
        const errors = await (0, class_validator_1.validate)(updateLeaveDTO);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors,
            });
        }
        const updatedLeave = await app_1.prisma.leaves.update({
            where: {
                Id: Number(id),
            },
            data: leaveData,
        });
        res.json({
            type: 'success',
            message: `Leave with ID ${id} updated successfully`,
            data: updatedLeave,
        });
    }
    catch (error) {
        console.error('Error in updating leave', error);
        res.status(500).json({
            type: 'error',
            message: `Error in updating leave with ID ${id}`,
        });
    }
};
exports.updateLeave = updateLeave;
/*
  @route    PUT: /leaves/:id/status
  @access   private
  @desc     Update the status of a leave by ID
*/
const updateLeaveStatus = async (req, res) => {
    const { id } = req.params;
    try {
        const { Status } = req.body;
        const updatedLeave = await app_1.prisma.leaves.update({
            where: {
                Id: Number(id),
            },
            data: {
                Status,
            },
        });
        res.json({
            type: 'success',
            message: `Leave status for ID ${id} updated successfully`,
            data: updatedLeave,
        });
    }
    catch (error) {
        console.error('Error in updating leave status', error);
        res.status(500).json({
            type: 'error',
            message: `Error in updating leave status for ID ${id}`,
        });
    }
};
exports.updateLeaveStatus = updateLeaveStatus;
/*
  @route    DELETE: /leaves/:id
  @access   private
  @desc     Delete a leave by ID
*/
const deleteLeave = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedLeave = await app_1.prisma.leaves.delete({
            where: {
                Id: Number(id),
            },
        });
        res.status(200).json({
            type: 'success',
            message: 'Leave deleted successfully',
            data: deletedLeave,
        });
    }
    catch (error) {
        console.error('Error in deleting leave', error);
        res.status(500).json({
            type: 'error',
            message: 'Error deleting leave',
        });
    }
};
exports.deleteLeave = deleteLeave;
/*
  @route    POST: /paysleeps
  @access   private
  @desc     Create a new PaySleep
*/
const createPaySleep = async (req, res) => {
    try {
        const paysleepData = req.body;
        // Validate incoming data
        const createPaySleepDTO = new humanResource_validator_1.CreatePaySleepDto();
        Object.assign(createPaySleepDTO, paysleepData);
        const errors = await (0, class_validator_1.validate)(createPaySleepDTO);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors,
            });
        }
        const paysleep = await app_1.prisma.paySleep.create({
            data: paysleepData,
        });
        res.status(201).json({
            type: 'success',
            message: 'PaySleep created successfully',
            data: paysleep,
        });
    }
    catch (error) {
        console.error('Error in creating PaySleep', error);
        res.status(500).json({
            type: 'error',
            message: 'Error creating PaySleep',
        });
    }
};
exports.createPaySleep = createPaySleep;
/*
  @route    GET: /paysleeps
  @access   private
  @desc     Get all PaySleeps
*/
const getAllPaySleep = async (req, res) => {
    try {
        const paySleeps = await app_1.prisma.paySleep.findMany();
        res.status(200).json({
            type: 'success',
            message: 'PaySleeps retrieved successfully',
            data: paySleeps,
        });
    }
    catch (error) {
        console.error('Error in retrieving PaySleeps', error);
        res.status(500).json({
            type: 'error',
            message: 'Error retrieving PaySleeps',
        });
    }
};
exports.getAllPaySleep = getAllPaySleep;
/*
  @route    GET: /paysleeps/:id
  @access   private
  @desc     Get a PaySleep by ID
*/
const getPaySleep = async (req, res) => {
    const { id } = req.params;
    try {
        const paySleep = await app_1.prisma.paySleep.findUnique({
            where: {
                Id: Number(id),
            },
        });
        if (!paySleep) {
            return res.status(404).json({
                type: 'error',
                message: 'PaySleep not found',
            });
        }
        res.status(200).json({
            type: 'success',
            message: 'PaySleep retrieved successfully',
            data: paySleep,
        });
    }
    catch (error) {
        console.error('Error in retrieving PaySleep', error);
        res.status(500).json({
            type: 'error',
            message: 'Server Error',
        });
    }
};
exports.getPaySleep = getPaySleep;
/*
  @route    PUT: /paysleeps/:id
  @access   private
  @desc     Update a PaySleep by ID
*/
const updatePaySleep = async (req, res) => {
    const { id } = req.params;
    try {
        const paysleepData = req.body;
        // Validate incoming data
        const updatePaySleepDTO = new humanResource_validator_1.CreatePaySleepDto();
        Object.assign(updatePaySleepDTO, paysleepData);
        const errors = await (0, class_validator_1.validate)(updatePaySleepDTO);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors,
            });
        }
        const updatedPaySleep = await app_1.prisma.paySleep.update({
            where: {
                Id: Number(id),
            },
            data: paysleepData,
        });
        res.json({
            type: 'success',
            message: `PaySleep with ID ${id} updated successfully`,
            data: updatedPaySleep,
        });
    }
    catch (error) {
        console.error('Error in updating PaySleep', error);
        res.status(500).json({
            type: 'error',
            message: `Error in updating PaySleep with ID ${id}`,
        });
    }
};
exports.updatePaySleep = updatePaySleep;
/*
  @route    PUT: /paysleeps/:id/status
  @access   private
  @desc     Update the status of a PaySleep by ID
*/
const updatePaySleepStatus = async (req, res) => {
    const { id } = req.params;
    try {
        const { Status } = req.body;
        const updatedPaySleep = await app_1.prisma.paySleep.update({
            where: {
                Id: Number(id),
            },
            data: {
                Status,
            },
        });
        res.json({
            type: 'success',
            message: `PaySleep status for ID ${id} updated successfully`,
            data: updatedPaySleep,
        });
    }
    catch (error) {
        console.error('Error in updating PaySleep status', error);
        res.status(500).json({
            type: 'error',
            message: `Error in updating PaySleep status for ID ${id}`,
        });
    }
};
exports.updatePaySleepStatus = updatePaySleepStatus;
/*
  @route    DELETE: /paysleeps/:id
  @access   private
  @desc     Delete a PaySleep by ID
*/
const deletePaySleep = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPaySleep = await app_1.prisma.paySleep.delete({
            where: {
                Id: Number(id),
            },
        });
        if (!deletedPaySleep) {
            return res.status(404).json({
                type: 'error',
                message: 'PaySleep not found',
            });
        }
        res.status(200).json({
            type: 'success',
            message: 'PaySleep deleted successfully',
            data: deletedPaySleep,
        });
    }
    catch (error) {
        console.error('Error in deleting PaySleep', error);
        res.status(500).json({
            type: 'error',
            message: 'Server Error',
        });
    }
};
exports.deletePaySleep = deletePaySleep;
