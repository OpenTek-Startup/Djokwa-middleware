import { Router } from 'express';
import {
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/teacher.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', createTeacher);
router.post('/', getTeacher);
router.put('/:id', authMiddleware('Aubin'), updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;
