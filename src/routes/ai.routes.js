import express from "express";
import { generateInterviewQuestion } from "../controllers/ai.controller.js";
import {evaluateCandidateAnswer,} from "../controllers/ai.controller.js";
const router = express.Router();

router.post("/generate-question", generateInterviewQuestion);
router.post("/evaluate-answer",evaluateCandidateAnswer)

export default router;