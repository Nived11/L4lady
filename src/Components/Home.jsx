import React from "react";
import Nav from "./Nav";
import "./Home.css";
import logo from "../assets/l4logo.png";

function Home() {
  return (
    <>
    <Nav/>
    <div className="home">
      <img src={logo} alt="L4Lady Logo" className="logo" />
      <h2 className="tagline">A New Era of Fashion Begins</h2>
      <h1 className="coming-soon">COMING SOON</h1>
    
    </div>
    </>
  );
}

export default Home;
