import { Router } from 'express';
import {
  getAllBlockNotes,
  getBlockNoteById,
  createBlockNote,
  updateBlockNote,
  deleteBlockNote,
} from '../controllers/blocknotesController';

const router = Router();

router.get('/', getAllBlockNotes);
router.get('/:id', getBlockNoteById);
router.post('/', createBlockNote);
router.put('/:id', updateBlockNote);
router.delete('/:id', deleteBlockNote);

export default router;
