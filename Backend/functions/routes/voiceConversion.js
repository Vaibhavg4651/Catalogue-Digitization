import { Router } from "express";
import { addDoubt } from "../controllers/doubtController";
import { isQuestion } from '../middleware/isQuestion';


const router = Router();

router.post('/',isQuestion, addDoubt);

export const routes = router;