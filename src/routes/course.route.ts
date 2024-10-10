import { Router } from 'express';
import {
  getCourse,
  createCourse,
  deleteCourse,
  updateCourse,
  createRoom,
  getRooms,
  createSchedule,
  getScheduleByCourse,
  getSchedules,
  getCourses
} from '../controllers/course.controller';

const router = Router();

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: A list of courses
 */
router.get('/courses', getCourses);

/**
 * @swagger
 * /api/courses/{id}:
 *   put:
 *     summary: Update a course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Course_name:
 *                 type: string
 *               Course_Code:
 *                 type: string
 *               Coefficient:
 *                 type: integer
 *               Start_Date:
 *                 type: string
 *                 format: date-time
 *               End_Date:
 *                 type: string
 *                 format: date-time
 *               Class_ID:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Course updated
 */
router.put('/courses/:id', updateCourse);

/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The course ID
 *     responses:
 *       200:
 *         description: A single course
 */
router.get('/courses/:id', getCourse);

/**
 * @swagger
 * /api/courses/{id}:
 *   delete:
 *     summary: Delete a course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The course ID
 *     responses:
 *       200:
 *         description: Course deleted
 */
router.delete('/courses/:id', deleteCourse);

/**
 * @swagger
 * /api/course:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Course_name:
 *                 type: string
 *               Course_Code:
 *                 type: string
 *               Coefficient:
 *                 type: integer
 *               Start_Date:
 *                 type: string
 *                 format: date-time
 *               End_Date:
 *                 type: string
 *                 format: date-time
 *               Class_ID:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Course created
 */
router.post('/course', createCourse);

/**
 * @swagger
 * /api/rooms:
 *   get:
 *     summary: Get all rooms
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: A list of rooms
 */
router.get('/rooms', getRooms);

/**
 * @swagger
 * /api/schedule/{id}:
 *   get:
 *     summary: Get a schedule by course ID
 *     tags: [Schedules]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The course ID
 *     responses:
 *       200:
 *         description: A schedule for the course
 */
router.get('/schedule/:id', getScheduleByCourse);

/**
 * @swagger
 * /api/schedules:
 *   get:
 *     summary: Get all schedules
 *     tags: [Schedules]
 *     responses:
 *       200:
 *         description: A list of schedules
 */
router.get('/schedules', getSchedules);

/**
 * @swagger
 * /api/room:
 *   post:
 *     summary: Create a new room
 *     tags: [Rooms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Room created
 */
router.post('/room', createRoom);

/**
 * @swagger
 * /api/schedule:
 *   post:
 *     summary: Create a new schedule
 *     tags: [Schedules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Day:
 *                 type: string
 *               Start_Time:
 *                 type: string
 *                 format: date-time
 *               End_Time:
 *                 type: string
 *                 format: date-time
 *               Room_ID:
 *                 type: integer
 *               Course_ID:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Schedule created
 */
router.post('/schedule', createSchedule);

export default router;
