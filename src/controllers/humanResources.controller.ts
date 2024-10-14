import { Request, Response } from 'express';
import { prisma } from '../app';
import { Days, ProgressStatus } from '@prisma/client';
import { validate } from 'class-validator';
import {
  CreateSceduleDto,
  CreateLeaveDto,
  CreatePaySleepDto,
} from '../valdators/humanResource.validator';

// creating a schedule
export const createSchedule = async (req: Request, res: Response) => {
  const scheduleData = req.body;
  const createScheduleDTO = new CreateSceduleDto();

  Object.assign(createScheduleDTO, scheduleData);

  const errors = await validate(createScheduleDTO); // Correct input for validation

  if (errors.length > 0) {
    console.log(errors);
    return res.status(400).json({
      type: 'error',
      message: 'Validation failed',
      errors: errors,
    });
  }

  try {
    const schedule = await prisma.schedule.create({
      data: {
        Day: scheduleData.Day,
        Start_Time: scheduleData.Start_Time,
        End_Time: scheduleData.End_Time,
        Room_ID: scheduleData.Room_ID,
        Course_ID: scheduleData.Course_ID,
      },
    });
    res.status(201).json({
      message: 'Schedule Created Successfully',
      data: schedule,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error Creating Schedule',
    });
  }
};

// getting all schedules

export const getAllSchedules = async (req: Request, res: Response) => {
  try {
    const schedules = await prisma.schedule.findMany();
    if (!schedules) {
      return res.status(404).json({
        message: 'Schedule Not Found',
      });
    }
    res.status(200).json({
      message: 'Schedules Retrieved Successfully',
      data: schedules,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error Retrieving Schedules',
    });
  }
};

// getting a schedule by id

export const getScheduleById = async (req: Request, res: Response) => {
  const { sid } = req.params;
  try {
    const schedule = await prisma.schedule.findUnique({
      where: {
        Schedule_ID: Number(sid),
      },
    });
    if (!schedule) {
      return res.status(404).json({
        message: 'Schedule Not Found',
      });
    }
    res.status(200).json({
      message: 'Schedule Retrieved Successfully',
      data: schedule,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error Retrieving Schedule',
    });
  }
};

// updating a schedule

export const updateSchedule = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    Day,
    Start_Time,
    End_Time,
    Room_ID,
    Course_ID,
  }: {
    Day: Days;
    Start_Time: string;
    End_Time: string;
    Room_ID: number;
    Course_ID: number;
  } = req.body;
  try {
    const schedule = await prisma.schedule.update({
      where: {
        Schedule_ID: Number(id),
      },
      data: {
        Day,
        Start_Time,
        End_Time,
        Room_ID: Number(Room_ID),
        Course_ID: Number(Course_ID),
      },
    });
    if (!schedule) {
      return res.status(404).json({
        message: 'Schedule Not Found',
      });
    }
    res.status(200).json({
      message: 'Schedule Updated Successfully',
      data: schedule,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error Updating Schedule',
    });
  }
};

// deleting a schedule

export const deleteSchedule = async (req: Request, res: Response) => {
  const { sid } = req.params;
  try {
    const schedule = await prisma.schedule.delete({
      where: {
        Schedule_ID: Number(sid),
      },
    });
    if (!schedule) {
      return res.status(404).json({
        message: 'Schedule Not Found',
      });
    }
    res.status(200).json({
      message: 'Schedule Deleted Successfully',
      data: schedule,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error Deleting Schedule',
    });
  }
};
// Creating Leaves
export const createLeave = async (req: Request, res: Response) => {
  const createLeaveDTO = new CreateLeaveDto();
  const leaveData = req.body;

  Object.assign(createLeaveDTO, leaveData);

  const errors = await validate(createLeaveDTO); // Correct input for validation

  if (errors.length > 0) {
    console.log(errors);
    return res.status(400).json({
      type: 'error',
      message: 'Validation failed',
      errors: errors,
    });
  }

  try {
    const leave = await prisma.leaves.create({
      data: {
        FirstName: leaveData.FirstName, // Use camelCase if that's your schema naming
        LastName: leaveData.LastName,
        JerseyNum: leaveData.JerseyNum,
        Start_Date: new Date(leaveData.Start_Date),
        End_Date: new Date(leaveData.End_Date),
        Type: leaveData.Type,
        Status: leaveData.Status,
        Personnel_ID: leaveData.Personnel_ID
          ? Number(leaveData.Personnel_ID)
          : null,
        Teacher_ID: leaveData.Teacher_ID ? Number(leaveData.Teacher_ID) : null,
      },
    });
    res.status(201).json({
      message: 'Leave created successfully',
      data: leave,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error creating leave',
    });
  }
};

