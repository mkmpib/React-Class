import React from 'react'

import "./App.css";
import CarouselCard from './CarouselCard ';
const Accessories = () => {
  return (
    <>
      <div className="acc">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="1000">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/banner/banner5.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item" data-bs-interval="4000">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/banner/banner1.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/banner/banner2.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/banner/MagneticTankBag_4.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/banner/Actioncameramobileholder_5.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/banner/PremiumNumberLock_6.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/banner/banner4.jpeg "
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <h1>
          <span>-</span>NEW ACCESSORIES LAUNCHED THIS YEAR 2024<span>-</span>
        </h1>
        <h2>
          Accelerate your thrill with newly launched accessories smartly
          designed to meet your advanced needs.
        </h2>
        {/* grid 1 */}
       
                
        {/* grid2 */}
        <div class="container text-center">
          <div class="row">
            <div class="col"><CarouselCard></CarouselCard></div>
            <div class="col"><CarouselCard></CarouselCard></div>
            <div class="col"><CarouselCard></CarouselCard></div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Accessories
