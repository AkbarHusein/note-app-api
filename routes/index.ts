import { Router } from 'express'
import auth from './auth'
import tokenValidation from '../middlewares/token-validation'
import notesHandler from '../controllers/notes.controller'

const router = Router()

router.use('/auth', auth)
router.use('/api', tokenValidation, notesHandler)

export default router