import React from 'react'
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';
import slide5 from './images/slide5.jpg';

export const SliDer = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slide4} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={slide5} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}
