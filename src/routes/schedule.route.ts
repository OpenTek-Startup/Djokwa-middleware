import { Router } from "express";
import {
    createSchedule,
    getAllSchedules,
    getScheduleById,
    updateSchedule,
    deleteSchedule,
} from "../controllers/schedule.controller";

const router = Router();

router.get('/', getAllSchedules);
router.post('/', createSchedule);
router.get('/:id', getScheduleById);
router.put('/:id', updateSchedule);
router.delete('/:id', deleteSchedule);
export default router;