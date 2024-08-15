import './CarouselCategorias.css'
import CategoriaCard from "../CategoriaCard/CategoriaCard.tsx";
import peugeot from "../../images/marcas/16.png";

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
                            image={peugeot}
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
