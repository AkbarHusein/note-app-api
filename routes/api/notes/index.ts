import { Router } from "express";
import { notesHandler } from "../../../controllers";

const notesRouter = Router()

notesRouter.get('/', notesHandler)
notesRouter.get('/:id', notesHandler)
notesRouter.post('/', notesHandler)
notesRouter.put('/:id', notesHandler)
notesRouter.delete('/:id', notesHandler)


export default notesRouter