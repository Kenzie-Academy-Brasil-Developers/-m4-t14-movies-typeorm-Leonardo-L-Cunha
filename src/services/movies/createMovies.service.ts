import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Movie } from '../../entities'
import { MovieRequest, MovieReturn } from '../../interface/movies.interface'
import { returnMovieSchema } from '../../schema/createMovie.schema'

const createMoviesService = async(movieData:MovieRequest):Promise<MovieReturn> => {
    const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie)

    const movie:Movie = movieRepository.create(movieData)
    
    
    await movieRepository.save(movie)

    
    const newMovie = returnMovieSchema.parse(movie)

    return newMovie
}

export default createMoviesService