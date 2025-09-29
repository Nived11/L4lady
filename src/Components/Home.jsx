import React from "react";
import Nav from "./Nav";
import "./Home.css";
import Footer from "./Footer";
import logo from "../assets/l4logotm.png";
import cl1097 from "../assets/collections/1097x1920.jpg";

function Home() {
  return (
    <>
      <Nav />
      <div
        className="home"
        style={{ backgroundImage: `url(${cl1097})`}}
      >
        <div className="overlayy" />
        <div className="carousel-contentt">
          <div className="home-logo-container animate-logoo">
            <img src={logo} alt="L4LADY" className="logoo" />
            <div className="home-taglinee animate-taglinee">Forever for women</div>
          </div>
          
          <p className="description animate-description">
           A New Era of Fashion Begins
          </p>
          <h1 className="titlee animate-title">Coming Soon</h1>
          

          <div className="progress-container animate-progress">
            <div className="progress-bar">
              <div className="progress-fill" />
            </div>
            <p className="progress-text">85% Complete</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;