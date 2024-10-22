import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { validate } from 'class-validator';
import {
  CreateAssignmentDto,
  UpdateAssignmentDto,
  CreateClassDto,
  UpdateClassDto,
  CreateCourseDto,
  UpdateCourseDto,
} from '../valdators/academics.validator';

const prisma = new PrismaClient();

/*
  @route    POST: /assignments
  @access   private
  @desc     Create a new assignment
*/
export const createAssignment = async (req: Request, res: Response) => {
  try {
    const assignmentData = req.body;

    // Validate incoming data
    const createAssignmentDto = new CreateAssignmentDto();
    Object.assign(createAssignmentDto, assignmentData);
    const errors = await validate(createAssignmentDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const newAssignment = await prisma.assignment.create({
      data: {
        dueDate: new Date(assignmentData.dueDate),
        title: assignmentData.title,
        Course: { connect: { Course_ID: assignmentData.courseId } },
        Teacher: { connect: { Teacher_ID: assignmentData.teacherId } },
        Class: { connect: { Class_id: assignmentData.classId } },
        description: assignmentData.description,
        Submission: assignmentData.Submission,
      },
    });

    res.status(201).json({
      type: 'success',
      message: 'Created assignment successfully',
      data: newAssignment,
    });
  } catch (error) {
    console.error('Error in creating assignment', error);
    res.status(500).json({
      type: 'error',
      message: 'Error creating assignment',
    });
  }
};

/*
  @route    PUT: /assignments/:id
  @access   private
  @desc     Update an assignment
*/
export const updateAssignment = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const assignmentData = req.body;

    // Validate incoming data
    const updateAssignmentDto = new UpdateAssignmentDto();
    Object.assign(updateAssignmentDto, assignmentData);
    const errors = await validate(updateAssignmentDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const updatedAssignment = await prisma.assignment.update({
      where: { Assignment_id: Number(id) },
      data: {
        dueDate: new Date(assignmentData.dueDate),
        title: assignmentData.title,
        description: assignmentData.description,
        Submission: assignmentData.Submission,
        Course: { connect: { Course_ID: assignmentData.courseId } },
        Teacher: { connect: { Teacher_ID: assignmentData.teacherId } },
        Class: { connect: { Class_id: assignmentData.classId } },
      },
    });

    res.json({
      type: 'success',
      message: `Assignment with ID ${id} updated successfully`,
      data: updatedAssignment,
    });
  } catch (error) {
    console.error('Error in updating assignment', error);
    res.status(500).json({
      type: 'error',
      message: `Error in updating assignment with ID ${id}`,
    });
  }
};

/*
  @route    POST: /assignments/submit
  @access   private
  @desc     Submit an assignment
*/
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
      type: 'success',
      message: 'Assignment submitted successfully',
      data: submission,
    });
  } catch (error) {
    console.error('Error in submitting assignment', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in submitting assignment',
    });
  }
};

/*
  @route    GET: /assignments/:id/submissions
  @access   private
  @desc     Get submissions for an assignment
*/
export const getSubmissions = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const submissions = await prisma.submission.findMany({
      where: { assignmentId: Number(id) },
      include: { student: true },
    });

    res.json({
      type: 'success',
      message: 'Submissions fetched successfully',
      data: submissions,
    });
  } catch (error) {
    console.error('Error in fetching submissions: ', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in fetching submissions',
    });
  }
};

/*
  @route    DELETE: /assignments/:id
  @access   private
  @desc     Delete an assignment
*/
export const deleteAssignment = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedAssignment = await prisma.assignment.delete({
      where: { Assignment_id: Number(id) },
    });

    res.json({
      type: 'success',
      message: 'Assignment deleted successfully',
      data: deletedAssignment,
    });
  } catch (error) {
    console.error('Error in deleting assignment', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in deleting assignment',
    });
  }
};

