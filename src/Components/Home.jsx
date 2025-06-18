import React from "react";
import './Home.css';

function Home(){
    return(
        <div className="home">
            <div className="coming-container">
                <h1 className="brand">L4Lady</h1>
                <h2 className="soon">Coming Soon</h2>
                <p className="follow">Follow us on Instagram</p>
                <a href="https://www.instagram.com/l4.lady?igsh=YjRqMjR5c3U3cGoz" target="_blank" className="insta-link">Instagram</a>
            </div>
        </div>
    )
}

export default Home;
