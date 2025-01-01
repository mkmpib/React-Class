import React from 'react'

import './component/Access.css'

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
        <h1 className="h1">NEW ACCESSORIES LAUNCHED THIS YEAR 2024 </h1>
        <h2>
          Accelerate your thrill with newly launched accessories smartly
          designed to meet your advanced needs.
        </h2>
       
        {/* div for image 1 */}
        <div className="accImg">
          <div id="img">
            <h4 className="h4">
              <span>-</span>Armando Series Moderno
            </h4>
            <img
              src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/armando-series-moderno/IMG_0042.png"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text">
              Hero Understands the Safety & Comfort of its Customers & to
              compete with the Salient Features & Sharp Aesthetics of the Hero
              Motorcycles & Scooters, Hero has added Design features in its
              Armando Series Premium half-face Helmet. It comes with Vibrant
              colored graphics and features like UV-resistant, Breathable &
              Washable Padding & a Double Visor Mechanism for its riders.
            </p>
          </div>
          <div id="img">
            <h4 className="h4">
              <span>-</span>Armando Series Motocross Rowdy Blue
            </h4>
            <img
              src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/armando-series-motocross-rowdy-blue/ArmandoHelmetfinal.png"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text">
              Hero Understands the Safety & Comfort of its Customers & to
              compete with the Salient Features & Sharp Aesthetics of the Hero
              Motorcycles & Scooters, Hero has added Design features in its
              Armando Series Premium Motocross Helmet. It comes with utmost
              safety Testings like Impact Absorption test, Rigidity Test &
              Retention Test.
            </p>
          </div>
          <div id="img">
            <h4 className="h4">
              <span>-</span>GOD IDOL - LORD AADI YOGI
            </h4>
            <img
              src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/god-idol-lord-aadi-yogi/CopyofLordAadishivaHandle.png"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text">
              Introducing the Premium God Idol for Motorcycle, a revolutionary
              accessory that combines exclusive design, superior product
              quality, and unmatched durability. Hero's Premium God Idol sets a
              new standard in the two-wheeler industry with its unique and
              captivating design. Crafted with precision and attention to
              detail, this idol showcases a stunning representation of your
              favorite deity, making it a one-of-a-kind addition to your
              motorcycle. That's why our Premium God Idol undergoes rigorous
              testing and certification to ensure unparalleled quality.
            </p>
          </div>
        </div>

        {/* div for image 1 */}
        <div className="accImg">
          <div id="img">
            <h4 className="h4">
              <span>-</span>Mobile & Action Camera Holder
            </h4>
            <img
              src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/mobile_action-camera-holder/vloggingsetup1.png"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text">
              Vlogging setup is specially designed for the riders using a
              smartphone for navigation. With easy setup without using any
              additional tools, it can be installed on any objects with Rods &
              Plate. Highly effective & Robust while riding because of its Anti
              vibrational features to help capturing anything around you.
            </p>
          </div>
          <div id="img">
            <h4 className="h4">
              <span>-</span>Smart Intercom Helmet Device
            </h4>
            <img
              src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/smart-intercom-helmet-device/Smart-Intercom--final1.png"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text">
              With a growing Rider's community and their enhanced network, Hero
              have studied the needs of the riders to communicate with each
              other while enjoying their ride , that too without any stopping or
              disturbance and at a very reasonable price, Hero have designed a
              Smart Intercom Blutooth device for his customers. This Smart
              device is smart, sturdy, intelligent and is all weather proof with
              IP67 rating, apart from the built quality it comes with a World
              Class Hi-Definition Audio.
            </p>
          </div>
          <div id="img">
            <h4 className="h4">
              <span>-</span>Magnetic Tank Bag
            </h4>
            <img
              src="https://www.heromotocorp.com/content/dam/hero-aem-website/in/hero-accessories/magnetic-tank-bag/CopyofMagnetic-Bag-Fitted-on-Vehicle.png"
              className="card-img-top"
              alt="..."
            />
            <p className="card-text">
              The Magnetic Tank Bag is specifically designed for the rider who
              prefers to travel light with no luggage on its back. With its
              sleek form factor, streamlined side pockets andprotection against
              rains, the Magnetic Tank Bag is the perfect mid-sized tank bag. It
              also comes with a rain protector Cover.
            </p>
          </div>
        </div>

        {/* paragraph */}
        <div className="stats-section">
          <div className="stat-item">
            <h2>500+</h2>
            <p>Accessories</p>
          </div>
          <div className="stat-item">
            <h2>16</h2>
            <p>Motorcycles</p>
          </div>
          <div className="stat-item">
            <h2>04</h2>
            <p>Scooters</p>
          </div>
          <div className="stat-item">
            <h2>30mn+</h2>
            <p>Happy Customers</p>
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
}

export default Accessories
