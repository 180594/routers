import MovieCard from "./MovieCard"



const MovieList =({movies})=>{
    return(
        <div>{movies.map((item,index)=>{

return (<MovieCard movies={item} key={index}/> )
        })}
</div>
    )
}
export default MovieList