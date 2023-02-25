import { z } from 'zod'


const createMovieSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().nullish(),
    duration: z.number().gte(1,{
        message: 'Number must be greater than 0',
    }),
    price: z.number().int()
})

const returnMovieSchema = createMovieSchema.extend({
    id: z.number(),
   
})
const returnAllMovies = z.array(returnMovieSchema)

const updateMovieSchema = createMovieSchema.partial()
export {
    createMovieSchema,
    returnMovieSchema,
    returnAllMovies,
    updateMovieSchema
}