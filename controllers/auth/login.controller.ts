import type { Request, Response, NextFunction } from "express"

const loginhandler = (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body
}

export default loginhandler