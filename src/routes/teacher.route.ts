import { Router } from 'express';
import {
  signInTeacher,
  signUpTeacher,
  updateTeacher,
  deleteTeacher,
  logoutTeacher,
  getTeachers,
} from '../controllers/teacher.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/sign-in', signInTeacher);
router.post('/sign-up', signUpTeacher);
router.put('/update', authMiddleware, updateTeacher);
router.delete('/delete', authMiddleware, deleteTeacher);
router.post('/logout', authMiddleware, logoutTeacher);
router.get('/all-teachers', getTeachers);

export default router;
