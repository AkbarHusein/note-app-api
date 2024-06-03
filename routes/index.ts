import { Router } from 'express'
import tokenValidation from '../middlewares/token-validation'
import authRouter from './auth'
import apiRouter from './api'

const router = Router()

router.use('/auth', authRouter)
router.use('/api', tokenValidation, apiRouter)

export default router