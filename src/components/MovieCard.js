import React from 'react'
import css from './MovieCard.module.scss';


const MovieCard = ({ item }) => {
  console.log("Moviecard_item: ",item)
    return (
    
    <div className={css.card}
      
     style={{
             backgroundImage: 
            "url("+`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}`+")"
         }}
        >
             {/* <img src={`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}`}/> */}
     MovieCard
     </div>
  )
}

export default MovieCard