import type { NextFunction, Request, Response } from "express";

const create = (req: Request, res: Response, next: NextFunction) => {
    res.send('create')
};

const getAll = (req: Request, res: Response, next: NextFunction) => {
    res.send('get all')
};

const detail = (req: Request, res: Response, next: NextFunction) => {
    res.send('detail')
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