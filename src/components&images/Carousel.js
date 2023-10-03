import React from 'react'

export default function Carousel(props) {
    return (
        <div>
            <div id={`carouselExampleIndicators-${props.id}`} className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target={`#carouselExampleIndicators-${props.id}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={`#carouselExampleIndicators-${props.id}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target={`#carouselExampleIndicators-${props.id}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                    
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/600*1000" className="slide_img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/600*1200" className="slide_img" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/600*1000" className="slide_img" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators-${props.id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators-${props.id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        
    )
}
