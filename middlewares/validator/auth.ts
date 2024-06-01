import { check } from "express-validator"

const registValidation = [
    check('username').exists().isLength({ min: 3, max: 20 }).withMessage('Name must be between 3 and 20 characters'),
    check('email').exists().isEmail().withMessage('Email is not valid'),
    check('password').exists().isLength({ min: 6, max: 20 }).withMessage('Password must be between 6 and 20 characters'),
    check('confirm_password').custom(
        (value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Password confirmation does not match password')
            }
            return true
        }
    )
]

const loginValidation = [
    check('email').exists().isEmail().withMessage('Email is not valid'),
    check('password').exists().isLength({ min: 6, max: 20 }).withMessage('Password must be between 6 and 20 characters')
]

export { registValidation, loginValidation }