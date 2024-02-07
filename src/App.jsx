import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon/:id' element={<PokemonDetail/>}/>
      </Routes>
    </>
  )
  
}

export default App
