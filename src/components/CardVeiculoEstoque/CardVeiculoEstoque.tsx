import './CardVeiculoEstoque.css'

import {Link} from "react-router-dom";
import imagemGenerica from '../../images/img-categoria.png'

type props = {
    image: string,
    title: string,
    motor: string,
    preco: string,
    ano: string,
    km: string
}

const trataFoto = (image: string | undefined) => {
    if (image === undefined)
        return imagemGenerica
    return image
}

const CardVeiculoEstoque = ({ image, title, motor, preco, ano, km }:props) => {
    return (
        <div className="col-3 card-veiculo-div-estoque">
            <div className="card-veiculo-estoque shadow">
                <div>
                    <img src={trataFoto(image)} alt="" className=""/>
                </div>
                <div>
                    <h1>{title}</h1>
                    <h2>{motor}</h2>
                    <h3>Por <span>R${preco}</span></h3>
                    <div className="ano-km-div-card-veiculo-estoque">
                        <p>{ano}</p>
                        <p>{km} Km</p>
                    </div>
                    <div className="d-flex">
                        <Link to="/" className="button-card-veiculos-estoque">Ver parcelas</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardVeiculoEstoque
