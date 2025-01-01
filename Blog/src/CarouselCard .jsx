

import React from "react";


const CarouselCard = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        {/* Carousel Section */}
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/armando-series-moderno/ArmandoSeries-HalfFacefinal.png"
                className="d-block w-100"
                alt="Item 1"
              />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/armando-series-moderno/IMG_0065.png"
                className="d-block w-100"
                alt="Item 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/armando-series-moderno/IMG_0042.png"
                className="d-block w-100"
                alt="Item 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Description Section */}
        <div className="card-body">
          <h5 className="card-title">Carousel Description</h5>
          <p className="card-text">
            This carousel showcases three items. Each slide displays an image
            with accompanying content that provides insight into the carousel
            theme. You can customize this section to add a description or any
            other details for the carousel items.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;

