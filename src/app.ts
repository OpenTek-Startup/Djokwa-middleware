import express from 'express';
import cors from 'cors';
import teacherRoute from './routes/teacher.route';
import humanResourcesRoute from './routes/humanResources.route';
import blockNoteRoute from './routes/blocknote.route';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger';
import classRoute from './routes/class.route'
import courseRoute from './routes/course.route'
import assignmentRoute from './routes/assignment.route'
import gradeRoute from './routes/grade.route'
import attendanceRoute from './routes/attendance.route'
import recordRoute from './routes/studentRecord.route'
import academicsRoute from './routes/academics.route'


import { PrismaClient } from '@prisma/client';
import studentRoute from './routes/student.route';
import academicsRoute from './routes/academics.route';
import incidentRoute from './routes/incident.route';
import schoolEventRoute from './routes/schoolEvent.route';

export const prisma = new PrismaClient();

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());

// main route
app.use('/api/teacher', teacherRoute);
<<<<<<< HEAD
app.use('/api', classRoute);
app.use('/api', courseRoute);
app.use('/api', assignmentRoute);
app.use('/api', gradeRoute);
app.use('/api',recordRoute);
app.use('/api', attendanceRoute);
app.use('/api', academicsRoute);

=======
app.use('/api/hr', humanResourcesRoute);
app.use('/api/student', studentRoute);
app.use('/api/academics', academicsRoute);
app.use('/api/blocknotes', blockNoteRoute);
app.use('/api/admin', incidentRoute, schoolEventRoute);
>>>>>>> e39927d33f190c5477496b00c73e6f7a6f799ec4

// Set up Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello DJOKWA, API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT} \n access the endpoints on http://localhost:${PORT}/api-docs`
  );
});

module.exports = app;
