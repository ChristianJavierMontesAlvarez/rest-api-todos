import { randomUUID } from 'node:crypto';

export const generateId = () => {
  return randomUUID();
}

export let todos = [
  {id: generateId(), content: 'comprar pan', done: true},
  {id: generateId(), content: 'comprar azucar', done: false},
  {id: generateId(), content: 'comprar leche', done: false},
]