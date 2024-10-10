import { Router } from "express";
import { createAssignment, submitAssignment, 
    getSubmissions, deleteAssignment } from "../controllers/assignment.controller";

const router = Router();

router.post('/assignment', createAssignment);
router.post('/submit', submitAssignment);
router.get('/submissions/:Assignment_id', getSubmissions);
router.delete('/assignment/:id', deleteAssignment);


export default router;