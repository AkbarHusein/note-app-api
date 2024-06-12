import { Router } from "express";
import hariSayaRouter from "./hari-saya";

const notesRouter = Router()

notesRouter.use('/hari-saya', hariSayaRouter)

export default notesRouter