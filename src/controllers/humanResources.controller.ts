import { Request, Response } from 'express';
import { prisma } from '../app';
import { validate } from 'class-validator';
import {
  CreateSceduleDto,
  CreateLeaveDto,
  CreatePaySleepDto,
} from '../valdators/humanResource.validator';

/*
  @route    POST: /schedules
  @access   private
  @desc     Create a new schedule
*/
export const createSchedule = async (req: Request, res: Response) => {
  try {
    const scheduleData = req.body;

    // Validate incoming data
    const createScheduleDTO = new CreateSceduleDto();
    Object.assign(createScheduleDTO, scheduleData);
    const errors = await validate(createScheduleDTO);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const schedule = await prisma.schedule.create({
      data: scheduleData,
    });
    res.status(201).json({
      type: 'success',
      message: 'Schedule Created Successfully',
      data: schedule,
    });
  } catch (error) {
    console.error('Error in creating schedule', error);
    res.status(500).json({
      type: 'error',
      message: 'Error Creating Schedule',
    });
  }
};

/*
  @route    GET: /schedules
  @access   private
  @desc     Get all schedules
*/
export const getAllSchedules = async (req: Request, res: Response) => {
  try {
    const schedules = await prisma.schedule.findMany();
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
  } catch (error) {
    console.error('Error in retrieving schedules', error);
    res.status(500).json({
      type: 'error',
      message: 'Error Retrieving Schedules',
    });
  }
};

/*
  @route    GET: /schedules/:id
  @access   private
  @desc     Get a schedule by ID
*/
export const getScheduleById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const schedule = await prisma.schedule.findUnique({
      where: {
        Schedule_ID: Number(id),
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
  } catch (error) {
    console.error('Error in retrieving schedule', error);
    res.status(500).json({
      type: 'error',
      message: 'Error Retrieving Schedule',
    });
  }
};

/*
  @route    PUT: /schedules/:id
  @access   private
  @desc     Update a schedule
*/
export const updateSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const scheduleData = req.body;

    // Validate incoming data
    const updateScheduleDTO = new CreateSceduleDto();
    Object.assign(updateScheduleDTO, scheduleData);
    const errors = await validate(updateScheduleDTO);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const updatedSchedule = await prisma.schedule.update({
      where: {
        Schedule_ID: Number(id),
      },
      data: scheduleData,
    });

    res.json({
      type: 'success',
      message: `Schedule with ID ${id} updated successfully`,
      data: updatedSchedule,
    });
  } catch (error) {
    console.error('Error in updating schedule', error);
    res.status(500).json({
      type: 'error',
      message: `Error in updating schedule with ID ${id}`,
    });
  }
};

/*
  @route    DELETE: /schedules/:id
  @access   private
  @desc     Delete a schedule
*/
export const deleteSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedSchedule = await prisma.schedule.delete({
      where: {
        Schedule_ID: Number(id),
      },
    });
    res.status(200).json({
      type: 'success',
      message: 'Schedule Deleted Successfully',
      data: deletedSchedule,
    });
  } catch (error) {
    console.error('Error in deleting schedule', error);
    res.status(500).json({
      type: 'error',
      message: 'Error Deleting Schedule',
    });
  }
};

/*
  @route    POST: /leaves
  @access   private
  @desc     Create a new leave
*/
export const createLeave = async (req: Request, res: Response) => {
  try {
    const leaveData = req.body;

    // Validate incoming data
    const createLeaveDTO = new CreateLeaveDto();
    Object.assign(createLeaveDTO, leaveData);
    const errors = await validate(createLeaveDTO);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const leave = await prisma.leaves.create({
      data: leaveData,
    });
    res.status(201).json({
      type: 'success',
      message: 'Leave created successfully',
      data: leave,
    });
  } catch (error) {
    console.error('Error in creating leave', error);
    res.status(500).json({
      type: 'error',
      message: 'Error creating leave',
    });
  }
};

/*
  @route    GET: /leaves
  @access   private
  @desc     Get all leaves
*/
export const getAllLeaves = async (req: Request, res: Response) => {
  try {
    const leaves = await prisma.leaves.findMany();
    res.status(200).json({
      type: 'success',
      message: 'Leaves retrieved successfully',
      data: leaves,
    });
  } catch (error) {
    console.error('Error in retrieving leaves', error);
    res.status(500).json({
      type: 'error',
      message: 'Error retrieving leaves',
    });
  }
};

/*
  @route    GET: /leaves/:id
  @access   private
  @desc     Get a leave by ID
*/
export const getLeaveById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const leave = await prisma.leaves.findUnique({
      where: {
        Leave_ID: Number(id),
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
  } catch (error) {
    console.error('Error in retrieving leave', error);
    res.status(500).json({
      type: 'error',
      message: 'Error retrieving leave',
    });
  }
};

/*
  @route    PUT: /leaves/:id
  @access   private
  @desc     Update a leave by ID
*/
export const updateLeave = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const leaveData = req.body;

    // Validate incoming data
    const updateLeaveDTO = new CreateLeaveDto();
    Object.assign(updateLeaveDTO, leaveData);
    const errors = await validate(updateLeaveDTO);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const updatedLeave = await prisma.leaves.update({
      where: {
        Leave_ID: Number(id),
      },
      data: leaveData,
    });

    res.json({
      type: 'success',
      message: `Leave with ID ${id} updated successfully`,
      data: updatedLeave,
    });
  } catch (error) {
    console.error('Error in updating leave', error);
    res.status(500).json({
      type: 'error',
      message: `Error in updating leave with ID ${id}`,
    });
  }
};

