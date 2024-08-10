import './Inicio.css'
import {Link} from "react-router-dom";
import InformationCard from "../../components/InformationCard/InformationCard.tsx";
import VeiculosDestaqueCard from "../../components/VeiculosDestaqueCard/VeiculosDestaqueCard.tsx";
import imageBannerinicio from "../../images/Group 1.png"
import iconInformation1 from "../../images/icon.png"
import iconInformation2 from "../../images/icon(1).png"
import iconInformation3 from "../../images/icon(2).png"
import imageAvaliacoesInicio from "../../images/amico.png"
import imgPerfil from "../../images/img.png"
import AvaliacaoCard from "../../components/AvaliacaoCard/AvaliacaoCard.tsx";
import { GrLocation } from "react-icons/gr";
import {FaWhatsapp} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import {RiPhoneLine} from "react-icons/ri";
import {useGetStock} from "../../hooks/useGetStock.tsx";
import {Vehicle} from "../../interfaces/Vehicle.ts";
import useCollects from "../../hooks/useCollects.tsx";
import useFiltersVehicles from "../../hooks/useFiltersVehicles.tsx";
import CarouselCategorias from "../../components/CarouselCategorias/CarouselCategorias.tsx";

const Inicio = () => {

    const { data } = useGetStock();
    const { marcas  } = useCollects(data)
    useFiltersVehicles(data);

    return (
        <div className="inicio">
            <div className="banner-div-inicio">
                <div className="text-banner-div-inicio">
                    <div className="text-banner-inicio">
                        <h1>Seu próximo carro <span>está aqui!</span></h1>
                        <h2>
                            Adquira agora mesmo seu veículo dos sonhos com <span>condições especiais!</span>
                        </h2>
                        <h2>Veja agora mesmo nossos veículos em destaque:</h2>
                        <div className="div-buttons-banner-inicio">
                            <Link to="/financiamento" className="button-banner-inicio button-banner-grey">
                                Fazer um financiamento
                            </Link>
                            <a href="/#veiculos-destaque" className="button-banner-inicio button-banner-blue">
                                Ver veículos em destaque
                            </a>
                        </div>
                    </div>
                </div>
                <img src={imageBannerinicio} alt=""/>
            </div>
            <div className="informations-div-inicio row">
                <InformationCard title="Carros novos e semi-novos" description="Nós proporcionamos para você condições especiais para poder adquirir o veículo dos seus sonhos! " image={iconInformation1}/>
                <InformationCard title="Compra de veículos" description="Compramos seu veículo sem burocracia, com agilidade na análise e preço justo." image={iconInformation2}/>
                <InformationCard title="Financie o seu sonho" description="Temos como parceiras as principais financeiras, isso garante melhores taxas para você!" image={iconInformation3}/>
            </div>

            <CarouselCategorias marcas={marcas} padding={1}/>

            <div className="veiculos-destaque-div-inicio" id="veiculos-destaque">
                <h1>Veículos em destaque</h1>
                <div className="veiculos-destaque-cards-div-inicio row">
                    {data?.slice(0, 8).map((i: Vehicle, index) =>
                        <VeiculosDestaqueCard image={i.fotos.foto[0].uri} title={i.modelo}
                                              motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021"
                                              km="0" key={"carro" + index}/>
                    )}
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <Link to="/veiculos" className="button-veiculos-destaque-inicio">Ver mais</Link>
                </div>
            </div>
            <div className="avaliacoes-div-inicio">
                <div className="avaliacoes-cards-div-inicio">
                    <h1>As avaliações dos nossos clientes</h1>
                    <AvaliacaoCard title="Nome do Cliente" description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.”" image={imgPerfil}
                    />
                    <AvaliacaoCard title="Nome do Cliente" description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.”" image={imgPerfil}
                    />
                    <AvaliacaoCard title="Nome do Cliente" description="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.”" image={imgPerfil}
                    />
                </div>
                <img src={imageAvaliacoesInicio} className="img-padrao" alt="" />
            </div>
            <div className="localizacao-div-inicio">
                <div className="mapa-div-localizacao-inicio">
                    <h1>Onde estamos?</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7469508091112!2d-46.54850892375339!3d-23.541602160868354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e6f50c4b1a9%3A0xc13cbfdd3a385c35!2sRua%20Comendador%20Gil%20Pinheiro%20-%20Ch%C3%A1cara%20Calif%C3%B3rnia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003406-000!5e0!3m2!1spt-BR!2sbr!4v1723249116243!5m2!1spt-BR!2sbr"
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="map-localizacao-inicio"
                    />
                </div>
                <div className="informacoes-localizacao-div-inicio">
                    <h1>Nome da loja</h1>
                    <div className="informacao-localizacao-card-inicio">
                        <GrLocation className="icon-informacao-localizacao-card-inicio"/>
                        <h2>Rua lorem ipsum, 1234 - Nome do bairro, Nome da cidade/UF - CEP 12345-000</h2>
                    </div>
                    <div className="informacao-localizacao-card-inicio">
                        <FaWhatsapp className="icon-informacao-localizacao-card-inicio"/>
                        <h2>+55 (11) 9 1234-5678</h2>
                    </div>
                    <div className="informacao-localizacao-card-inicio">
                        <RiPhoneLine className="icon-informacao-localizacao-card-inicio"/>
                        <h2>+55 (11) 9 1234-5678</h2>
                    </div>
                    <div className="informacao-localizacao-card-inicio">
                        <MdOutlineEmail className="icon-informacao-localizacao-card-inicio"/>
                        <h2>exemplo@mail.com</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio
