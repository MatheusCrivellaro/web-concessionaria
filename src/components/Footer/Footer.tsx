import './Footer.css'
import {Link} from "react-router-dom";
import {FaFacebookF, FaInstagram, FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <h1>Logo</h1>
            <div className="footer-options-div">
                <h2>Navegação</h2>
                <Link to="/" className="footer-option">Início</Link>
                <Link to="/veiculos" className="footer-option">Veículos</Link>
                <Link to="/sobre-nos" className="footer-option">Sobre nós</Link>
                <Link to="/venda-seu-veiculo" className="footer-option">Venda seu veículo</Link>
                <Link to="/financiamento" className="footer-option">Financiamento</Link>
            </div>
            <div>
                <h3>Redes Sociais</h3>
                <FaFacebookF className="icon-redes-footer"/>
                <FaInstagram className="icon-redes-footer"/>
                <FaXTwitter className="icon-redes-footer"/>
            </div>
        </footer>
    )
}

export default Footer