/*
  @route    PUT: /leaves/:id/status
  @access   private
  @desc     Update the status of a leave by ID
*/
export const updateLeaveStatus = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { Status } = req.body;

    const updatedLeave = await prisma.leaves.update({
      where: {
        Leave_ID: Number(id),
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
  } catch (error) {
    console.error('Error in updating leave status', error);
    res.status(500).json({
      type: 'error',
      message: `Error in updating leave status for ID ${id}`,
    });
  }
};

/*
  @route    DELETE: /leaves/:id
  @access   private
  @desc     Delete a leave by ID
*/
export const deleteLeave = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedLeave = await prisma.leaves.delete({
      where: {
        Leave_ID: Number(id),
      },
    });
    res.status(200).json({
      type: 'success',
      message: 'Leave deleted successfully',
      data: deletedLeave,
    });
  } catch (error) {
    console.error('Error in deleting leave', error);
    res.status(500).json({
      type: 'error',
      message: 'Error deleting leave',
    });
  }
};

/*
  @route    POST: /paysleeps
  @access   private
  @desc     Create a new PaySleep
*/
export const createPaySleep = async (req: Request, res: Response) => {
  try {
    const paysleepData = req.body;

    // Validate incoming data
    const createPaySleepDTO = new CreatePaySleepDto();
    Object.assign(createPaySleepDTO, paysleepData);
    const errors = await validate(createPaySleepDTO);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const paysleep = await prisma.paySleep.create({
      data: paysleepData,
    });
    res.status(201).json({
      type: 'success',
      message: 'PaySleep created successfully',
      data: paysleep,
    });
  } catch (error) {
    console.error('Error in creating PaySleep', error);
    res.status(500).json({
      type: 'error',
      message: 'Error creating PaySleep',
    });
  }
};

/*
  @route    GET: /paysleeps
  @access   private
  @desc     Get all PaySleeps
*/
export const getAllPaySleep = async (req: Request, res: Response) => {
  try {
    const paySleeps = await prisma.paySleep.findMany();
    res.status(200).json({
      type: 'success',
      message: 'PaySleeps retrieved successfully',
      data: paySleeps,
    });
  } catch (error) {
    console.error('Error in retrieving PaySleeps', error);
    res.status(500).json({
      type: 'error',
      message: 'Error retrieving PaySleeps',
    });
  }
};

/*
  @route    GET: /paysleeps/:id
  @access   private
  @desc     Get a PaySleep by ID
*/
export const getPaySleep = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const paySleep = await prisma.paySleep.findUnique({
      where: {
        PaySleep_ID: Number(id),
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
  } catch (error) {
    console.error('Error in retrieving PaySleep', error);
    res.status(500).json({
      type: 'error',
      message: 'Server Error',
    });
  }
};

/*
  @route    PUT: /paysleeps/:id
  @access   private
  @desc     Update a PaySleep by ID
*/
export const updatePaySleep = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const paysleepData = req.body;

    // Validate incoming data
    const updatePaySleepDTO = new CreatePaySleepDto();
    Object.assign(updatePaySleepDTO, paysleepData);
    const errors = await validate(updatePaySleepDTO);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const updatedPaySleep = await prisma.paySleep.update({
      where: {
        PaySleep_ID: Number(id),
      },
      data: paysleepData,
    });

    res.json({
      type: 'success',
      message: `PaySleep with ID ${id} updated successfully`,
      data: updatedPaySleep,
    });
  } catch (error) {
    console.error('Error in updating PaySleep', error);
    res.status(500).json({
      type: 'error',
      message: `Error in updating PaySleep with ID ${id}`,
    });
  }
};

/*
  @route    PUT: /paysleeps/:id/status
  @access   private
  @desc     Update the status of a PaySleep by ID
*/
export const updatePaySleepStatus = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const { Status } = req.body;

    const updatedPaySleep = await prisma.paySleep.update({
      where: {
        PaySleep_ID: Number(id),
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
  } catch (error) {
    console.error('Error in updating PaySleep status', error);
    res.status(500).json({
      type: 'error',
      message: `Error in updating PaySleep status for ID ${id}`,
    });
  }
};

/*
  @route    DELETE: /paysleeps/:id
  @access   private
  @desc     Delete a PaySleep by ID
*/
export const deletePaySleep = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedPaySleep = await prisma.paySleep.delete({
      where: {
        PaySleep_ID: Number(id),
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
  } catch (error) {
    console.error('Error in deleting PaySleep', error);
    res.status(500).json({
      type: 'error',
      message: 'Server Error',
    });
  }
};
