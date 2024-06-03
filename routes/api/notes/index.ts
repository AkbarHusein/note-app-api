import { Router } from "express";
import { notesHandler } from "../../../controllers";

const notesRouter = Router()

notesRouter.post('/', notesHandler.create)
notesRouter.get('/', notesHandler.getAll)
notesRouter.get('/:id', notesHandler.detail)
notesRouter.put('/:id', notesHandler.edit)
notesRouter.delete('/:id', notesHandler.delete_)


export default notesRouter