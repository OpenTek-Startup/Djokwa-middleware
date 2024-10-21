import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { validate } from 'class-validator';
import {
  CreateAssignmentDto,
  SubmitAssignmentDto,
  CreateClassDto,
  UpdateClassDto,
  CreateCourseDto,
  UpdateCourseDto,
  CreateGradeDto,
  UpdateGradeDto
} from '../valdators/academics.validator';

const prisma = new PrismaClient();

// ----------- ASSIGNMENT CONTROLLERS ------------
export const createAssignment = async (req: Request, res: Response) => {
  try {
    const createAssignmentDto = new CreateAssignmentDto();
    Object.assign(createAssignmentDto, req.body);
   
    const errors = await validate(createAssignmentDto);

  if (errors.length > 0) {
    return res.status(400).json({
      type: 'error',
      message: 'Validation failed',
      errors,
    });
  }

    const { dueDate, title, classId, courseId, teacherId, description, Submission } = req.body;

    const newAssignment = await prisma.assignment.create({
      data: {
        dueDate,
        title,
        Course: { connect: { Course_ID: courseId } },
        Teacher: { connect: { Teacher_ID: teacherId } },
        Class: { connect: { Class_id: classId } },
        description,
        Submission,
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
      type: 'Error',
      message: 'Error creating assignment',
      data: error instanceof Array ? error : {},
    });
  }
};

export const submitAssignment = async (req: Request, res: Response) => {
  try {
    const submitAssignmentDto = new SubmitAssignmentDto();
    Object.assign(submitAssignmentDto, req.body);
    const errors = await validate(submitAssignmentDto);

  if (errors.length > 0) {
    return res.status(400).json({
      type: 'error',
      message: 'Validation failed',
      errors,
    });
  }

    const { assignmentId, studentId, fileUrl, teacherId } = req.body;

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
      type: 'Error',
      message: 'Error in submitting assignment',
      data: error instanceof Array ? error : {},
    });
  }
};

export const getSubmissions = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const submissions = await prisma.submission.findMany({
      where: { assignment_id: Number(id) },
      include: { Student: true },
    });

    res.json({
      type: 'success',
      message: 'Submissions fetched successfully',
      data: submissions,
    });
  } catch (error) {
    console.error('Error in fetching submissions', error);
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
      type: 'success',
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

// ----------- CLASS CONTROLLERS ------------
export const createClass = async (req: Request, res: Response) => {
  try {
    const createClassDto = new CreateClassDto();
    Object.assign(createClassDto, req.body);
    const errors = await validate(createClassDto);

  if (errors.length > 0) {
    return res.status(400).json({
      type: 'error',
      message: 'Validation failed',
      errors,
    });
  }

    const { name, classCode, teacherId, capacity, currentEnrollment } = req.body;

    const newClass = await prisma.classes.create({
      data: {
        name,
        classCode,
        Teacher: { connect: { Teacher_ID: teacherId } },
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
      type: 'Error',
      message: 'Error in creating class',
      data: error instanceof Array ? error : {},
    });
  }
};

export const getClass = async (req: Request, res: Response) => {
  try {
    const classes = await prisma.classes.findMany({
      include: { Teacher: true },
    });

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
    const updateClassDto = new UpdateClassDto();
    Object.assign(updateClassDto, req.body);
    const errors = await validate(updateClassDto);

  if (errors.length > 0) {
    return res.status(400).json({
      type: 'error',
      message: 'Validation failed',
      errors,
    });
  }
    

    const { name, classCode, teacherId, capacity, currentEnrollment } = req.body;

    const updatedClass = await prisma.classes.update({
      where: { Class_id: Number(id) },
      data: {
        name,
        classCode,
        Teacher: { connect: { Teacher_ID: teacherId } },
        capacity,
        currentEnrollment,
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
      type: 'Error',
      message: `Error in updating class with ID ${id}`,
      data: error instanceof Array ? error : {},
    });
  }
};

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
      type: 'Error',
      message: `Error in deleting class with ID ${id}`,
      data: {},
    });
  }
};

