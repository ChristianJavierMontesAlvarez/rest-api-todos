const z = require('zod');

const todoSchema = z.object({
  content: z.string({
    invalid_type_error: 'Todo content must be a string',
    required_error: 'Todo content is required',
  }),
  done: z.boolean({
    invalid_type_error: 'Todo done must be a bool',
    required_error: 'Todo done is required',
  })
})

const validateTodo = (obj) => {
  return todoSchema.safeParse(obj);
}

const validatePartialTodo = (obj) => {
  return todoSchema.partial().safeParse(obj);
}

module.exports = {
  validateTodo,
  validatePartialTodo,
}