import './CarouselBanner.css'

import banner1 from "../../images/7fe01d06-dd18-463e-be8e-371369438f38.jpeg"
import banner2 from "../../images/a22ca6d1-cc43-4afb-9662-bd71bc9ed10f.jpg"

const CarouselBanner = () => {
    return (
        <div id="carouselExample" className="carousel slide carousel-banner">
            <div className="carousel-inner carousel-div-banner">
                <div className="carousel-item active div-banners-carousel">
                    <img src={banner1} alt=""/>
                </div>
                <div className="carousel-item div-banners-carousel">
                    <img src={banner2} alt=""/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CarouselBanner
