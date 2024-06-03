import { Router } from 'express'
import tokenValidation from '../middlewares/token-validation'
import notesRouter from './api/notes'
import authRouter from './auth'

const router = Router()

router.use('/auth', authRouter)
router.use('/api', tokenValidation, notesRouter)

export default router