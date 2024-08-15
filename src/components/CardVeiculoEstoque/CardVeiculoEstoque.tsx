import './CardVeiculoEstoque.css'

import {Link} from "react-router-dom";
import imagemGenerica from '../../images/img-categoria.png'
import {Vehicle} from "../../interfaces/Vehicle.ts";

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
    return (
        <div className="col-3 card-veiculo-div-estoque">
            <div className="card-veiculo-estoque shadow">
                <div>
                    <img src={trataFoto(image)} alt="" className=""/>
                </div>
                <div>
                    <h4>{veiculo.marca + " " + veiculo.modelo}</h4>
                    <h2>{veiculo.versao}</h2>
                    <div className="ano-km-div-card-veiculo-estoque">
                        <p>{veiculo.anoFabricacao + "/" + veiculo.anoModelo}</p>
                        <p>{veiculo.km} Km</p>
                    </div>
                    <h3><span>R$ {veiculo.precoVenda}</span></h3>
                    <div className="d-flex">
                        <Link to="/" className="button-card-veiculos-estoque">Ver parcelas</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardVeiculoEstoque
