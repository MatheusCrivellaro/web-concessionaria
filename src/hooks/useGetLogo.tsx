import honda from "../images/marcas/Honda_Logo.svg.png";
import fiat from "../images/marcas/fiat-logo-2-1.png";
import mercedesBenz from "../images/marcas/mercedes-benz-logo-8.png";
import jeep from "../images/marcas/jeep_logo_icon_145814.png";
import hyundai from "../images/marcas/Hyundai-Logo-1990.png";
import chevrolet from "../images/marcas/Chevrolet-Logo.png";
import volkswagen from "../images/marcas/Volkswagen-Logo.png";
import renault from "../images/marcas/pngimg.com - renault_PNG45.png";
import ford from "../images/marcas/Ford-Logo.png";
import toyota from "../images/marcas/Toyota-Simbolo.png";
import peugeot from "../images/marcas/16.png";
import imagemGenerica from "../images/img-categoria.png";

const useGetLogo = () => {

    const marcasImg = [
        {id: 1, brandName: 'honda', imageSrc: honda},
        {id: 2, brandName: 'fiat', imageSrc: fiat},
        {id: 3, brandName: 'mercedes-benz', imageSrc: mercedesBenz},
        {id: 4, brandName: 'jeep', imageSrc: jeep},
        {id: 5, brandName: 'hyundai', imageSrc: hyundai},
        {id: 6, brandName: 'chevrolet', imageSrc: chevrolet},
        {id: 7, brandName: 'volkswagen', imageSrc: volkswagen},
        {id: 8, brandName: 'renault', imageSrc: renault},
        {id: 9, brandName: 'ford', imageSrc: ford},
        {id: 10, brandName: 'toyota', imageSrc: toyota},
        {id: 11, brandName: 'peugeot', imageSrc: peugeot},
    ];

    const getImgMarca = (marca: string) => {
        let imgMarca = imagemGenerica
        marcasImg.forEach(value => {
            if (marca.toLowerCase() === value.brandName) {
                imgMarca = value.imageSrc
            }
        })
        return imgMarca
    }

    return {
        getImgMarca
    }
}

export default useGetLogo
