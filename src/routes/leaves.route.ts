import { Router } from "express";
import {
    createLeave,
    getAllLeaves,
    getLeaveById,
    updateLeave,
    updateLeaveStatus,
    deleteLeave,
} from "../controllers/leaves.controller" 

    const router = Router();
    
    router.get('/', getAllLeaves);
    router.post('/', createLeave);
    router.get('/:id', getLeaveById);
    router.put('/:id', updateLeave);
    router.put('/:id/status', updateLeaveStatus);
    router.delete('/:id', deleteLeave);

    export default router;
