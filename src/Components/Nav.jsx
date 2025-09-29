import React, { useState } from "react";
import "./Nav.css";
import logo from "../assets/l4logo.png";
import twitter from "../assets/twitter.png";
import twittered from "../assets/twittered.png";
import {
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("sidebar-open");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("sidebar-open");
  };

  return (
    <>
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="top-nav-container">
          <div className="quote">
            Elegance is the only beauty that never fades
          </div>
          <div className="social-links">
            <a href="mailto:info@l4lady.com" title="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/l4.lady?igsh=YjRqMjR5c3U3cGoz"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a href="#" title="Twitter/X">
              <img
                src={twitter}
                alt="X logo"
                style={{ height: "14px", width: "14px" }}
              />
            </a>
            <a href="#" title="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="main-nav-container">
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <FaBars />
          </button>

          <div className="nav-left">
            <ul className="nav-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#latest">Latest</a>
              </li>
            </ul>
          </div>

          <div className="nav-center">
            <div className="logo-container">
              <img src={logo} className="logo-img" alt="L4LADY Logo" />
              <div className="tagline">Forever for women</div>
            </div>
          </div>

          <div className="nav-right">
            <ul className="nav-menu">
              <li>
                <a href="#collections">Collections</a>
              </li>
              <li>
                <a href="#lookbook">Lookbook</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`mobile-sidebar ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo-container">
            <img src={logo} className="logo-img" alt="L4LADY Logo" />
            <div className="tagline">Forever for women</div>
          </div>
          <button
            className="close-btn"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="sidebar-menu">
          <li>
            <a href="#home" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#latest" onClick={closeMobileMenu}>
              Latest
            </a>
          </li>
          <li>
            <a href="#collections" onClick={closeMobileMenu}>
              Collections
            </a>
          </li>
          <li>
            <a href="#lookbook" onClick={closeMobileMenu}>
              Lookbook
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className="sidebar-social">
          <a href="mailto:info@l4lady.com" title="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/l4.lady?igsh=YjRqMjR5c3U3cGoz"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a href="#" title="Twitter/X" className="twitter-icon-wrap">
            <img
              className="twitter-icon-default"
              src={twittered}
              alt="X logo white"
            />
            <img
              className="twitter-icon-hover"
              src={twitter}
              alt="X logo black"
            />
          </a>
          <a href="#" title="Facebook">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div
        className={`overlay ${isMobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
}

export default Nav;