// ----------- COURSE CONTROLLERS ------------
export const createCourse = async (req: Request, res: Response) => {
  try {
    const createCourseDto = new CreateCourseDto();
    Object.assign(createCourseDto, req.body);
    const errors = await validate(createCourseDto);

  if (errors.length > 0) {
    return res.status(400).json({
      type: 'error',
      message: 'Validation failed',
      errors,
    });
  }

    const {
      Name,
      courseCode,
      Coefficient,
      teacherId,
      classId,
      StartDate,
      EndDate,
    } = req.body;

    const newCourse = await prisma.course.create({
      data: {
        Name,
        courseCode,
        Coefficient,
        Teacher: { connect: { Teacher_ID: teacherId } },
        Start_Date: new Date(StartDate),
        End_Date: new Date(EndDate),
        classes: { connect: { Class_id: classId } },
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
      type: 'Error',
      message: 'Error in creating course',
      data: error instanceof Array ? error : {},
    });
  }
};

export const getCourse = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      include: { Teacher: true, classes: true, Student: true },
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
    const updateCourseDto = new UpdateCourseDto();
    Object.assign(updateCourseDto, req.body);
    const errors = await validate(updateCourseDto);

  if (errors.length > 0) {
    return res.status(400).json({
      type: 'error',
      message: 'Validation failed',
      errors,
    });
  }

    const {
      Name,
      StartDate,
      Coefficient,
      teacherId,
      classId,
      EndDate,
      courseCode,
    } = req.body;

    const updatedCourse = await prisma.course.update({
      where: { Course_ID: Number(id) },
      data: {
        Name,
        Coefficient,
        Teacher: { connect: { Teacher_ID: teacherId } },
        courseCode,
        End_Date: new Date(EndDate),
        Start_Date: new Date(StartDate),
        classes: { connect: { Class_id: classId } },
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
      type: 'Error',
      message: `Error in updating course with ID ${id}`,
      data: error instanceof Array ? error : {},
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
      type: 'Error',
      message: `Error in deleting course with ID ${id}`,
      data: {},
    });
  }
};


// Create a Grade
export const createGrade = async (req: Request, res: Response) => {

  try {
    const createGradeDto = new CreateGradeDto();
    Object.assign(createGradeDto, req.body);
    const errors = await validate(createGradeDto);

    if (errors.length > 0) {
      return res.status(400).json({
        type: 'error',
        message: 'Validation failed',
        errors,
      });
    }
    const { value, studentId, courseId, assignmentId } = req.body;

    const newGrade = await prisma.grade.create({
      data: {
        Value: value,
        Student: { connect: { Student_ID: studentId } },
        Course: { connect: { Course_ID: courseId } },
        assignmentId,
      },
    });

    res.status(201).json({
      type: 'success',
      message: 'Grade created successfully',
      data: newGrade,
    });
  } catch (error) {
    console.error('Error creating grade:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error creating grade',
      data: {},
    });
  }
};

// Read all Grades
export const getAllGrades = async (req: Request, res: Response) => {
  try {
    const grades = await prisma.grade.findMany({
      include: {
        Student: true,
        Course: true,
      },
    });

    res.json({
      type: 'success',
      message: 'Grades fetched successfully',
      data: grades,
    });
  } catch (error) {
    console.error('Error fetching grades:', error);
    res.status(500).json({
      type: 'error',
      message: 'Error fetching grades',
      data: {},
    });
  }
};

// Read a Grade by ID
export const getGradeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const grade = await prisma.grade.findUnique({
      where: { Grade_ID: Number(id) },
      include: {
        Student: true,
        Course: true,
      },
    });

    if (!grade) {
      return res.status(404).json({
        type: 'error',
        message: `Grade with ID ${id} not found`,
        data: {},
      });
    }

    res.json({
      type: 'success',
      message: `Grade with ID ${id} fetched successfully`,
      data: grade,
    });
  } catch (error) {
    console.error('Error fetching grade:', error);
    res.status(500).json({
      type: 'error',
      message: `Error fetching grade with ID ${id}`,
      data: {},
    });
  }
};

// Update a Grade
export const updateGrade = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updateGradeDto = new UpdateGradeDto();
    Object.assign(updateGradeDto, req.body);

    const errors = await validate(updateGradeDto);

  if (errors.length > 0) {
    return res.status(400).json({
      type: 'error',
      message: 'Validation failed',
      errors,
    });
  }
    const { value, studentId, courseId, assignmentId } = req.body;

    const updatedGrade = await prisma.grade.update({
      where: { Grade_ID: Number(id) },
      data: {
        Value: value,
        Student: { connect: { Student_ID: studentId } },
        Course: { connect: { Course_ID: courseId } },
        assignmentId,
      },
    });

    res.json({
      type: 'success',
      message: `Grade with ID ${id} updated successfully`,
      data: updatedGrade,
    });
  } catch (error) {
    console.error('Error updating grade:', error);
    res.status(500).json({
      type: 'error',
      message: `Error updating grade with id ${id}`,
      data: {},
    });
  }
};

// Delete a Grade
export const deleteGrade = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedGrade = await prisma.grade.delete({
      where: { Grade_ID: Number(id) },
    });

    res.json({
      type: 'success',
      message: `Grade with ID ${id} deleted successfully`,
      data: deletedGrade,
    });
  } catch (error) {
    console.error('Error deleting grade:', error);
    res.status(500).json({
      type: 'error',
      message: `Error deleting grade with ID ${id}`,
      data: {},
    });
  }
};
