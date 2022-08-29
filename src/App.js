import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Trending from './Pages/Trending'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import Test from './Pages/Test'
import { CgMoon } from 'react-icons/cg'
import { ImSun } from 'react-icons/im'
import { useState } from 'react'

function App() {

  const [mode, setMode] = useState('dark')

  // https://image.tmdb.org/t/p/w300

  function changeMode() {
    mode === 'dark' ? setMode('light') : setMode('dark')
    document.body.style.backgroundColor = `${mode === 'dark' ? '#edede9' : '#111213'}`
  }

  return (
    <HashRouter>
      {mode === 'dark' ? <ImSun onClick={changeMode} className= 'modeIcon modeIcon_dm' /> : <CgMoon onClick={changeMode} className='modeIcon modeIcon_lm' />}
      <Routes>
        <Route path="/" element={<Trending mode={mode} />} />
        <Route path='/movies' element={<Movies mode={mode} />} />
        <Route path='/series' element={<Series mode={mode} />} />

        {/* developement */}
        <Route path='/test' element={<Test />} />
        {/* developement */}
      </Routes>
    </HashRouter>
  )
}

export default App;
