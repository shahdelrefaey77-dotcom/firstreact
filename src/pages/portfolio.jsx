import React from "react";
import img1 from "../assets/app6.png";
import img2 from "../assets/app61.png";
import img3 from "../assets/app63.png";


function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-content">
        <h2>PORTFOLIO COMPONENT</h2>

        <div className="star-divider dark">
          <span className="line"></span>
          <span className="star">★</span>
          <span className="line"></span>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src={img1} alt="portfolio" />
            <div className="overlay">
                <span className="plus">+</span>
            </div>

          </div>

          <div className="portfolio-item">
            <img src={img2} alt="portfolio" />
            <div className="overlay">+</div>
          </div>

          <div className="portfolio-item">
            <img src={img3} alt="portfolio" />
            <div className="overlay">+</div>
          </div>

          <div className="portfolio-item">
            <img src={img1} alt="portfolio" />
            <div className="overlay">+</div>
          </div>

          <div className="portfolio-item">
            <img src={img2} alt="portfolio" />
            <div className="overlay">+</div>
          </div>

          <div className="portfolio-item">
            <img src={img3} alt="portfolio" />
            <div className="overlay">+</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
