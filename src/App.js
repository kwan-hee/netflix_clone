import './App.css';
import { Routes, Route } from "react-router-dom";
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import Movies from './pages/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import "react-multi-carousel/lib/styles.css";
//1. 3개 페이지 필요, 홈페이지, movie 페이지, movieDetail 페이지
//2. 홈페이지 배너 
//3. 3가지 섹션의 영화를 볼수 있다. ( popular, top rated, upcoming)
//4. 각 영화에 마우슬 올려두면, 제목, 장르,전수 인기도 청불여부
//5. 영화를 슬라이드로 넘길수 있다. 
//6. 영화 디테일 페이지에서 영화에 대한 정보 볼수 있다.
//7. trailer를 누르면 예고편을 볼수 있다.
//8. 영화 리뷰도 볼수 있다.
//9. 관련된 영화도 볼수 있다.
//10. 영화 검색 가능
//11. 영화 정렬 기능
//12. 영화 필터링 기능
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:id" element={<MovieDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
