import {Request, Response} from 'express'
import createMoviesService from '../services/movies/createMovie.service'
import listMoviesServices from '../services/movies/listMovies.service'

const createMovieController = async(req:Request, res:Response):Promise<Response> => {
    const movieData = await createMoviesService(req.body)
    return res.status(201).json(movieData)
}

const listMoviesController = async(req:Request, res:Response):Promise<Response> => {
    const movies = await listMoviesServices(req.query)
    return res.status(200).json(movies)
}
export {
    createMovieController,
    listMoviesController
}