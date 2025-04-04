"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const teacher_route_1 = __importDefault(require("./routes/teacher.route"));
const humanResources_route_1 = __importDefault(require("./routes/humanResources.route"));
const blocknote_route_1 = __importDefault(require("./routes/blocknote.route"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("../swagger"));
// Financial Module Routes
const financial_route_1 = __importDefault(require("./routes/financial.route"));
const client_1 = require("@prisma/client");
const student_route_1 = __importDefault(require("./routes/student.route"));
const academics_route_1 = __importDefault(require("./routes/academics.route"));
const incident_route_1 = __importDefault(require("./routes/incident.route"));
const schoolEvent_route_1 = __importDefault(require("./routes/schoolEvent.route"));
const parents_route_1 = __importDefault(require("./routes/parents.route"));
const errorHandlerMiddleware_1 = __importDefault(require("./middlewares/errorHandlerMiddleware"));
const notification_route_1 = __importDefault(require("./routes/notification.route"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
exports.prisma = new client_1.PrismaClient();
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
    'http://127.0.0.1:3000',
];
const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow cookies to be sent
};
// Health check endpoint
app.use('/', (req, res) => {
    res.status(200).send('Hello DJOKWA, API is running');
});
// Middleware
app.use(express_1.default.json()); // Parse JSON bodies
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
// main route
app.use('/api/teacher', teacher_route_1.default);
app.use('/api/hr', humanResources_route_1.default);
app.use('/api/student', student_route_1.default);
app.use('/api/academics', academics_route_1.default);
app.use('/api/blocknotes', blocknote_route_1.default);
app.use('/api/incident', incident_route_1.default);
app.use('/api/schoolEvents', schoolEvent_route_1.default);
app.use('/api/notification', notification_route_1.default);
app.use('/api/financial', financial_route_1.default);
app.use('/api/parents', parents_route_1.default);
// Set up Swagger UI
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use('*', async (_req, res) => {
    res.status(404).send('CANNOT FOUND THIS ROUTE YOU ARE LOOKING FOR 😒');
});
app.use(errorHandlerMiddleware_1.default);
async function startServer() {
    try {
        // Test the database connection
        await exports.prisma.$connect();
        console.log('✅ Successfully connected to the database');
        // Start your server here
        // Example server start (using Express or another framework)
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('❌ Error connecting to the database:', error);
        process.exit(1); // Exit the process if the connection fails
    }
    finally {
        // Disconnect when the app is closed
        await exports.prisma.$disconnect();
    }
}
startServer();
// Start server
module.exports = app;
