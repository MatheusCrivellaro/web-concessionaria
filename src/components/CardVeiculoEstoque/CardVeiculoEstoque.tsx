import './CardVeiculoEstoque.css'

import {Link} from "react-router-dom";
import imagemGenerica from '../../images/img-categoria.png'
import {Vehicle} from "../../interfaces/Vehicle.ts";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {SlSpeedometer} from "react-icons/sl";
import useGetLogoEmpresas from "../../hooks/useGetLogoEmpresas.tsx";

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

    const { getLogo } = useGetLogoEmpresas()

    return (
        <div className="col-3 card-veiculo-div-estoque">
            <div className="card-veiculo-estoque shadow">
                <div>
                    <img src={trataFoto(image)} alt="" className="image-card-veiculo-estoque"/>
                </div>
                <div>
                    <h4><img src={getLogo(veiculo.marca)} alt="" className="img-logo-card-veiculo"/> <span>{veiculo.marca + " "}</span>{veiculo.modelo}</h4>
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
