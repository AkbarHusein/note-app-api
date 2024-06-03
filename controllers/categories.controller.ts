import type { NextFunction, Request, Response } from "express";

const categoriesHandler = (req: Request, res: Response, next: NextFunction) => {
    res.send('ok')
};

export default categoriesHandler