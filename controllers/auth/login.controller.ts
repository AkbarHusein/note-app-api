import type { Request, Response, NextFunction } from "express"
import pc from "../../utils/prisma"
import status from 'http-status';
import { compareSync } from 'bcryptjs'
import { signing } from "../../config";

const loginHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    try {
        const user = await pc.user.findFirst({ where: { email } })

        if (!user) {
            return res.status(status.NOT_FOUND).json({ message: "User not found" })
        }

        const matchPassword = compareSync(password, user.password)

        if (!matchPassword) {
            return res.status(status.UNAUTHORIZED).json({ message: "Password is incorrect" })
        }
        const token = signing({ username: user.username, email })

        res.status(status.OK).json({
            message: "Login successfully",
            username: user.username,
            email,
            token
        })
    } catch (error) {
        next(error)
    }
}

export default loginHandler