import type { Request, Response, NextFunction } from "express"

const loginHandler = (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body

    try {
        throw new Error('tes')
    } catch (error) {
        next(error)
    }
}

export default loginHandler