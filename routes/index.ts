import { Router } from 'express'
import auth from './auth'

const router = Router()

router.use('/auth', auth)
router.use('/api', (req, res, next) => {
    console.log('api')
    res.send('ok')
    next()
})

export default router