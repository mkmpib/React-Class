import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Bikes = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="box">
        <div className="practicle">
          <h1>Varieties Of Bikes Acoording your Needs</h1>
          <li>Practical Bikes</li>
          <div className="bike1">
            {/* 1st */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://assets.otocapital.in/prod/black-with-silver-hero-splendorplus-right-side-view.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/127607/splendor-plus-xtec-right-front-three-quarter.png?isig=0"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* third */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://imgd.aeplcdn.com/370x208/n/cw/ec/150203/hero-hf-deluxe-right-front-three-quarter1.jpeg?isig=0&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* executive */}
        <div className="practicle">
          <li>Execultive Bikes</li>
          <div className="bike1">
            {/* 1st */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://static.autox.com/uploads/bikes/2017/05/1486029888-hero-glamour.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://images.carandbike.com/bike-images/colors/hero/passion-plus/hero-passion-plus-black-heavy-grey.jpg?v=1686717055"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* third */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/49457/super-splendor-right-side-view-2.png?isig=0"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Performance */}
        <div className="practicle">
          <li>Performance Bikes</li>
          <div className="bike1">
            {/* 1st */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://assets.otocapital.in/prod/pearl-silver-white-hero-xtreme-right-side-view.jpeg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://www.heromotocorp.com/content/dam/hero-dam-assets/global/np/products/xpulse-200-4v/colors-360-degree-images/blue-black/1.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* third */}
            <div class="card" data-aos="zoom-out">
              <img
                src="https://imgd.aeplcdn.com/664x374/bw/models/hero-xtreme-200s.jpg?20190305130503&q=80"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="footer">
          <div class=" pura3 container-group text-center">
            <h2>
              <img
                src="https://1000logos.net/wp-content/uploads/2020/06/Hero-Logo1.jpg"
                width={120}
                alt=""
              />
            </h2>
            <div class="row">
              <div class="col9 col-3">
                <h4>ABOUT US</h4>
                <ul>
                  <li>Board of Directors</li>
                  <li>Leadership Team</li>
                  <li>Key Policies</li>
                  <li>Our Reports</li>
                  <li>Sustainability</li>
                </ul>
              </div>

              <div class="col9 col-3">
                <h4>MY HERO</h4>
                <ul>
                  <li>Owner's</li>
                  <li>Two Wheelers Tips</li>
                  <li>Hero Goodlife</li>
                  <li>Xclan</li>
                  <li>Be A Safe Hero</li>
                </ul>
              </div>
              <div class="col9 col-3">
                <h4>REACH US</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>Suggestions</li>
                  <li>Find a Dealer</li>
                  <li>Corporate Enquery</li>
                  <li>Becomea channel leader</li>
                </ul>
              </div>
              <div class="col9 col-3">
                <h4>NEWSROOM</h4>
                <ul>
                  <li>Media Kit</li>
                  <li>In the Press</li>
                  <li>Press Releases</li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <h4>Copyright Hero MotoCorp Ltd 2024.All Right Reserved</h4>
        </div>
      </div>
    </>
  );
};
export default Bikes;
