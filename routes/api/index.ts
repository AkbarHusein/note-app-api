import { Router } from "express";
import notesRouter from "./notes";
import categoriesRouter from "./categories";

const router = Router()

router.use('/notes', notesRouter)
router.use('/categories', categoriesRouter)

export default router