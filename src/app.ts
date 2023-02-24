import 'express-async-errors'
import express, { Application } from 'express'
import { handleErros } from './error'
import moviesRoutes from './routers/movies'


const app: Application = express()
app.use(express.json())

app.use('/movies',moviesRoutes)

app.use(handleErros)

export default app