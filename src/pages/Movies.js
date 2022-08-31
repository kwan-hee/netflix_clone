import React from 'react'

import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

const Movies = ({item}) => {
 console.log("movie-item?: ",item)
  return (
    <div>Movies</div>
  )
}

export default Movies