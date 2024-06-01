import { Router } from 'express'
import validator, { auth } from '../middlewares/validator'
import { loginhandler, registerhandler } from '../controllers'

const router = Router()

router.post('/register', auth.registValidation, validator, registerhandler)
router.post('/login', auth.loginValidation, validator, loginhandler)

export default router