import { Router } from 'express';
import {
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/teacher.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', getTeacher);
router.post('/', createTeacher);
router.put('/:id', authMiddleware('Aubin'), updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;