/*
  @route    POST: /classes
  @access   private
  @desc     Create a new class
*/
export const createClass = async (req: Request, res: Response) => {
  try {
    const classData = req.body;

    // Validate incoming data
    const createClassDto = new CreateClassDto();
    Object.assign(createClassDto, classData);
    const errors = await validate(createClassDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const newClass = await prisma.classes.create({
      data: {
        name: classData.name,
        classCode: classData.classCode,
        Teacher: { connect: { Teacher_ID: classData.teacherId } },
        capacity: classData.capacity,
        currentEnrollment: classData.currentEnrollment,
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
    });
  }
};

/*
  @route    GET: /classes
  @access   private
  @desc     Get all classes
*/
export const getClass = async (req: Request, res: Response) => {
  try {
    const classes = await prisma.classes.findMany({
      include: { Teacher: true },
    });

    res.json({
      type: 'success',
      message: 'Classes retrieved successfully',
      data: classes,
    });
  } catch (error) {
    console.error('Error in getting classes', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting classes',
    });
  }
};

/*
  @route    PUT: /classes/:id
  @access   private
  @desc     Update a class
*/
export const updateClass = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const classData = req.body;

    // Validate incoming data
    const updateClassDto = new UpdateClassDto();
    Object.assign(updateClassDto, classData);
    const errors = await validate(updateClassDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const updatedClass = await prisma.classes.update({
      where: { Class_id: Number(id) },
      data: {
        name: classData.name,
        classCode: classData.classCode,
        Teacher: { connect: { Teacher_ID: classData.teacherId } },
        capacity: classData.capacity,
        currentEnrollment: classData.currentEnrollment,
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
    });
  }
};

/*
  @route    DELETE: /classes/:id
  @access   private
  @desc     Delete a class
*/
export const deleteClass = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedClass = await prisma.classes.delete({
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
    });
  }
};

/*
  @route    POST: /courses
  @access   private
  @desc     Create a new course
*/
export const createCourse = async (req: Request, res: Response) => {
  try {
    const courseData = req.body;

    // Validate incoming data
    const createCourseDto = new CreateCourseDto();
    Object.assign(createCourseDto, courseData);
    const errors = await validate(createCourseDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const newCourse = await prisma.course.create({
      data: {
        Name: courseData.Name,
        courseCode: courseData.courseCode,
        Coefficient: courseData.Coefficient,
        Teacher: { connect: { Teacher_ID: courseData.Teacher_ID } },
        End_Date: new Date(courseData.End_Date),
        Start_Date: new Date(courseData.Start_Date),
        Chapters: courseData.Chapters,
        Class_Level: courseData.Class_Level,
        Assignment: courseData.Assignment,
        classes: { connect: { Class_id: courseData.Class_ID } },
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
    });
  }
};

/*
  @route    GET: /courses
  @access   private
  @desc     Get all courses
*/
export const getCourse = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      include: { Teacher: true, classes: true, Student: true },
    });

    res.json({
      type: 'success',
      message: 'Courses retrieved successfully',
      data: courses,
    });
  } catch (error) {
    console.error('Error in getting courses', error);
    res.status(500).json({
      type: 'error',
      message: 'Error in getting courses',
    });
  }
};

/*
  @route    PUT: /courses/:id
  @access   private
  @desc     Update a course
*/
export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const courseData = req.body;

    // Validate incoming data
    const updateCourseDto = new UpdateCourseDto();
    Object.assign(updateCourseDto, courseData);
    const errors = await validate(updateCourseDto);
    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }

    const updatedCourse = await prisma.course.update({
      where: { Course_ID: Number(id) },
      data: {
        Name: courseData.Name,
        Coefficient: courseData.Coefficient,
        Teacher: { connect: { Teacher_ID: courseData.Teacher_ID } },
        courseCode: courseData.courseCode,
        End_Date: new Date(courseData.End_Date),
        Start_Date: new Date(courseData.Start_Date),
        Chapters: courseData.Chapters,
        Assignment: courseData.Assignment,
        classes: { connect: { Class_id: courseData.Class_ID } },
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
    });
  }
};
/*
  @route    DELETE: /courses/:id
  @access   private
  @desc     Delete a course
*/
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
    });
  }
};
