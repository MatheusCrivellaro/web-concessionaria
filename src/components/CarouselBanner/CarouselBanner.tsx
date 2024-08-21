import './CarouselBanner.css'

const CarouselBanner = () => {
    return (
        <div id="carouselExample" className="carousel slide carousel-banner">
            <div className="carousel-inner carousel-div-banner">
                <div className="carousel-item active div-banners-carousel">
                    <img src="https://resized-images.autoconf.com.br/1920x450/filters:format(webp)/site/64/7fe01d06-dd18-463e-be8e-371369438f38.png" alt=""/>
                </div>
                <div className="carousel-item div-banners-carousel">
                    <img src="https://resized-images.autoconf.com.br/1920x450/filters:format(webp)/site/64/a22ca6d1-cc43-4afb-9662-bd71bc9ed10f.png" alt=""/>
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
