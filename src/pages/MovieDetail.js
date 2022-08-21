import React from 'react'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate, useParams } from 'react-router-dom';


const MovieDetail = () => {
  const params = useParams();
  console.log("MovieDetail_item: ",params)
  return (
    <div>{params.title}</div>
  )
}

export default MovieDetail