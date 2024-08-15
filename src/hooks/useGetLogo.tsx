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
        {brandName: 'honda', imageSrc: honda},
        {brandName: 'fiat', imageSrc: fiat},
        {brandName: 'mercedes-benz', imageSrc: mercedesBenz},
        {brandName: 'jeep', imageSrc: jeep},
        {brandName: 'hyundai', imageSrc: hyundai},
        {brandName: 'chevrolet', imageSrc: chevrolet},
        {brandName: 'volkswagen', imageSrc: volkswagen},
        {brandName: 'renault', imageSrc: renault},
        {brandName: 'ford', imageSrc: ford},
        {brandName: 'toyota', imageSrc: toyota},
        {brandName: 'peugeot', imageSrc: peugeot},
        {brandName: '', imageSrc: imagemGenerica},
    ];

    const getImgMarca = (marca: string, imagensMarcas: {brandName: string, imageSrc: string}[]) => {
        let imgMarca = marcasImg[11]
        imagensMarcas.forEach(value => {
            if (marca.toLowerCase() === value.brandName) {
                imgMarca = value
            }
        })
        return imgMarca
    }

    return {
        getImgMarca
    }
}

export default useGetLogo
