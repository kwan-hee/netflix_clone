import React,{ useEffect } from 'react'
import { MovieAction } from '../redux/actions/MovieAction'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { useSearchParams } from 'react-router-dom';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";
import css from './Home.module.scss';



function Home() {
    const dispatch = useDispatch()
    const {popularMovies, topRatedMoives, upComingMovies, loading} = useSelector(state=>state.movie)
    console.log("loading: ",loading)
   
    
    
  useEffect(()=>{
    dispatch(MovieAction.getMoives())
  },[])

  
  // loading 이 true 이면 loading 스피너를 보여주고
  // loading 이 false 이면 데이터를 보여준다. 
  // true: 데이터 도착전
  // false: 데이터 도착후, 에러일때

    if(loading){
      return <ClipLoader color="#000000" loading={loading} size={150} />
    }
    return (
    <div className={css.bg}>
     
     <Banner movie={popularMovies.results[4]}/>

      <h1>popular Movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>Top rated Movie</h1>
      
      <MovieSlide movies={topRatedMoives}/>
      <h1>Upcoming Movie</h1>
      
      <MovieSlide movies={upComingMovies}/>
    </div>
  )
}

export default Home
