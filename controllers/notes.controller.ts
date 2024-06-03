import type { NextFunction, Request, Response } from "express";
import pc from "../utils/prisma";
import { OK } from "http-status";

const create = (req: Request, res: Response, next: NextFunction) => {
    res.send('create')
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

const delete_ = (req: Request, res: Response, next: NextFunction) => {
    res.send('delete_')
};


export {
    create, getAll, detail, edit, delete_
}