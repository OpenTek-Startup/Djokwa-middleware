import express from 'express';
import cors from 'cors';
import teacherRoute from './routes/teacher.route';
import studentRoute from './routes/student.routes';
import leaveRoute from './routes/leaves.route';
import scheduleRoute from './routes/schedule.route';
import paySleepRoute from './routes/paysleep.route';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger';
import { PrismaClient } from '@prisma/client';

// create new prisma object

export const prisma = new PrismaClient();

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());

// main route
app.use('/api/teacher', teacherRoute);
app.use('/api/student', studentRoute);

app.use('/api/leave', leaveRoute);
app.use('/api/paysleep', paySleepRoute);
app.use('/api/schedule', scheduleRoute);
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
