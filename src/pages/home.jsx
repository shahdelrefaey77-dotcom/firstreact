import React from "react";
import avatar from "../assets/avataaars.svg";


function Home() {
  return (
    <header className="home">
      <div className="home-content">
        <img src={avatar} alt="Avatar" className="home-avatar" />

        <h1>START FRAMEWORK</h1>

        <div className="star-divider">
          <span className="line"></span>
          <span className="star">★</span>
          <span className="line"></span>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );
}

export default Home;
