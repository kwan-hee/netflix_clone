import api from '../api';

const API_KEY=process.env.REACT_APP_API_KEY
function getMoives(){
    return async (dispatch)=>{
      try{
        dispatch({type:"GET_MOVIES_REQUEST"})
        const popularMovieApi =  api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
       
       const topRatedApi =  api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
       const upComingApi =  api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

      let [popularMovies, topRatedMoives, upComingMovies] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upComingApi])
            
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload:{ popularMovies:popularMovies.data , topRatedMoives:topRatedMoives.data,
                  upComingMovies:upComingMovies.data}
      })

      }catch(error){
        //에러 핸들링
        dispatch({type:"GET_MOVIES_FAILURE"})

      }
       

    }
}

export const MovieAction = {
    getMoives,
}