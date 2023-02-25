import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Movie } from "../../entities"
import { IPagination} from "../../interface/movies.interface"
import { returnAllMovies } from "../../schema/createMovie.schema"

const listMoviesServices = async (query:any):Promise<IPagination> => {
    let page = query.page 
    let perPage = query.perPage || 5 
    let sort = query.sort || null
    let order = query.order || 'ASC'

    
    if(perPage > 5 || perPage < 1){
        perPage = 5
    }

    if (page === 4 && !perPage) {
        perPage = 5
    }
    
    if(isNaN(page) || page < 1){
        page = 1
    } else {
        page = parseInt(page)
    }

   if(isNaN(perPage) && !page){
        page = 1
        perPage = 5
    }
    if(isNaN(perPage) || perPage > 5 || perPage < 1){
        perPage = 5
    }
   
    const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie)

    const count = await  movieRepository.count()

    const totalPage = Math.ceil(count / perPage)

    let orderObj: any = {}
    if (order === 'desc' && !sort) {
        orderObj = null
    } else if (sort === 'price' || sort === 'duration') {
        orderObj[sort] = order
    } else {
        orderObj.id = order
    }

    const Findmovies:Array<Movie> = await movieRepository.find({
        take: perPage,
        skip: perPage * (page - 1),
        order: orderObj
    })

    const movies = returnAllMovies.parse(Findmovies)
    const baseUrl:string = 'http://localhost:3000/movies'
    let prevPage:string | undefined | null=`${baseUrl}?page=${Number(page)-1}&perPage=${perPage}`  
    let nextPage:string | undefined | null = `${baseUrl}?page=${Number(page) + 1}&perPage=${perPage}`

    if(page > totalPage){
        return {
            prevPage: prevPage,
            nextPage: null,
            count: count,
            data: []
        }
    }

    if(page == 1){
        prevPage = null
    }
    if(page == totalPage){
        nextPage = null
        
    }
    
    const pagination:IPagination = {
        prevPage : prevPage,
        nextPage: nextPage,
        count : count,
        data: movies
    }
    return pagination
}

export default listMoviesServices