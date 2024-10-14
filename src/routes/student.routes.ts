import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import {
  createStudent,
  deleteStudent,
  getStudent,
  updateStudent,
} from '../controllers/student.controller';

const router = Router();

router.post('/create', createStudent);
router.put('/update/:id', authMiddleware, updateStudent);
router.delete('/delete/:id', authMiddleware, deleteStudent);
router.get('/all-students', getStudent);

export default router;