// Getting All Leaves
export const getAllLeaves = async (req: Request, res: Response) => {
  try {
    const leaves = await prisma.leaves.findMany();
    res.status(200).json({
      message: 'Leaves retrieved successfully',
      data: leaves,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving leaves',
    });
  }
};

// Getting a Single Leave by ID
export const getLeaveById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const leave = await prisma.leaves.findUnique({
      where: {
        Leave_ID: Number(id), // Ensure this matches your Prisma schema field names
      },
    });
    if (!leave) {
      return res.status(404).json({
        message: 'Leave not found',
      });
    }
    res.status(200).json({
      message: 'Leave retrieved successfully',
      data: leave,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving leave',
    });
  }
};

// Updating a Leave by ID
export const updateLeave = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    FirstName,
    LastName,
    JerseyNum,
    Start_Date,
    End_Date,
    Type,
    Status,
    Personnel_ID,
    Teacher_ID,
  } = req.body;

  try {
    const leave = await prisma.leaves.update({
      where: {
        Leave_ID: Number(id), // Prisma schema naming convention
      },
      data: {
        FirstName: FirstName,
        LastName: LastName,
        JerseyNum: JerseyNum,
        Start_Date: Start_Date,
        End_Date: new Date(End_Date),
        Type: Type,
        // Status: Status,
        Personnel_ID: Personnel_ID ? Number(Personnel_ID) : null,
        Teacher_ID: Teacher_ID ? Number(Teacher_ID) : null,
      },
    });
    res.status(200).json({
      message: 'Leave updated successfully',
      data: leave,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating leave',
    });
  }
};

// Updating Leave Status
export const updateLeaveStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  //   const { Status }: { Status: LeaveStatus } = req.body; // Could be Approved, Pending, Denied
  try {
    const leave = await prisma.leaves.update({
      where: {
        Leave_ID: Number(id),
      },
      data: {
        // Status: Status,
      },
    });
    res.status(200).json({
      message: 'Leave status updated successfully',
      data: leave,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating leave status',
    });
  }
};

// Deleting a Leave by ID
export const deleteLeave = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedLeave = await prisma.leaves.delete({
      where: {
        Leave_ID: Number(id),
      },
    });
    res.status(200).json({
      message: 'Leave deleted successfully',
      data: deletedLeave,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error deleting leave',
    });
  }
};

// Creating PaySleeps
export const createPaySleep = async (req: Request, res: Response) => {
  const createPaySleepDTO = new CreatePaySleepDto();
  const paysleepData = req.body;

  Object.assign(createPaySleepDTO, paysleepData);

  const errors = await validate(createPaySleepDTO); // Correct input for validation

  if (errors.length > 0) {
    console.log(errors);
    return res.status(400).json({
      type: 'error',
      message: 'Validation failed',
      errors: errors,
    });
  }

  try {
    const paysleep = await prisma.paySleep.create({
      data: {
        FirstName: paysleepData.FirstName, // Use camelCase if that's your schema naming
        LastName: paysleepData.LastName,
        Pay_Date: new Date(paysleepData.Pay_Date),
        Create_Date: new Date(paysleepData.Create_Date),
        Amount: paysleepData.Amount,
        Status: paysleepData.Status,
        Personnel_ID: paysleepData.Personnel_ID
          ? Number(paysleepData.Personnel_ID)
          : null,
        Teacher_ID: paysleepData.Teacher_ID
          ? Number(paysleepData.Teacher_ID)
          : null,
        Budget_ID: paysleepData.Budget_ID
          ? Number(paysleepData.Budget_ID)
          : null,
      },
    });
    res.status(201).json({
      message: 'PaySleep created successfully',
      data: paysleep,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error creating PaySleep',
    });
  }
};

