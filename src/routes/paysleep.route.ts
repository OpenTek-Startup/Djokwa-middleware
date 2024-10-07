import { Router } from "express";
import {
    createPaySleep,
    getAllPaySleep,
    getPaySleep,
    updatePaySleep,
    updatePaySleepStatus,
    deletePaySleep,
} from "../controllers/paysleep.controller"

 const router = Router();

router.get('/', getAllPaySleep);
router.post('/', createPaySleep);
router.get('/:id', getPaySleep);
router.put('/:id', updatePaySleep);
router.put('/:id/status', updatePaySleepStatus);
router.delete('/:id', deletePaySleep);

export default router;