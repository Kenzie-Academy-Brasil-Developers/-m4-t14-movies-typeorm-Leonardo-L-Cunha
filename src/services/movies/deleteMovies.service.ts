import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Movie } from "../../entities"

const deleteMovieService = async(idMovie:number):Promise<void> => {
    const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie)

    const getMovie = await movieRepository.findOne({where: {id: idMovie}})

    

    await movieRepository.remove(getMovie!)

}

export default deleteMovieService