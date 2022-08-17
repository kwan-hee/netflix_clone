import React,{ useEffect } from 'react'
import { MovieAction } from '../redux/actions/MovieAction'; 
import { useDispatch } from 'react-redux'; 

function Home() {
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(MovieAction.getMoives())
  },[])
    return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export default Home
