import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities';
import { MovieRequest, UpdateMovie } from '../../interface/movies.interface';
import { returnMovieSchema } from '../../schema/createMovie.schema';

const updateMovieService = async(dataMovie:UpdateMovie | MovieRequest,idMovie:number):Promise<MovieRequest> => {
    const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie)

    const findMovie = await movieRepository.findOneBy({id: idMovie})

  

    const movie =  movieRepository.create({
        ...findMovie,
        ...dataMovie
    })

    await movieRepository.save(movie)

    const  updateMovie = returnMovieSchema.parse(movie)

    return updateMovie
}

export default updateMovieService