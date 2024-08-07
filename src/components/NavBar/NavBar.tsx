import { FaWhatsapp } from "react-icons/fa";
import {NavLink} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div className="title-div-nav">
                <h1 className="title">Logo</h1>
                <input className='search-nav' type="text" placeholder="Pesquise por veículo ou marca..." />
            </div>
            <div className='optionals-div-nav'>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                >
                    Início
                </NavLink>
                <NavLink
                    to="/veiculos"
                    className={({ isActive }) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                >
                    Veiculos
                </NavLink>
                <NavLink
                    to="/sobre-nos"
                    className={({ isActive }) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                >
                    Sobre nós
                </NavLink>
                <NavLink
                    to="/venda-seu-veiculo"
                    className={({ isActive }) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                >
                    Venda seu veículo
                </NavLink>
                <NavLink
                    to="/financiamento"
                    className={({ isActive }) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                >
                    Financiamentos
                </NavLink>
                <button className='whatsapp-button-nav button-nav'>
                    <p className='text-whatsapp-button-nav text-button-nav'>Entrar em contato</p>
                    <FaWhatsapp className="icon-wpp-nav" />
                </button>
            </div>
        </nav>
    )
}

export default NavBar
