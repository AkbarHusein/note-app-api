import { Router } from "express";
import { categoriesHandler } from "../../../controllers";

const categoriesRouter = Router()

categoriesRouter.get('/', categoriesHandler)
categoriesRouter.get('/:id', categoriesHandler)
categoriesRouter.post('/', categoriesHandler)
categoriesRouter.put('/:id', categoriesHandler)
categoriesRouter.delete('/:id', categoriesHandler)


export default categoriesRouter