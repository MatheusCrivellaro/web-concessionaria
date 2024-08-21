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
        <button onClick={triggerAction} className="categorias-card-inicio col-1">
            <div className="div-itens-card-categoria">
                <div/>
                <img src={image} alt=""/>
                <h1>{title}</h1>
            </div>
        </button>
    )
}

export default CategoriaCard;
