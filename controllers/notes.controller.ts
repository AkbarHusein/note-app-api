import type { NextFunction, Request, Response } from "express";
import pc from "../utils/prisma";
import { OK } from "http-status";
import { decodeToken } from "../config";

const create = (req: Request, res: Response, next: NextFunction) => {
    const categories = pc.categoriess.findMany()
    const token = decodeToken(req.headers.authorization)


};

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
};

const detail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params

        const note = await pc.note.findFirst({ where: { id } }) || []

        res.status(OK).json({
            status: 'success',
            data: note
        })
    } catch (error) {
        next(error)
    }
};

const edit = (req: Request, res: Response, next: NextFunction) => {
    res.send('edit')
};

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
};


export {
    create, getAll, detail, edit, delete_
}