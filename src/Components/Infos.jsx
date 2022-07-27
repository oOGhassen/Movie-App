import React from 'react'
import {useParams} from 'react-router-dom'
import { moviesData } from '../data'
//import { useEffect } from 'react'

const Infos = (movies) => {
    //console.log(Movies)
    const {id}=useParams()
    //useEffect(() => {
        const item=moviesData.find(el=>el.id==id)
        console.log(item)
    
  return (
    <div>
        <img src={item.poster} alt ="Movie Poster"/>  
        <h1>{item.title}</h1>
        <p>{item.description}</p>
         </div>
  )
}

export default Infos