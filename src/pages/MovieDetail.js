import React,{useState, useEffect} from 'react'
import axios from "axios";
import api from "../redux/api"
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux/es/exports';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from "react-router";
import css from "./MovieDetail.module.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  console.log("product?: ",product)
  return (
    <Container>
    <Row>
      <Col>
      <img className={css.detailImg}
       src={`https://image.tmdb.org/t/p/original//${product.poster_path}`}/>
      </Col>
      <Col>
        <div>
            <h1>{product?.title}</h1>
        </div>
        <div>
            <h3>리뷰: {product?.overview}</h3>
        </div>
        <div>
            <h4>수입: {product?.revenue}</h4>
        </div>
        <div>
            <h4>평점: {product?.revenue}</h4>
        </div>
      </Col>
    </Row>
    
   </Container>

   
      /* <div>
       <img className={css.detailImg}  */
    //     src={`https://image.tmdb.org/t/p/original//${product.poster_path}`}/>
    //   </div>
    //  <h1>{product?.overview}</h1>
    //  <h1>{product?.title}</h1>
    // </div>
    // <div>
    //   <img className={css.detailImg}
    //   src={`https://image.tmdb.org/t/p/original//${product.poster_path}`}/>
    // </div>
  )
}

export default MovieDetail   
