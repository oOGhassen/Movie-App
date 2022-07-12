import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data,deleteMovie}) => {
    console.log(data)
  return (
    <div className='movie-list'>{
        React.Children.toArray(data.map(movie=><MovieCard item={movie} deleteMovie={deleteMovie}/>))}</div>
  )
}

export default MovieList