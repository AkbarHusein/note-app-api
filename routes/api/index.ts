import { Router } from "express";
import notesRouter from "./notes";
import categoriesRouter from "./categories";

const apiRouter = Router()

apiRouter.use('/notes', notesRouter)
apiRouter.use('/categories', categoriesRouter)

export default apiRouter