import express from 'express';
import cors from 'cors';
import teacherRoute from './routes/teacher.route';
import LeaveRoute from "./routes/leaves.route";
import ScheduleRoute from "./routes/schedule.route";
import PaySleepRoute from "./routes/paysleep.route";
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
app.use('/api/leave', LeaveRoute);
app.use('/api/paysleep', PaySleepRoute);
app.use('/api/schedule', ScheduleRoute);
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
