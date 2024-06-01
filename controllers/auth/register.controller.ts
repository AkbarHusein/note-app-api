import type { Request, Response, NextFunction } from "express";
import pc from "../../utils/prisma";
import status from 'http-status';
import { hashSync } from 'bcryptjs'

const registerhandler = async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;

    try {
        const emailIsExists = await pc.user.findFirst({ where: { email } })

        if (emailIsExists) {
            return res.status(status.BAD_REQUEST).json({
                message: 'Email already exists'
            })
        }

        const hashPassword = hashSync(password, 10)
        const user = await pc.user.create({
            data: { username, email, password: hashPassword, },
        });

        if (user) {
            res.status(status.CREATED).json({
                message: "User created successfully",
            });
        }

    } catch (error) {
        next(error)
    }
};

export default registerhandler