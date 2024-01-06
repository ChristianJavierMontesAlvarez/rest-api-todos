const crypto = require('node:crypto');
const generateId = () => {
  return crypto.randomUUID();
}

const todos = [
  {id: generateId(), content: 'comprar pan', done: true},
  {id: generateId(), content: 'comprar azucar', done: false},
  {id: generateId(), content: 'comprar leche', done: false},
]

module.exports = {
  todos
}