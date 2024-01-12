import crypto from 'node:crypto'
import { todos } from "../todos.js";


export class TodoModel {
  static async getAll() {
    return todos;
  }

  static async getById({ id }) {
    const result = todos.find(todo => todo.id === id)

    if (!result) {
      return {error: {message: 'not found 404'}}
    }

    return result;
  }

  static async create(input) {
      const newTodo = {
        id: crypto.randomUUID(),
        ...input,
      }

      todos.push(newTodo);
      return newTodo;
  }

  static async delete({ id }) {
    return todos.filter(todo => todo.id !== id);
  }
}