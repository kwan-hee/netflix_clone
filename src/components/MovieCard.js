import React from 'react'
import css from './MovieCard.module.scss';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({ item }) => {
  console.log("Moviecard_item: ",item)
  const navigate = useNavigate();
  const { genreList } = useSelector((state)=> state.movie)
  return (
    
    <div className={css.card}
        //  onClick={()=> navigate(`/movie/${item.id}`)}
        onClick={()=>  navigate(`/movies/${item.id}`)}
     style={{
             backgroundImage: 
            "url("+`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}`+")"
         }}
        >
         <div className={css.overlay}>
            <h1>{item.title}</h1>
            <div>
                {item.genre_ids.map((id)=>(
                    <Badge bg="danger">
                        {genreList.find(item=> item.id==id).name}</Badge>
                ))}
            </div>
            <div>
                <span>{item.vote_average}</span>
                <span>{item.adult?"청불":"under 18"}</span>
            </div>
        </div>   
     </div>
  )
}

export default MovieCard