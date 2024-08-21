import './CarouselCategorias.css'
import CategoriaCard from "../CategoriaCard/CategoriaCard.tsx";
import useGetLogoEmpresas from "../../hooks/useGetLogoEmpresas.tsx";

type props = {
    marcas: string[],
    handleSelectedMarca: (selectMarca: string) => void
}

const CarouselCategorias = ({ marcas, handleSelectedMarca }: props) => {

    const { getLogo } = useGetLogoEmpresas()

    return (
        <div className="categorias-div-inicio">
            <h1>Marcas</h1>
            <div className="div-cards-categorias-carousel-inicio row">
                {
                    marcas.map((i, index) =>
                        <CategoriaCard
                            image={getLogo(i)}
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
