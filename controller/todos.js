import { TodoModel } from "../models/todos.js";
import { validateTodo } from "../schemas/validateTodo.js";

export class TodoController {
  static async getAll(req, res) {
    const data = await TodoModel.getAll();
    res.status(200).json(data);
  }

  static async getById(req, res) {
    const id = req.params.id;
    const result = await TodoModel.getById({ id });

    if (result.error) {
      res.status(404).send(`<h1>${result.error.message}</h1>`);
    }

    res.json(result);
  }

  static async create(req, res) {
    const result = validateTodo(req.body);

    console.log(result);

    if (!result.success) {
      res.status(422).json({ errorMessage: result.error.message});
    }

    const newTodo = await TodoModel.create(result);
    //EXAMPLE WITHOUT DB, AFTER WITH DB
    res.status(201).json(newTodo);
  }

  static async delete(req, res) {
    const id = req.body.id;
    const result = await TodoModel.delete({ id });  //HERE CONNECTION TO DB => PENDING
    res.status(202).json(result);
  }

  static async update(req, res) {
    const id = req.body.id;
    const result = await TodoModel.update({ id });
    res.status(202).json(result);
  }
}