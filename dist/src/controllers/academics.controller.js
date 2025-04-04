"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCourse = exports.updateCourse = exports.getCourse = exports.createCourse = exports.deleteClass = exports.updateClass = exports.getClass = exports.createClass = exports.deleteAssignment = exports.getSubmissions = exports.submitAssignment = exports.updateAssignment = exports.createAssignment = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const academics_validator_1 = require("../valdators/academics.validator");
const prisma = new client_1.PrismaClient();
/*
  @route    POST: /assignments
  @access   private
  @desc     Create a new assignment
*/
const createAssignment = async (req, res) => {
    try {
        const assignmentData = req.body;
        // Validate incoming data
        const createAssignmentDto = new academics_validator_1.CreateAssignmentDto();
        Object.assign(createAssignmentDto, assignmentData);
        const errors = await (0, class_validator_1.validate)(createAssignmentDto);
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
                Course: { connect: { Id: assignmentData.courseId } },
                Teacher: { connect: { Id: assignmentData.teacherId } },
                Class: { connect: { Id: assignmentData.classId } },
                description: assignmentData.description,
                Submission: assignmentData.Submission,
            },
        });
        res.status(201).json({
            type: 'success',
            message: 'Created assignment successfully',
            data: newAssignment,
        });
    }
    catch (error) {
        console.error('Error in creating assignment', error);
        res.status(500).json({
            type: 'error',
            message: 'Error creating assignment',
        });
    }
};
exports.createAssignment = createAssignment;
/*
  @route    PUT: /assignments/:id
  @access   private
  @desc     Update an assignment
*/
const updateAssignment = async (req, res) => {
    const { id } = req.params;
    try {
        const assignmentData = req.body;
        // Validate incoming data
        const updateAssignmentDto = new academics_validator_1.UpdateAssignmentDto();
        Object.assign(updateAssignmentDto, assignmentData);
        const errors = await (0, class_validator_1.validate)(updateAssignmentDto);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors,
            });
        }
        const updatedAssignment = await prisma.assignment.update({
            where: { Id: Number(id) },
            data: {
                dueDate: new Date(assignmentData.dueDate),
                title: assignmentData.title,
                description: assignmentData.description,
                Submission: assignmentData.Submission,
                Course: { connect: { Id: assignmentData.courseId } },
                Teacher: { connect: { Id: assignmentData.teacherId } },
                Class: { connect: { Id: assignmentData.classId } },
            },
        });
        res.json({
            type: 'success',
            message: `Assignment with ID ${id} updated successfully`,
            data: updatedAssignment,
        });
    }
    catch (error) {
        console.error('Error in updating assignment', error);
        res.status(500).json({
            type: 'error',
            message: `Error in updating assignment with ID ${id}`,
        });
    }
};
exports.updateAssignment = updateAssignment;
/*
  @route    POST: /assignments/submit
  @access   private
  @desc     Submit an assignment
*/
const submitAssignment = async (req, res) => {
    const { assignmentId, studentId, fileUrl, teacherId } = req.body;
    try {
        const submission = await prisma.submission.create({
            data: {
                fileUrl,
                student: { connect: { Id: studentId } },
                assignment: { connect: { Id: assignmentId } },
                teacher: { connect: { Id: teacherId } },
            },
        });
        res.json({
            type: 'success',
            message: 'Assignment submitted successfully',
            data: submission,
        });
    }
    catch (error) {
        console.error('Error in submitting assignment', error);
        res.status(500).json({
            type: 'error',
            message: 'Error in submitting assignment',
        });
    }
};
exports.submitAssignment = submitAssignment;
/*
  @route    GET: /assignments/:id/submissions
  @access   private
  @desc     Get submissions for an assignment
*/
const getSubmissions = async (req, res) => {
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
    }
    catch (error) {
        console.error('Error in fetching submissions: ', error);
        res.status(500).json({
            type: 'error',
            message: 'Error in fetching submissions',
        });
    }
};
exports.getSubmissions = getSubmissions;
/*
  @route    DELETE: /assignments/:id
  @access   private
  @desc     Delete an assignment
*/
const deleteAssignment = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAssignment = await prisma.assignment.delete({
            where: { Id: Number(id) },
        });
        res.json({
            type: 'success',
            message: 'Assignment deleted successfully',
            data: deletedAssignment,
        });
    }
    catch (error) {
        console.error('Error in deleting assignment', error);
        res.status(500).json({
            type: 'error',
            message: 'Error in deleting assignment',
        });
    }
};
exports.deleteAssignment = deleteAssignment;
/*
  @route    POST: /classes
  @access   private
  @desc     Create a new class
*/
const createClass = async (req, res) => {
    try {
        const classData = req.body;
        // Validate incoming data
        const createClassDto = new academics_validator_1.CreateClassDto();
        Object.assign(createClassDto, classData);
        const errors = await (0, class_validator_1.validate)(createClassDto);
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
                Teacher: { connect: { Id: classData.teacherId } },
                capacity: classData.capacity,
                currentEnrollment: classData.currentEnrollment,
            },
        });
        res.status(201).json({
            type: 'success',
            message: 'Class created successfully',
            data: newClass,
        });
    }
    catch (error) {
        console.error('Error in creating class', error);
        res.status(500).json({
            type: 'error',
            message: 'Error in creating class',
        });
    }
};
exports.createClass = createClass;
/*
  @route    GET: /classes
  @access   private
  @desc     Get all classes
*/
const getClass = async (req, res) => {
    try {
        const classes = await prisma.classes.findMany({
            include: { Teacher: true },
        });
        res.json({
            type: 'success',
            message: 'Classes retrieved successfully',
            data: classes,
        });
    }
    catch (error) {
        console.error('Error in getting classes', error);
        res.status(500).json({
            type: 'error',
            message: 'Error in getting classes',
        });
    }
};
exports.getClass = getClass;
/*
  @route    PUT: /classes/:id
  @access   private
  @desc     Update a class
*/
const updateClass = async (req, res) => {
    const { id } = req.params;
    try {
        const classData = req.body;
        // Validate incoming data
        const updateClassDto = new academics_validator_1.UpdateClassDto();
        Object.assign(updateClassDto, classData);
        const errors = await (0, class_validator_1.validate)(updateClassDto);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors,
            });
        }
        const updatedClass = await prisma.classes.update({
            where: { Id: Number(id) },
            data: {
                name: classData.name,
                classCode: classData.classCode,
                Teacher: { connect: { Id: classData.teacherId } },
                capacity: classData.capacity,
                currentEnrollment: classData.currentEnrollment,
            },
        });
        res.json({
            type: 'success',
            message: `Class with ID ${id} updated successfully`,
            data: updatedClass,
        });
    }
    catch (error) {
        console.error('Error in updating class', error);
        res.status(500).json({
            type: 'error',
            message: `Error in updating class with ID ${id}`,
        });
    }
};
exports.updateClass = updateClass;
/*
  @route    DELETE: /classes/:id
  @access   private
  @desc     Delete a class
*/
const deleteClass = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedClass = await prisma.classes.delete({
            where: { Id: Number(id) },
        });
        res.json({
            type: 'success',
            message: `Class with ID ${id} deleted successfully`,
            data: deletedClass,
        });
    }
    catch (error) {
        console.error('Error in deleting class', error);
        res.status(500).json({
            type: 'error',
            message: `Error in deleting class with ID ${id}`,
        });
    }
};
exports.deleteClass = deleteClass;
/*
  @route    POST: /courses
  @access   private
  @desc     Create a new course
*/
const createCourse = async (req, res) => {
    try {
        const courseData = req.body;
        // Validate incoming data
        const createCourseDto = new academics_validator_1.CreateCourseDto();
        Object.assign(createCourseDto, courseData);
        const errors = await (0, class_validator_1.validate)(createCourseDto);
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
                Teacher: { connect: { Id: courseData.Teacher_ID } },
                End_Date: new Date(courseData.End_Date),
                Start_Date: new Date(courseData.Start_Date),
                Chapters: courseData.Chapters,
                Class_Level: courseData.Class_Level,
                Assignment: courseData.Assignment,
                classes: { connect: { Id: courseData.Class_ID } },
            },
        });
        res.status(201).json({
            type: 'success',
            message: 'Course created successfully',
            data: newCourse,
        });
    }
    catch (error) {
        console.error('Error in creating course', error);
        res.status(500).json({
            type: 'error',
            message: 'Error in creating course',
        });
    }
};
exports.createCourse = createCourse;
/*
  @route    GET: /courses
  @access   private
  @desc     Get all courses
*/
const getCourse = async (req, res) => {
    try {
        const courses = await prisma.course.findMany({
            include: { Teacher: true, classes: true, Student: true },
        });
        res.json({
            type: 'success',
            message: 'Courses retrieved successfully',
            data: courses,
        });
    }
    catch (error) {
        console.error('Error in getting courses', error);
        res.status(500).json({
            type: 'error',
            message: 'Error in getting courses',
        });
    }
};
exports.getCourse = getCourse;
/*
  @route    PUT: /courses/:id
  @access   private
  @desc     Update a course
*/
const updateCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const courseData = req.body;
        // Validate incoming data
        const updateCourseDto = new academics_validator_1.UpdateCourseDto();
        Object.assign(updateCourseDto, courseData);
        const errors = await (0, class_validator_1.validate)(updateCourseDto);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors,
            });
        }
        const updatedCourse = await prisma.course.update({
            where: { Id: Number(id) },
            data: {
                Name: courseData.Name,
                Coefficient: courseData.Coefficient,
                Teacher: { connect: { Id: courseData.Teacher_ID } },
                courseCode: courseData.courseCode,
                End_Date: new Date(courseData.End_Date),
                Start_Date: new Date(courseData.Start_Date),
                Chapters: courseData.Chapters,
                Assignment: courseData.Assignment,
                classes: { connect: { Id: courseData.Class_ID } },
            },
        });
        res.json({
            type: 'success',
            message: `Course with ID ${id} updated successfully`,
            data: updatedCourse,
        });
    }
    catch (error) {
        console.error('Error in updating course', error);
        res.status(500).json({
            type: 'error',
            message: `Error in updating course with ID ${id}`,
        });
    }
};
exports.updateCourse = updateCourse;
/*
  @route    DELETE: /courses/:id
  @access   private
  @desc     Delete a course
*/
const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCourse = await prisma.course.delete({
            where: { Id: Number(id) },
        });
        res.json({
            type: 'success',
            message: `Course with ID ${id} deleted successfully`,
            data: deletedCourse,
        });
    }
    catch (error) {
        console.error('Error in deleting course', error);
        res.status(500).json({
            type: 'error',
            message: `Error in deleting course with ID ${id}`,
        });
    }
};
exports.deleteCourse = deleteCourse;
