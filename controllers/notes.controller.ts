import type { NextFunction, Request, Response } from "express"
import pc from "../utils/prisma"
import { CREATED, NOT_FOUND, OK } from "http-status"
import { decodeToken } from "../config"
import { CreateNoteProps, Note } from "types/note"

const create = async (req: Request<{}, {}, CreateNoteProps>, res: Response, next: NextFunction) => {
    const categories = pc.categoriess.findMany()
    const token = decodeToken(req.headers.authorization)
    const { title, content } = req.body

    try {
        const newNote: Note = await pc.note.create({
            data: {
                user_email: token?.email,
                title,
                content,
            }
        })

        res.status(CREATED).json({ message: "Note created successfully" })
    } catch (error) {
        next(error)
    }
}

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const notes = await pc.note.findMany()

        res.status(OK).json({
            status: 'success',
            data: notes
        })
    } catch (error) {
        next(error)
    }
}

const detail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params

        const note = await pc.note.findFirst({ where: { id } })

        if (!note) {
            return res.status(NOT_FOUND).json({
                data: note
            })
        }

        res.status(OK).json({
            data: note
        })
    } catch (error) {
        next(error)
    }
}

const edit = async (req: Request<{}, {}, CreateNoteProps>, res: Response, next: NextFunction) => {
    const { title, content } = req.body
}

const delete_ = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    try {
        const note = await pc.note.findFirst({ where: { id } })

        if (!note) {
            return res.status(404).json({
                status: 'error',
                message: 'Note not found'
            })
        }

        await pc.note.delete({ where: { id } })

        res.status(OK).json({
            status: 'success',
            message: 'note deleted'
        })
    } catch (error) {
        next(error)
    }
}


export {
    create, getAll, detail, edit, delete_
}