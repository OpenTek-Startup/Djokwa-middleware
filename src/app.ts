import express from 'express';
import cors from 'cors';
import teacherRoute from './routes/teacher.route';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger';
import classRoute from './routes/class.route'
import courseRoute from './routes/course.route'
import assignmentRoute from './routes/assignment.route'
import gradeRoute from './routes/grade.route'
import attendanceRoute from './routes/attendance.route'
import recordRoute from './routes/studentRecord.route'
import academicsRoute from './routes/academics.route'


require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());

// main route
app.use('/api/teacher', teacherRoute);
app.use('/api', classRoute);
app.use('/api', courseRoute);
app.use('/api', assignmentRoute);
app.use('/api', gradeRoute);
app.use('/api',recordRoute);
app.use('/api', attendanceRoute);
app.use('/api', academicsRoute);


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
