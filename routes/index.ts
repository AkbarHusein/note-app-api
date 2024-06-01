import { Router } from 'express'
import validator, { auth } from '../middlewares/validator'
import { loginHandler, registerHandler } from '../controllers'

const router = Router()

router.post('/register', auth.registValidation, validator, registerHandler)
router.post('/login', auth.loginValidation, validator, loginHandler)

export default router