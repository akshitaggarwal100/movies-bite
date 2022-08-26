import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Trending from './Pages/Trending';
import Movies from './Pages/Movies'
import Series from './Pages/Series';
import Test from './Pages/Test';

function App() {

  // https://image.tmdb.org/t/p/w300


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<Series />} />
        {/* developement */}
        <Route path='/test' element={<Test />} />
        {/* developement */}
      </Routes>
    </HashRouter>
  )
}

export default App;
