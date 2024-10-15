import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Assignment
export const createAssignment = async (req: Request, res: Response) => {
  try {
    const {
      dueDate,
      title,
      classId,
      courseId,
      teacherId,
      description,
      // assigned_to,
      Submission,
    } = req.body;

    const newAssignment = await prisma.assignment.create({
      data: {
        dueDate,
        title,
        Course: { connect: { Course_ID: courseId } },
        Teacher: { connect: { Teacher_ID: teacherId } },
        Class: { connect: { Class_id: classId } },
        description,
        // assigned_to,
        Submission,
      },
    });
    res.status(201).json({
      type: 'success',
      data: newAssignment,
      message: 'Created assignment successfully',
    });
  } catch (error) {
    console.error('Error in creating assignment', error);

    res.status(500).json({
      type: 'Error',
      message: 'Error creating assignment',
      data: {},
    });
  }
};

export const submitAssignment = async (req: Request, res: Response) => {
  const { assignmentId, studentId, fileUrl, teacherId } = req.body;

  try {
    const submission = await prisma.submission.create({
      data: {
        fileUrl,
        student: { connect: { Student_ID: studentId } },
        assignment: { connect: { Assignment_id: assignmentId } },
        teacher: { connect: { Teacher_ID: teacherId } },
      },
    });

    res.json({
      type: 'Success',
      message: 'Assignment submitted successfully',
      data: submission,
    });
  } catch (error) {
    console.error('Error in submitting assignment', error);

    res.status(500).json({
      type: 'Error',
      message: 'Error in submitting assignment',
      data: {},
    });
  }
};

export const getSubmissions = async (req: Request, res: Response) => {
  const { Assignment_id } = req.params;
  try {
    const submissions = await prisma.submission.findMany({
      where: { assignmentId: Number(Assignment_id) },
      include: { student: true },
    });

    res.json({
      type: 'success',
      message: ' Submissions fetched Successfully ',
      data: submissions,
    });
  } catch (error) {
    console.error('Error in fetching submissions: ', error);

    res.status(500).json({
      type: 'Error',
      message: 'Error in fetching submissions',
      data: {},
    });
  }
};

export const deleteAssignment = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedAssignment = await prisma.assignment.delete({
      where: { Assignment_id: Number(id) },
    });

    res.json({
      type: 'Success',
      message: 'Assignment deleted successfully',
      data: deletedAssignment,
    });
  } catch (error) {
    console.error('Error in deleting assignment', error);

    res.status(500).json({
      type: 'Error',
      message: 'Error in deleting assignment',
      data: {},
    });
  }
};

// Class
export const createClass = async (req: Request, res: Response) => {
  try {
    const {
      name,
      classCode,
      teacherId,
      Course,
      capacity,
      currentEnrollment,
      Assignment,
      Student,
    } = req.body;

    const newClass = await prisma.class.create({
      data: {
        name,
        classCode,
        Teacher: { connect: { Teacher_ID: teacherId } },
        Course,
        Assignment,
        Student,
        capacity,
        currentEnrollment,
      },
    });

    res.status(201).json({
      type: 'success',
      message: 'Class created successfully',
      data: newClass,
    });
  } catch (error) {
    console.error('Error in creating class', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in creating class',
      data: {},
    });
  }
};

export const getClass = async (req: Request, res: Response) => {
  try {
    const classes = await prisma.class.findMany({ include: { Teacher: true } });

    res.json({
      type: 'success',
      message: ' ',
      data: classes,
    });
  } catch (error) {
    console.error('Error in getting class', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting class',
      data: {},
    });
  }
};

export const updateClass = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const {
      name,
      classCode,
      teacherId,
      Course,
      Assignment,
      Student,
      capacity,
      currentEnrollment,
    } = req.body;

    const updatedClass = await prisma.class.update({
      where: { Class_id: Number(id) },
      data: {
        name,
        capacity,
        currentEnrollment,
        classCode,
        Teacher: { connect: { Teacher_ID: teacherId } },
        Course,
        Assignment,
        Student,
      },
    });
    res.json({
      type: 'success',
      message: `Class with ID ${id} updated successfully`,
      data: updatedClass,
    });
  } catch (error) {
    console.error('Error in updating class', error);
    res.status(500).json({
      type: 'error',
      message: `Error in updating class with ID ${id}`,
      data: {},
    });
  }
};

export const deleteClass = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedClass = await prisma.class.delete({
      where: { Class_id: Number(id) },
    });

    res.json({
      type: 'success',
      message: `Class with ID ${id} deleted successfully`,
      data: deletedClass,
    });
  } catch (error) {
    console.error('Error in deleting class', error);
    res.status(500).json({
      type: 'error',
      message: `Error in deleting class with ID ${id}`,
      data: {},
    });
  }
};

// Course
export const createCourse = async (req: Request, res: Response) => {
  try {
    const {
      Name,
      Coefficient,
      teacherId,
      classId,
      EndDate,
      StartDate,
      courseCode,
      Chapters,
      Student,
      Grades,
      Schedules,
      transcript,
      Assignment,
      _class,
      Class_Level,
    } = req.body;

    const newCourse = await prisma.course.create({
      data: {
        Name,
        courseCode,
        Coefficient,
        Teacher: { connect: { Teacher_ID: teacherId } },
        Class: { connect: { Class_id: classId } },
        End_Date: new Date(EndDate),
        Start_Date: new Date(StartDate),
        Chapters,
        Student,
        Grades,
        Schedules,
        transcript,
        Assignment,
        class: _class,
        Class_Level,
      },
    });

    res.status(201).json({
      type: 'success',
      message: 'Course created successfully',
      data: newCourse,
    });
  } catch (error) {
    console.error('Error in creating course', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in creating course',
      data: {},
    });
  }
};

export const getCourse = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      include: { Teacher: true, Class: true, Student: true },
    });

    res.json({
      type: 'success',
      message: ' ',
      data: courses,
    });
  } catch (error) {
    console.error('Error in getting course', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting course',
      data: {},
    });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const {
      Name,
      StartDate,
      Coefficient,
      teacherId,
      classId,
      EndDate,
      courseCode,
      Chapters,
      Student,
      Grades,
      Schedules,
      transcript,
      Assignment,
    } = req.body;

    const updatedCourse = await prisma.course.update({
      where: { Course_ID: Number(id) },
      data: {
        Name,
        Class: { connect: { Class_id: classId } },
        Coefficient,
        Teacher: { connect: { Teacher_ID: teacherId } },
        courseCode,
        End_Date: new Date(EndDate),
        Start_Date: new Date(StartDate),
        Chapters,
        Student,
        Grades,
        Schedules,
        transcript,
        Assignment,
      },
    });
    res.json({
      type: 'success',
      message: `Course with ID ${id} updated successfully`,
      data: updatedCourse,
    });
  } catch (error) {
    console.error('Error in updating course', error);
    res.status(500).json({
      type: 'error',
      message: `Error in updating course with ID ${id}`,
      data: {},
    });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedCourse = await prisma.course.delete({
      where: { Course_ID: Number(id) },
    });

    res.json({
      type: 'success',
      message: `Course with ID ${id} deleted successfully`,
      data: deletedCourse,
    });
  } catch (error) {
    console.error('Error in deleting course', error);
    res.status(500).json({
      type: 'error',
      message: `Error in deleting course with ID ${id}`,
      data: {},
    });
  }
};

// Grading
