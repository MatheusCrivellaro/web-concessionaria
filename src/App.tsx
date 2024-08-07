import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Inicio from './pages/Inicio/Inicio'
import Financiamento from './pages/financiamento/Financiamento'
import Sobre from './pages/sobre-nos/Sobre'
import Veiculos from './pages/veiculos/Veiculos'
import Venda from './pages/venda/Venda'
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/sobre-nos" element={<Sobre />} />
        <Route path="/venda-seu-veiculo" element={<Venda />} />
        <Route path="/financiamento" element={<Financiamento />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
