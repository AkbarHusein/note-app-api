import type { NextFunction, Request, Response } from "express";

const notesHandler = (req: Request, res: Response, next: NextFunction) => {
    res.send('ok')
};

export default notesHandler