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
const PORT = process.env.PORT || 3000;

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


async function startServer() {
  try {
      // Test the database connection
      await prisma.$connect();
      console.log('✅ Successfully connected to the database');
      
      // Start your server here
      // Example server start (using Express or another framework)
      app.listen(PORT, () => {
          console.log(`Server is running on http://localhost:${PORT}`);
      });
  } catch (error) {
      console.error('❌ Error connecting to the database:', error);
      process.exit(1); // Exit the process if the connection fails
  } finally {
      // Disconnect when the app is closed
      await prisma.$disconnect();
  }
}

// Call startServer to initiate connection and server
startServer();
// Start server


module.exports = app;
