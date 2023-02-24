import { Router } from 'express'
import { createMovieController, listMoviesController } from '../controllers/movies.controllers'
import ensureDataIsValid from '../middleware/ensureDataIsValid.middleware'
import verifyNameExists from '../middleware/verifyNameExists.middleware'
import { createMovieSchema } from '../schema/createMovie.schema'

const moviesRoutes:Router = Router()

moviesRoutes.post('',ensureDataIsValid(createMovieSchema),verifyNameExists,createMovieController)
moviesRoutes.get('',listMoviesController)


export default moviesRoutes