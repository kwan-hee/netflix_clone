import api from '../api';

const API_KEY=process.env.REACT_APP_API_KEY
function getMoives(){
    return async (dispatch)=>{
      try{
        dispatch({type:"GET_MOVIES_REQUEST"})
        const popularMovieApi =  api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
       
       const topRatedApi =  api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
       const upComingApi =  api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);

       const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
      let [popularMovies, topRatedMoives, upComingMovies, genreList] = await Promise.all([
        popularMovieApi,
        topRatedApi,        
        upComingApi,
        genreApi,
      ])
      console.log("genreList?: ",genreList);
            
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload:{ popularMovies:popularMovies.data , topRatedMoives:topRatedMoives.data,
                  upComingMovies:upComingMovies.data,
                  genreList: genreList.data.genres,
                }
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