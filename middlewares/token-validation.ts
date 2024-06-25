import { NextFunction, Request, Response } from 'express'
import { verify, VerifyErrors } from 'jsonwebtoken'
import { FORBIDDEN, INTERNAL_SERVER_ERROR, UNAUTHORIZED } from 'http-status'
import { extractToken } from '../config'

const MESSAGES = {
    TOKEN_NOT_FOUND: 'Token not found',
    INVALID_TOKEN: 'Token invalid',
    MISSING_SECRET: 'JWT secret is not defined',
}

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
    const token = extractToken(req.headers.authorization)
    if (!token) {
        return res.status(UNAUTHORIZED).json({ message: MESSAGES.TOKEN_NOT_FOUND })
    }

    const secret = process.env.JWT_SECRET
    if (!secret) {
        console.error(MESSAGES.MISSING_SECRET)
        return res.status(INTERNAL_SERVER_ERROR).json({ message: MESSAGES.MISSING_SECRET })
    }

    verify(token, secret, (error: VerifyErrors | null) => {
        if (error) {
            console.error('Token verification error:', error)
            return res.status(FORBIDDEN).json({ message: MESSAGES.INVALID_TOKEN })
        }
        next()
    })
}

export default tokenValidation
