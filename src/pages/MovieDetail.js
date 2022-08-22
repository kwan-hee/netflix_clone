import React,{useState, useEffect} from 'react'
import axios from "axios";
import api from "../redux/api"
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from "react-router";

const MovieDetail = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  let {id} = useParams();
  console.log("id?: ",id)
  const [product, setProduct] = useState(null);
  const getProductDetail = async () =>{
    let url =`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return {
   
  }




  // const { state } = useLocation();
  // const [MovieDetails, setMovieDetails] = React.useState(null);
  // const params = useParams();
  // const API_KEY = process.env.REACT_APP_API_KEY;
  // console.log("MovieDetail_params: ", params )
  // let id = params;
  // console.log("id_params: ", id);
  // async function getMovieDetailsFromAPI(id) {
    
  //   let url = `/movie/${id}?api_key=${API_KEY}&language=en-US`;
  //   let res = await axios.get(url);
  //   console.log("res.data: ", res.data)
    // let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    // let response = await fetch(url);
    // let data = await response.json()
    // console.log("data: ",data);
    // setMovieDetails(res.data);
    // getMovieReviewFromAPI(id);
    // getMovieRelatedFromAPI(id);
    // getTrailer(id);
   
  }
  // console.log("movies: ",movies)
  
  // console.log("parmas_title: ",(item.id==params)? item.original_title:"" )
//   return (
//     <div>
      
     
//     </div>
//   )
// }

export default MovieDetail   
