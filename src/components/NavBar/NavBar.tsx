import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className="title-div-nav">
                <h1 className="title">Logo</h1>
                <input className='search-nav' type="text" placeholder="Pesquise por veículo ou marca..." />
            </div>
            <div className='optionals-div-nav'>
                <Link to="/" className='active-button-nav button-nav text-active-button-nav text-button-nav'>Início</Link>
                <Link to="/veiculos" className='deactivated-button-nav button-nav text-deactivated-button-nav text-button-nav'>Veiculos</Link>
                <Link to="/sobre-nos" className='deactivated-button-nav button-nav text-deactivated-button-nav text-button-nav'>Sobre nós</Link>
                <Link to="/venda-seu-veiculo" className='deactivated-button-nav button-nav text-deactivated-button-nav text-button-nav'>Venda seu veículo</Link>
                <Link to="/financiamento" className='deactivated-button-nav button-nav text-deactivated-button-nav text-button-nav'>Financiamentos</Link>
                <button className='whatsapp-button-nav button-nav'>
                    <p className='text-whatsapp-button-nav text-button-nav'>Entrar em contato</p>
                    <FaWhatsapp className="icon-wpp-nav" />
                </button>
            </div>
        </nav>
    )
}

export default NavBar