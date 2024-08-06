import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Inicio from './pages/Inicio/Inicio'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </div>
  )
}

export default App