// retrieving a Payrol record

export const getPaySleep = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const paySleep = await prisma.paySleep.findUnique({
      where: {
        PaySleep_ID: Number(id),
      },
    });

    if (!paySleep) {
      return res.status(404).json({ message: 'PaySleep not found' });
    }

    res.status(200).json({
      message: 'PaySleep retrieved successfully',
      data: paySleep,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// retrieving all Payrol records

export const getAllPaySleep = async (req: Request, res: Response) => {
  try {
    const paySleeps = await prisma.paySleep.findMany();
    res.status(200).json({
      message: 'PaySleeps retrieved successfully',
      data: paySleeps,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// updating a Payrol record

export const updatePaySleep = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    FirstName,
    LastName,
    Pay_Date,
    Create_Date,
    Amount,
    Status,
    Personnel_ID,
    Teacher_ID,
    Budget,
  }: {
    FirstName: string;
    LastName: string;
    Pay_Date: string;
    Create_Date: string;
    Amount: number;
    Status: ProgressStatus;
    Personnel_ID?: number;
    Teacher_ID?: number;
    Budget?: number;
  } = req.body;

  try {
    const paySleep = await prisma.paySleep.update({
      where: {
        PaySleep_ID: Number(id),
      },
      data: {
        FirstName,
        LastName,
        Pay_Date: Pay_Date ? new Date(Pay_Date) : null,
        Create_Date: Create_Date ? new Date(Create_Date) : new Date(), // Set to now if not provided
        Amount,
        // Status,
        Personnel_ID: Number(Personnel_ID),
        Teacher_ID: Number(Teacher_ID),
        Budget_ID: Number(Budget),
      },
    });

    if (!paySleep) {
      return res.status(404).json({
        message: 'PaySleep not found',
      });
    }

    res.status(200).json({
      message: 'PaySleep updated successfully',
      data: paySleep,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server Error',
    });
  }
};

// updating the status of a payroll and Pay Date
export const updatePaySleepStatus = async (req: Request, res: Response) => {
  const { psid } = req.params;
  const {
    Pay_Date,
    Status,
  }: {
    Pay_Date?: string;
    Status: ProgressStatus;
  } = req.body;
  try {
    const status = await prisma.paySleep.update({
      where: {
        PaySleep_ID: Number(psid),
      },
      data: {
        Pay_Date: Pay_Date ? new Date(Pay_Date) : null, // if Pay_Date is provided, convert it to a Date object
        Status,
      },
    });
    if (!status) {
      return res.status(404).json({
        message: 'PaySleep not found',
      });
    }
    res.status(200).json({
      message: 'PaySleep status updated successfully',
      data: status,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating PaySleep status',
    });
  }
};

// deleting a Payrol record

export const deletePaySleep = async (req: Request, res: Response) => {
  const { psid } = req.params;

  try {
    const paySleep = await prisma.paySleep.delete({
      where: {
        PaySleep_ID: Number(psid),
      },
    });

    if (!paySleep) {
      return res.status(404).json({
        message: 'PaySleep not found',
      });
    }

    res.status(200).json({
      message: 'PaySleep deleted successfully',
      data: paySleep,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server Error',
    });
  }
};
