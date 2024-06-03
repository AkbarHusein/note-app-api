import { Router } from 'express'
import auth from './auth'
import tokenValidation from '../middlewares/token-validation'

const router = Router()

router.use('/auth', auth)
router.use('/api', tokenValidation, (req, res, next) => {
    console.log('api')
    res.send('ok')
    next()
})

export default router