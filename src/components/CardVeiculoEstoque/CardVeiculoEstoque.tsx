import './CardVeiculoEstoque.css'

import {Link} from "react-router-dom";
import imagemGenerica from '../../images/img-categoria.png'
import {Vehicle} from "../../interfaces/Vehicle.ts";
import useGetLogo from "../../hooks/useGetLogo.tsx";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {SlSpeedometer} from "react-icons/sl";
import honda from "../../images/marcas/Honda_Logo.svg.png";
import fiat from "../../images/marcas/fiat-logo-2-1.png";
import mercedesBenz from "../../images/marcas/mercedes-benz-logo-8.png";
import jeep from "../../images/marcas/jeep_logo_icon_145814.png";
import hyundai from "../../images/marcas/Hyundai-Logo-1990.png";
import chevrolet from "../../images/marcas/Chevrolet-Logo.png";
import volkswagen from "../../images/marcas/Volkswagen-Logo.png";
import renault from "../../images/marcas/pngimg.com - renault_PNG45.png";
import ford from "../../images/marcas/Ford-Logo.png";
import toyota from "../../images/marcas/Toyota-Simbolo.png";
import peugeot from "../../images/marcas/16.png";

type props = {
    image: string,
    veiculo: Vehicle
}

const trataFoto = (image: string | undefined) => {
    if (image === undefined)
        return imagemGenerica
    return image
}

const CardVeiculoEstoque = ({ image, veiculo }:props) => {

    const { getImgMarca } = useGetLogo()

    const marcasImg = [
        {brandName: 'honda', imageSrc: honda},
        {brandName: 'fiat', imageSrc: fiat},
        {brandName: 'mercedes-benz', imageSrc: mercedesBenz},
        {brandName: 'jeep', imageSrc: jeep},
        {brandName: 'hyundai', imageSrc: hyundai},
        {brandName: 'chevrolet', imageSrc: chevrolet},
        {brandName: 'volkswagen', imageSrc: volkswagen},
        {brandName: 'renault', imageSrc: renault},
        {brandName: 'ford', imageSrc: ford},
        {brandName: 'toyota', imageSrc: toyota},
        {brandName: 'peugeot', imageSrc: peugeot},
        {brandName: '', imageSrc: imagemGenerica},
    ];

    return (
        <div className="col-3 card-veiculo-div-estoque">
            <div className="card-veiculo-estoque shadow">
                <div>
                    <img src={trataFoto(image)} alt="" className="image-card-veiculo-estoque"/>
                </div>
                <div>
                    <h4><img src={getImgMarca(veiculo.marca, marcasImg).imageSrc} alt="" className="img-logo-card-veiculo"/> <span>{veiculo.marca + " "}</span>{veiculo.modelo}</h4>
                    <h2>{veiculo.versao}</h2>
                    <div className="ano-km-div-card-veiculo-estoque">
                        <p><MdOutlineCalendarMonth className="icon-card-veiculos-estoque"/>{veiculo.anoFabricacao + "/" + veiculo.anoModelo}</p>
                        <p><SlSpeedometer className="icon-card-veiculos-estoque"/>{veiculo.km} Km</p>
                    </div>
                    <h3><span>R$ {veiculo.precoVenda}</span></h3>
                    <div className="d-flex">
                        <Link to="/" className="button-card-veiculos-estoque">Ver MAIS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardVeiculoEstoque
