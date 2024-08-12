import './CategoriaCard.css'

type props = {
    image: string,
    title: string,
    handleSelectedMarca: (selectMarca: string) => void
}

const CategoriaCard = ({ image, title, handleSelectedMarca }:props) => {

    const triggerAction = () => {
        handleSelectedMarca(title);
    };

    return (
        <button onClick={triggerAction} className="categorias-card-inicio">
            <img src={image} alt="" width="180" height="100"/>
            <h2>{title}</h2>
        </button>
    )
}

export default CategoriaCard;
