import { Router } from "express";
import { TodoController } from "../controller/todos.js";

export const router = Router();

router.get('/', TodoController.getAll);
router.get('/:id', TodoController.getById);
router.post('/', TodoController.create);
router.delete('/', TodoController.delete);
router.patch('/', TodoController.update);