import './CategoriaCard.css'

type props = {
    image: string,
    title: string,
}

const CategoriaCard = ({ image, title }:props) => {
    return (
        <div className="categorias-card-inicio">
            <img src={image} alt=""/>
            <h2>{title}</h2>
        </div>
    )
}

export default CategoriaCard;
