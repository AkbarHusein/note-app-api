import { Router, Request, Response, NextFunction } from 'express'

const router = Router()

router.get('/login', (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send('login')
    } catch (error) {
        next(error)
    }
})

export default router