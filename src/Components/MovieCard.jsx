import React from 'react'
import { StarRating } from './StarRating'
import {Link} from 'react-router-dom'
const MovieCard = ({item,deleteMovie}) => {
  
    return (
    <div className='movie-card'>
        <h3>{item.title}</h3>
        <img src={item.poster} alt={item.name}/>
        <StarRating rating={item.rating}/>
        <p>{item.date}</p>
        <button className='btn'onClick={()=>deleteMovie(item.id)}>Delete</button>
        <Link to ={`/infos/${item.id}`}><button className='btn'>Infos</button></Link>
    </div>
  )
}

export default MovieCard