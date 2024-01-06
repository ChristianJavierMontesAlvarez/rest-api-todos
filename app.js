const express = require('express');
const crypto = require('node:crypto');
const cors = require('cors');

const app = express();
let { todos } = require('./todos.js');
const { validateTodo } = require('./schemas/validateTodo.js');

app.use(cors({
  methods: ['GET', 'POST', 'DELETE'],
}));

app.use(express.json()); //middleware for get => req.body parsed

//METHODS TYPE GET:

//GET ALL
app.get('/', (req, res) => {
  res.send('<h1>Todos Back-End</h1>');
})

app.get('/todos', (req, res) => {
  res.status(201).json(todos);
})

//GET ONE
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;

  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    res.status(404).send('<h1>not found 404</h1>');
  }

  res.json(todo);
})

//METHODS TYPE POST:

//POST A NEW TODO
app.post('/todos', (req, res) => {
  const result = validateTodo(req.body);

  if (result.error) {
    res.status(422).json({ errorMessage: JSON.parse(result.error.message) });
  }

  const data = {
    id: crypto.randomUUID(),
    timestamp: new Date().toLocaleString(),
    ...result,
  }

  todos = todos.concat(data); //CON DB 
  res.status(201).json(data);
})

//METHODS TYPE DELETE:

//DELETE A TODO
app.delete('/todos', (req, res) => {
  const result = validateTodo(req.body); //validation required like security complementation and abstraction (ZOD)

  if (result.error) {
    res.status(422).json({ errorMessage: JSON.parse(result.error.message) });
  }

  //HERE CONNECTION TO DB => PENDING

  todos = todos.filter(todo => todo.id !== data.id);
  res.status(202).json(todos);
})

//404 IF THE CONTENT OR URL OF THE REQUEST IS NOT CORRECT IN THE DNS(DomainNameSystem)
app.use((req, res) => {
  res.status(404).send('<h1>section not found 404</h1>');
})

//PORT LISTENING BACK-END APP
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
})
