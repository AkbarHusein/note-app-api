import { Router } from 'express'
import validator, { auth } from '../../middlewares/validator'
import { loginHandler, registerHandler } from '../../controllers'

const authRouter = Router()

authRouter.post('/register', auth.registValidation, validator, registerHandler)
authRouter.post('/login', auth.loginValidation, validator, loginHandler)

export default authRouter