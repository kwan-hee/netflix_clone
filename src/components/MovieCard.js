import React from 'react'
import css from './MovieCard.module.scss';
import Movieslide from './MovieSlide';

const MovieCard = ({ item }) => {
//   console.log("item: ",item)
    return (
    <div className={css.card}
        style={{
            backgroundImage: 
            "url("+`https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path}`+")"
        }}
        >
     MovieCard
     </div>
  )
}

export default MovieCard