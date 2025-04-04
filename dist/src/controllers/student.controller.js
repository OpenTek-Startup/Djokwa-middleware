"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getStudentById = exports.getStudents = exports.logoutStudent = exports.signInStudent = exports.createStudent = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
const customErrors_1 = require("../errors/customErrors");
const student_validator_1 = require("../valdators/student.validator");
const argon2_1 = __importDefault(require("argon2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const getAuthUser_middleware_1 = require("../middlewares/getAuthUser.middleware");
// Type guard to ensure user_role is an array
const isUserRoleArray = (userRole) => {
    return Array.isArray(userRole);
};
const prisma = new client_1.PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET || '';
/*
  @route    POST: /students/create
  @access   private
  @desc     Create a new student
*/
const createStudent = async (req, res) => {
    try {
        const studentData = req.body;
        console.log(studentData);
        // Validate the incoming data
        const createStudentDto = new student_validator_1.CreateStudentDto();
        Object.assign(createStudentDto, studentData); // Assign the incoming data to the DTO
        const errors = await (0, class_validator_1.validate)(createStudentDto);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Failled creating student',
                errors: errors,
            });
        }
        // Check if passwords match
        if (studentData.password !== studentData.confirmPassword) {
            return res.status(400).json({
                type: 'error',
                message: 'Passwords do not match',
            });
        }
        // Encrypt password
        const hashedPassword = await argon2_1.default.hash(studentData.password);
        // Create the user in the `User` table
        const newUser = await prisma.user.create({
            data: {
                First_Name: studentData.First_Name,
                Last_Name: studentData.Last_Name,
                Email: studentData.Email,
                Phone: studentData.Phone,
                password: hashedPassword,
                Gender: studentData.Gender,
                role: studentData.role,
                createdAt: new Date(),
                // Date_Of_Birth: new Date(studentData.Date_Of_Birth),
                // Address: studentData.Address,
                // Image: studentData.Image,
                // classId: studentData.classId,
                // Medical_Info: studentData.Medical_Info,
            },
        });
        // Now create the student entry, linking to the created user
        const newStudent = await prisma.student.create({
            data: {
                UserId: newUser.Id, // Link the student to the user
                Date_Of_Birth: new Date(studentData.DOB), // dd-mm-yyyy
                Image: studentData.Image,
                Address: studentData.address,
                classId: studentData.classId,
            },
        });
        // Assign the role to the new student
        const studentRole = await prisma.roles.findUnique({
            where: { name: 'student' },
        });
        if (studentRole) {
            await prisma.user_roles.create({
                data: {
                    user_id: newUser.Id,
                    role_id: studentRole.Id,
                },
            });
        }
        if (!newUser || !newStudent)
            throw new customErrors_1.BadRequestError('fail to create student with credentials' + studentData?.data);
        res.status(201).json({
            type: 'success',
            message: 'Student created successfully',
            data: newUser,
        });
        // Fetch user with roles and generate a token
        const userWithRoles = await (0, getAuthUser_middleware_1.getUserWithRoles)('student', studentData.Email);
        if (userWithRoles) {
            const token = (0, auth_middleware_1.generateToken)(userWithRoles);
            return res.status(201).json({
                type: 'success',
                message: 'Student account created successfully',
                token,
                data: {
                    id: newStudent.Id,
                    email: newUser.Email,
                    name: `${newUser.First_Name} ${newUser.Last_Name}`,
                },
            });
        }
        else {
            return res.status(404).json({
                type: 'error',
                message: 'User not found after account creation',
            });
        }
    }
    catch (error) {
        console.error('Error creating student:', error);
        throw new customErrors_1.BadRequestError('fail creating student 😁');
    }
};
exports.createStudent = createStudent;
/*
  @route    POST: /students/sign-in
  @access   private
  @desc     Get teacher details
*/
const signInStudent = async (req, res) => {
    try {
        const { Email, password } = req.body;
        console.log(req.body);
        // Find the student by email
        const student = await prisma.user.findUnique({
            where: { Email: Email },
            include: {
                user_role: {
                    include: {
                        roles: true,
                    },
                },
            },
        });
        if (!student) {
            return res
                .status(401)
                .json({ message: 'The email provided does not exist' });
        }
        // Verify the password
        const isPasswordValid = await argon2_1.default.verify(student.password, password);
        if (!isPasswordValid) {
            return res
                .status(401)
                .json({ message: 'The password provided is invalid' });
        }
        // Prepare roles array
        const roles = isUserRoleArray(student.user_role)
            ? student.user_role.map((ur) => ({
                id: ur.roles.Id,
                name: ur.roles.name,
            }))
            : [];
        // Create JWT token
        const token = jsonwebtoken_1.default.sign({ id: student.Id, email: student.Email, roles }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({
            type: 'success',
            message: 'Login successful',
            token,
            student: {
                ID: student.Id,
                First_Name: student.First_Name,
                Last_Name: student.Last_Name,
                Email: student.Email,
                Phone: student.Phone,
                roles,
            },
        });
    }
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error during login',
        });
    }
};
exports.signInStudent = signInStudent;
/*
  @route    DELETE: /students/logout
  @access   private
  @desc     logout a student
*/
const logoutStudent = async (req, res) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1] || '';
        const Hashtoken = await argon2_1.default.hash(token);
        if (Hashtoken) {
            // Add the token to the blacklist
            await prisma.tokenBlacklist.create({
                data: {
                    token: Hashtoken,
                    createdAt: new Date(),
                },
            });
        }
        res.status(200).json({
            type: 'success',
            message: 'Logout successful',
        });
    }
    catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error during logout',
        });
    }
};
exports.logoutStudent = logoutStudent;
/*
  @route    GET: /students
  @access   private
  @desc     Retrieve all students
*/
const getStudents = async (req, res) => {
    try {
        // Parse query parameters with defaults
        const page = parseInt(req.query.page, 10) || 1; // Default to page 1
        const limit = parseInt(req.query.limit, 10) || 10; // Default to 10 items per page
        const skip = (page - 1) * limit; // Calculate the offset
        // Retrieve students with pagination
        const students = await prisma.student.findMany({
            take: limit,
            skip: skip,
        });
        // Optionally, get the total count for pagination metadata
        const totalStudents = await prisma.student.count();
        const totalPages = Math.ceil(totalStudents / limit);
        res.status(200).json({
            type: 'success',
            message: 'Successfully retrieved students',
            data: students,
            pagination: {
                totalStudents,
                totalPages,
                currentPage: page,
                limit,
            },
        });
    }
    catch (error) {
        console.error('Error retrieving students:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error retrieving students',
            data: {},
        });
    }
};
exports.getStudents = getStudents;
/*
  @route    GET: /students/:id
  @access   private
  @desc     Retrieve a student by ID
*/
const getStudentById = async (req, res) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        return res.status(404).json({
            type: 'error',
            message: 'Invalid student ID',
        });
    }
    try {
        const student = await prisma.student.findUnique({
            where: { Id: Number(id) },
        });
        if (!student) {
            return res.status(404).json({
                type: 'error',
                message: 'Student not found',
            });
        }
        res.status(200).json({
            type: 'success',
            message: 'Successfully retrieved student',
            data: student,
        });
    }
    catch (error) {
        console.error('Error retrieving student:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error retrieving student',
            data: {},
        });
    }
};
exports.getStudentById = getStudentById;
/*
  @route    PUT: /students/update/:id
  @access   private
  @desc     Update a student's information
*/
const updateStudent = async (req, res) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        return res.status(404).json({
            type: 'error',
            message: 'Invalid student ID',
        });
    }
    try {
        const updateData = req.body;
        const updateStudentDto = new student_validator_1.UpdateStudentDto();
        Object.assign(updateStudentDto, updateData);
        const errors = await (0, class_validator_1.validate)(updateStudentDto);
        if (errors.length > 0) {
            return res.status(400).json({
                type: 'error',
                message: 'Validation failed',
                errors: errors,
            });
        }
        const updatedStudent = await prisma.student.update({
            where: { Id: Number(id) },
            data: {
                // First_Name: updateData.First_Name,
                // Last_Name: updateData.Last_Name,
                Date_Of_Birth: new Date(updateData.Date_Of_Birth),
                // Gender: updateData.Gender,
                Address: updateData.Address,
                // Phone: updateData.Phone,
                Medical_Info: updateData.Medical_Info,
            },
        });
        res.status(200).json({
            type: 'success',
            message: `Student with ID ${id} updated successfully`,
            data: updatedStudent,
        });
    }
    catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error updating student',
            data: {},
        });
    }
};
exports.updateStudent = updateStudent;
/*
  @route    DELETE: /students/delete/:id
  @access   private
  @desc     Delete a student
*/
const deleteStudent = async (req, res) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        return res.status(404).json({
            type: 'error',
            message: 'Invalid student ID',
        });
    }
    try {
        await prisma.student.delete({
            where: { Id: Number(id) },
        });
        res.status(200).json({
            type: 'success',
            message: `Student with ID ${id} deleted successfully`,
            data: {},
        });
    }
    catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({
            type: 'error',
            message: 'Error deleting student',
            data: {},
        });
    }
};
exports.deleteStudent = deleteStudent;
