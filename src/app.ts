import express from 'express';
import cors from 'cors';
import teacherRoute from './routes/teacher.route';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger';
// Financial Module Routes
import financialRoutes from './routes/financial.route'

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());

// Financial Module Routes
app.use('/api/financial', financialRoutes);
// main route
app.use('/api/teacher', teacherRoute);

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
