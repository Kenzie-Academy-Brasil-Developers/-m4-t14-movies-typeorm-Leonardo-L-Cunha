import {Request, Response, NextFunction} from 'express'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../error'


const verifyNameExists = async (req:Request, res:Response, next:NextFunction):Promise<Response | void> => {
    const { name } = req.body
    const movieRepository  = AppDataSource.getRepository(Movie)

    const findName = await movieRepository.find()

    const verifyName = findName.find((movie) => {
        return movie.name == name
    })

    if(verifyName){
        throw new AppError('Movie already exists.',409)
    }
   
    return next()
}

export default verifyNameExists