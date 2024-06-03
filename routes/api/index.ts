import { Router } from "express";
import notesHandler from "../../controllers/api/notes.controller";

const router = Router()

router.get('/notes', notesHandler)

export default router