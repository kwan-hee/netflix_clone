import React,{ useEffect } from 'react'
import { MovieAction } from '../redux/actions/MovieAction'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { useSearchParams } from 'react-router-dom';
import Banner from '../components/Banner';

function Home() {
    const dispatch = useDispatch()
    const {popularMovies, topRatedMoives, upComingMovies} = useSelector(state=>state.movie)

   
  useEffect(()=>{
    dispatch(MovieAction.getMoives())
  },[])
    return (
    <div>
    {popularMovies.results && <Banner movie={popularMovies.results[0]}/>} 
    </div>
  )
}

export default Home
