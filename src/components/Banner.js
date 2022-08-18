import React from 'react'
import css from './Banner.module.scss';


const Banner = ({movie}) => {
 console.log("movie?: ", movie);
    return (
    <div className={css.banner}
     style={{
        backgroundImage: "url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}`
        +")"
        }}>
        <div className={css.banner_info}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    </div>
  )
}

export default Banner