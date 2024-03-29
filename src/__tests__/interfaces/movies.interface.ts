import { DeepPartial, Repository } from 'typeorm'
import { z } from 'zod'
import { Movie } from '../../entities'
import { createMovieSchema } from '../../schema/createMovie.schema'

type iMovieCreate = z.infer<typeof createMovieSchema>
type iMovieUpdate = DeepPartial<Movie>
type iMovieRepo = Repository<Movie>

export { iMovieCreate, iMovieUpdate, iMovieRepo }