import './CarouselCategorias.css'
import CategoriaCard from "../CategoriaCard/CategoriaCard.tsx";
import imageGenerica from "../../images/img-categoria.png";

type props = {
    marcas: string[],
    handleSelectedMarca: (selectMarca: string) => void
}

const CarouselCategorias = ({ marcas, handleSelectedMarca }: props) => {

    return (
        <div className="categorias-div-inicio">
            <h1>Marcas</h1>
            <div className="div-cards-categorias-carousel-inicio row">
                {
                    marcas.map((i, index) =>
                        <CategoriaCard
                            image={imageGenerica}
                            title={i}
                            key={index + "categoria"}
                            handleSelectedMarca={handleSelectedMarca}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default CarouselCategorias
