import { randomUUID } from 'node:crypto';
const generateId = () => {
  return randomUUID();
}

let todos = [
  {id: generateId(), content: 'comprar pan', done: true},
  {id: generateId(), content: 'comprar azucar', done: false},
  {id: generateId(), content: 'comprar leche', done: false},
]

export {
  todos,
  generateId,
}