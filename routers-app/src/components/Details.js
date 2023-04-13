import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = ({movies}) => {
    const Titre = useParams();
    const navigate = useNavigate()
    const single = movies.find((item)=> item.Title === Titre.Title)
  return (
    <div>
        <button onClick={()=>navigate('/')}> Home</button>

        <h2> {single.Title}</h2>
        <h2>{single.rating}</h2>
        <img src={single.Poster} alt="movie"/>

    </div>
  )
}

export default Details