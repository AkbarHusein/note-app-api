import { check } from "express-validator"

const createNoteValidation = [
    check('title').exists().isLength({ min: 10, max: 30 }).withMessage("Title must be between 10 and 30 characters"),
    check('content').exists().isLength({ min: 10, max: 500 }).withMessage("Content must be between 10 and 500 characters"),
]


export { createNoteValidation }