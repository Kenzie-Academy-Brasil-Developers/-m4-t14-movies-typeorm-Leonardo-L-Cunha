import {Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../error'


const verifyMovieExists = async (req:Request, res:Response, next:NextFunction):Promise<Response | void> => {

    const id = parseInt(req.params.id)
    
    const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie)

    const movie = await movieRepository.findOne({
        where: {
            id: id
        }
    })
    
    if(!movie){
       throw new AppError('Movie not found',404)
    }

    return next()
}
export default verifyMovieExists