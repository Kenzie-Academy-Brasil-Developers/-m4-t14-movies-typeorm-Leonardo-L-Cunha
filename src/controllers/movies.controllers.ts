import {Request, Response} from 'express'
import createMoviesService from '../services/movies/createMovies.service'
import deleteMovieService from '../services/movies/deleteMovies.service'
import listMoviesServices from '../services/movies/listMovies.service'
import updateMovieService from '../services/movies/updateMovie.service'

const createMovieController = async(req:Request, res:Response):Promise<Response> => {
    const movieData = await createMoviesService(req.body)
    return res.status(201).json(movieData)
}

const listMoviesController = async(req:Request, res:Response):Promise<Response> => {
    const movies = await listMoviesServices(req.query)
    return res.status(200).json(movies)
}
const updateMoviesController = async(req:Request, res:Response):Promise<Response> => {
    const updateMovie = await updateMovieService(req.body,parseInt(req.params.id))

    return res.status(200).json(updateMovie)
}
const deleteMoviesController = async(req:Request, res:Response):Promise<Response> => {
    await deleteMovieService(parseInt(req.params.id))
    return res.status(204).send()
}
export {
    createMovieController,
    listMoviesController,
    deleteMoviesController,
    updateMoviesController
}