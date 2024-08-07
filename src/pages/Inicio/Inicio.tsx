import './Inicio.css'
import {Link} from "react-router-dom";
import InformationCard from "../../components/InformationCard/InformationCard.tsx";
import CategoriaCard from "../../components/CategoriaCard/CategoriaCard.tsx";
import VeiculosDestaqueCard from "../../components/VeiculosDestaqueCard/VeiculosDestaqueCard.tsx";

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
                <img src="../../../public/Group%201.png" alt=""/>
            </div>
            <div className="informations-div-inicio row">
                <InformationCard title="Carros novos e semi-novos" description="Nós proporcionamos para você condições especiais para poder adquirir o veículo dos seus sonhos! " image="../../../public/icon.png"/>
                <InformationCard title="Compra de veículos" description="Compramos seu veículo sem burocracia, com agilidade na análise e preço justo." image="../../../public/icon(1).png"/>
                <InformationCard title="Financie o seu sonho" description="Temos como parceiras as principais financeiras, isso garante melhores taxas para você!" image="../../../public/icon(2).png"/>
            </div>
            <div className="categorias-div-inicio">
                <h1>Categorias</h1>
                <div className="categorias-cards-div-inicio">
                    <CategoriaCard image="../../../public/img-categoria.png" title="Nome da Categoria" />
                    <CategoriaCard image="../../../public/img-categoria.png" title="Nome da Categoria" />
                    <CategoriaCard image="../../../public/img-categoria.png" title="Nome da Categoria" />
                    <CategoriaCard image="../../../public/img-categoria.png" title="Nome da Categoria" />
                </div>
            </div>
            <div className="veiculos-destaque-div-inicio">
                <h1>Veículos em destaque</h1>
                <div className="veiculos-destaque-cards-div-inicio row">
                    <VeiculosDestaqueCard image="../../../public/img-veiculo-destaque.png" title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image="../../../public/img-veiculo-destaque.png" title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image="../../../public/img-veiculo-destaque.png" title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image="../../../public/img-veiculo-destaque.png" title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image="../../../public/img-veiculo-destaque.png" title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image="../../../public/img-veiculo-destaque.png" title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image="../../../public/img-veiculo-destaque.png" title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                    <VeiculosDestaqueCard image="../../../public/img-veiculo-destaque.png" title="Nome do carro" motor="2.0 16V Flex Completo Manual" preco="R$100.000,00" ano="2020/2021" km="0"/>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <Link to="/" className="button-veiculos-destaque-inicio ">Ver mais</Link>
                </div>
            </div>
        </div>
    )
}

export default Inicio
