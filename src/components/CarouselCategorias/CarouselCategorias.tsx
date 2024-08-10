import './CarouselCategorias.css'
import CategoriaCard from "../CategoriaCard/CategoriaCard.tsx";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import React, {useRef} from "react";
import honda from "../../images/marcas/Honda_Logo.svg.png";
import fiat from "../../images/marcas/fiat-logo-2-1.png";
import mercedesBenz from "../../images/marcas/mercedes-benz-logo-8.png";
import jeep from "../../images/marcas/jeep-logo-1.png";
import hyundai from "../../images/marcas/Hyundai-Logo-1990.png";
import chevrolet from "../../images/marcas/Chevrolet-Logo.png";
import volkswagen from "../../images/marcas/Volkswagen-Logo.png";
import renault from "../../images/marcas/pngimg.com - renault_PNG45.png";
import ford from "../../images/marcas/Ford-Logo.png";
import toyota from "../../images/marcas/Toyota-Simbolo.png";
import peugeot from "../../images/marcas/16.webp";

import imagemGenerica from '../../images/img-categoria.png'

type props = {
    marcas: string[],
    padding: number
}

const CarouselCategorias = ({ marcas, padding }: props) => {

    const carouselMarcas = useRef(null)

    const marcasImg = [
        { id: 1, brandName: 'honda', imageSrc: honda },
        { id: 2, brandName: 'fiat', imageSrc: fiat },
        { id: 3, brandName: 'mercedes-benz', imageSrc: mercedesBenz },
        { id: 4, brandName: 'jeep', imageSrc: jeep },
        { id: 5, brandName: 'hyundai', imageSrc: hyundai },
        { id: 6, brandName: 'chevrolet', imageSrc: chevrolet },
        { id: 7, brandName: 'volkswagen', imageSrc: volkswagen },
        { id: 8, brandName: 'renault', imageSrc: renault },
        { id: 9, brandName: 'ford', imageSrc: ford },
        { id: 10, brandName: 'toyota', imageSrc: toyota },
        { id: 11, brandName: 'peugeot', imageSrc: peugeot },
    ];

    const handleLeftClic = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        carouselMarcas.current!.scrollLeft += carouselMarcas.current!.offsetWidth;
    }

    const handleRightClic = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        carouselMarcas.current!.scrollLeft -= carouselMarcas.current!.offsetWidth;
    }

    const getImgMarca = (marca: string) => {
        let imgMarca = imagemGenerica
        marcasImg.forEach(value => {
            if (marca === value.brandName) {
                imgMarca = value.imageSrc
            }
        })
        return imgMarca
    }

    return (
        <div className="categorias-div-inicio">
            <h1 className={padding === 1 ? 'lg-padding-title' : 'sm-padding-title'}>Categorias</h1>
            <div className="categorias-carousel-inicio">
                <div className={padding === 1 ? 'categorias-cards-div-inicio lg-padding' : 'categorias-cards-div-inicio sm-padding'} ref={carouselMarcas}>
                    {
                        marcas.map((i, index) =>
                            <CategoriaCard
                                image={getImgMarca(i)}
                                title={i}
                                key={index + "categoria"}
                            />
                        )
                    }
                </div>
                <div className={padding === 1 ? 'buttons-categorias-div-inicio lg-padding' : 'buttons-categorias-div-inicio sm-padding'}>
                    <button onClick={handleRightClic}><IoIosArrowBack/></button>
                    <button onClick={handleLeftClic}><IoIosArrowForward/></button>
                </div>
            </div>
        </div>
    )
}

export default CarouselCategorias
