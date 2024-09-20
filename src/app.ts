import express from 'express';
import cors from 'cors';
import teacherRoute from './routes/teacher.route';

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());

// main route
app.use('/api/teacher', teacherRoute);

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello DJOKWA, API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
