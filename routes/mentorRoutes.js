import express from "express";
import {
    createMentor,
    getMentorAll,
    getMentorAssigned,
    getStudentListMent
} from "../controllers/mentorController.js"

const router = express.Router();

router.post('/create', createMentor);
router.get('/mentors', getMentorAll);
router.put('/assign/:id', getMentorAssigned);
router.get('/ment-student/:id', getStudentListMent);

export default router;