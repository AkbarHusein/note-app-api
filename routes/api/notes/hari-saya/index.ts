import { Router } from "express"
import validator, { note } from "../../../../middlewares/validator"
import { notesHandler } from "../../../../controllers"

const hariSayaRouter = Router()

hariSayaRouter.post('/', note.createNoteValidation, validator, notesHandler.create)
hariSayaRouter.get('/', notesHandler.getAll)
hariSayaRouter.get('/:id', notesHandler.detail)
hariSayaRouter.put('/:id', notesHandler.edit)
hariSayaRouter.delete('/:id', notesHandler.delete_)


export default hariSayaRouter