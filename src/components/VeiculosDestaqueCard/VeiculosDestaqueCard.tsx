import './VeiculosDestaqueCard.css'
import {Link} from "react-router-dom";

type props = {
    image: string,
    title: string,
    motor: string,
    preco: string,
    ano: string,
    km: string
}

const VeiculosDestaqueCard = ({ image, title, motor, preco, ano, km }:props) => {
    return (
        <div className="col-3">
            <div className="veiculos-destaque-card">
                <img src={image} alt="" className="img-veiculos-destaque-card"/>
                <h1>{title}</h1>
                <h2>{motor}</h2>
                <h3>Por <span>{preco}</span></h3>
                <div className="card-veiculo-destaque-ano-km">
                    <p>{ano}</p>
                    <p>{km} Km</p>
                </div>
                <Link to="/" className="button-card-veiculos-destaque">Ver parcelas</Link>
            </div>
        </div>
    )
}

export default VeiculosDestaqueCard
