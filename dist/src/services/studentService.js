"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentData = void 0;
const axios_1 = __importDefault(require("axios"));
// Fetch student data by ID for fee processing
const getStudentData = async (studentId) => {
    try {
        const response = await axios_1.default.get(`http://localhost:3000/api/students/${studentId}`);
        return response.data;
    }
    catch (error) {
        throw new Error('Error fetching student data.');
    }
};
exports.getStudentData = getStudentData;
