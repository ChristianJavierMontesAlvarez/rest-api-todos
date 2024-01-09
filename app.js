import express, { json } from 'express';
import { corsMiddleware } from './middleware/corsMiddleware.js';
import { router } from './routes/todos.js'

//Como no podemos importar archivos json nativamente por ESModules las siguientes son opciones para lograrlo
//como leer un json en ESModules:
// import fs from 'node:fs';
// const todos = JSON.parse(fs.readFileSync('./todos.js', 'utf-8'));

//como leer con nuestro propio require creado:
/* import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const todos = require('./todos.js'); */
const app = express();
app.use(json()); //middleware for get => req.body parsed
app.use(corsMiddleware());

app.get('/', (req, res) => {
  res.send('<h1>Todos API</h1>');
})

app.use('/todos', router);

app.use((req, res) => {
  res.status(404).send('<h1>Page not found :(</h1>');
})

//PORT LISTENING BACK-END APP
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
})