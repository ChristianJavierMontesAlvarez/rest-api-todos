import cors from 'cors'

export const corsMiddleware = () => cors({
  methods: ['GET', 'POST', 'DELETE', 'PATCH'],
})