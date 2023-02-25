import { Router } from 'express'
import { createMovieController, deleteMoviesController, listMoviesController, updateMoviesController } from '../controllers/movies.controllers'
import { createMovieSchema, updateMovieSchema } from '../schema/createMovie.schema'
import ensureDataIsValid from '../middleware/ensureDataIsValid.middleware'
import verifyNameExists from '../middleware/verifyNameExists.middleware'
import verifyMovieExists from '../middleware/verifiMovieExists.middleware'
import verifyKeys from '../middleware/verifyKeys.middleware'


const moviesRoutes:Router = Router()

moviesRoutes.get('',listMoviesController)
moviesRoutes.post('',ensureDataIsValid(createMovieSchema),verifyNameExists,createMovieController)
moviesRoutes.patch('/:id',verifyMovieExists,verifyNameExists,verifyKeys,ensureDataIsValid(updateMovieSchema),updateMoviesController)
moviesRoutes.delete('/:id',verifyMovieExists,deleteMoviesController)


export default moviesRoutes