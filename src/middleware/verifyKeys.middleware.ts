import {Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Movie } from '../entities'
import { AppError } from '../error'


const verifyKeys = async (req:Request, res:Response, next:NextFunction):Promise<Response | void> => {
    const {name , description, duration , price} = req.body

    if(!name && !description && !duration && !price){
        throw new AppError('At least one of these data must be passed :["name","description","duration","price"]',400)
    }

    return next()
}

export default verifyKeys