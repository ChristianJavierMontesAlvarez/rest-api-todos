import crypto from 'node:crypto'
import { todosData } from "../todosData.js";

let todos = [ ...todosData ]

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
      const { data } = input;

      const newTodo = {
        id: crypto.randomUUID(),
        ...data,
      }

      todos.push(newTodo);
      return newTodo;
  }

  static async delete({ id }) {
    todos = todos.filter(todo => todo.id !== id);
    return todos;
  }
}