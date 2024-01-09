import { randomUUID } from 'node:crypto';
const generateId = () => {
  return randomUUID();
}

const todos = [
  {id: generateId(), content: 'comprar pan', done: true},
  {id: generateId(), content: 'comprar azucar', done: false},
  {id: generateId(), content: 'comprar leche', done: false},
]

export {
  todos
};