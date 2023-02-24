import { DeepPartial } from 'typeorm'
import { z } from 'zod'
import { createMovieSchema,returnMovieSchema,returnAllMovies } from '../schema/createMovie.schema'

type MovieRequest = z.infer<typeof createMovieSchema>
type MovieReturn = z.infer<typeof returnMovieSchema>
type MovieReturnAll = z.infer<typeof returnAllMovies>
/* type MovieReturnAll = DeepPartial<typeof returnAllMovies> */

interface IPagination {
    prevPage: string | null,
    nextPage:  string | null,
    count: number,
    data: MovieReturnAll
}

export {
    MovieRequest,
    MovieReturn,
    MovieReturnAll,
    IPagination	
}