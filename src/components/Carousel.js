import React from 'react'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://ymswebsolutions.com/wp-content/themes/ymswebsolutions/assets/img/facebook-cover-page-banner.png" className="d-block w-100 img-fluid custom-img" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://marketplace.canva.com/EAECcozJOI4/3/0/1600w/canva-turquoise-and-monochrome-photo-heading-website-facebook-cover-ybCZwi4wBAQ.jpg" className="d-block w-100 img-fluid custom-img" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://decitech.com/wp-content/uploads/2017/03/webdesign-first-impression.jpg" className="d-block w-100 img-fluid custom-img" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
