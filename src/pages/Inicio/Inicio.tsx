import './Inicio.css'
import {Link} from "react-router-dom";
import InformationCard from "../../components/InformationCard/InformationCard.tsx";
import CategoriaCard from "../../components/CategoriaCard/CategoriaCard.tsx";
import VeiculosDestaqueCard from "../../components/VeiculosDestaqueCard/VeiculosDestaqueCard.tsx";
import imageVeiculoDestaque from "../../images/img-veiculo-destaque.png"
import imageBannerinicio from "../../images/Group 1.png"
import iconInformation1 from "../../images/icon.png"
import iconInformation2 from "../../images/icon(1).png"
import iconInformation3 from "../../images/icon(2).png"
import imageCategoriaInicio from "../../images/img-categoria.png"
import imageAvaliacoesInicio from "../../images/amico.png"
import imgPerfil from "../../images/img.png"
import AvaliacaoCard from "../../components/AvaliacaoCard/AvaliacaoCard.tsx";

const Inicio = () => {
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
                            <Link to="/veiculos" className="button-banner-inicio button-banner-blue">
                                Ver veículos em destaque
                            </Link>
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
            <div className="categorias-div-inicio">
                <h1>Categorias</h1>
                <div className="categorias-cards-div-inicio">
                    <CategoriaCard image={imageCategoriaInicio} title="Nome da Categoria" />
                    <CategoriaCard image={imageCategoriaInicio} title="Nome da Categoria" />
                    <CategoriaCard image={imageCategoriaInicio} title="Nome da Categoria" />
                    <CategoriaCard image={imageCategoriaInicio} title="Nome da Categoria" />
                </div>
            </div>
            <div className="veiculos-destaque-div-inicio">
                <h1>Veículos em destaque</h1>
                <div className="veiculos-destaque-cards-div-inicio row">
                    <VeiculosDestaqueCard image={imageVeiculoDestaque} title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image={imageVeiculoDestaque} title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image={imageVeiculoDestaque} title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image={imageVeiculoDestaque} title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image={imageVeiculoDestaque} title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image={imageVeiculoDestaque} title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image={imageVeiculoDestaque} title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image={imageVeiculoDestaque} title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <Link to="/" className="button-veiculos-destaque-inicio">Ver mais</Link>
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
                <img src={imageAvaliacoesInicio} alt="" />
            </div>
        </div>
    )
}

export default Inicio
