import './CategoriaCard.css'

type props = {
    image: string,
    title: string,
}

const CategoriaCard = ({ image, title }:props) => {
    return (
        <label htmlFor={title} className="categorias-card-inicio">
            <img src={image} alt="" width="180" height="100"/>
            <h2>{title}</h2>
        </label>
    )
}

export default CategoriaCard;
