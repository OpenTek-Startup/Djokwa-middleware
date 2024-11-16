import axios from 'axios';

// Fetch student data by ID for fee processing
export const getStudentData = async (studentId: number) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/students/${studentId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching student data.");
  }
};
