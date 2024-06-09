import { Router } from "express";
import { notesHandler } from "../../../controllers";
import validator, { note } from '../../../middlewares/validator/index';

const notesRouter = Router()

notesRouter.post('/', note.createNoteValidation, validator, notesHandler.create)
notesRouter.get('/', notesHandler.getAll)
notesRouter.get('/:id', notesHandler.detail)
notesRouter.put('/:id', notesHandler.edit)
notesRouter.delete('/:id', notesHandler.delete_)


export default notesRouter