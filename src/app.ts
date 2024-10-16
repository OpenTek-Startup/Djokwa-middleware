import express from 'express';
import cors from 'cors';
import teacherRoute from './routes/teacher.route';
import humanResourcesRoute from './routes/humanResources.route';
import blockNoteRoute from './routes/blocknote.route';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger';
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
app.use('/api/hr', humanResourcesRoute);
app.use('/api/student', studentRoute);
app.use('/api/academics', academicsRoute);
app.use('/api/blocknotes', blockNoteRoute);
app.use('/api/admin', incidentRoute, schoolEventRoute);

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
