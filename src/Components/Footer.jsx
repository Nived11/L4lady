import React from "react";
import './Footer.css';
import logo from '../assets/l4logo.png';
import twitter from '../assets/twitter.png';
import { 
  FaEnvelope, 
  FaInstagram, 
  FaFacebookF,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Logo and Brand Section */}
                    <div className="footer-section footer-logo-section">
                        <img 
                            src={logo} 
                            alt="L4LADY Logo" 
                            className="footer-logo"
                        />
                        <div className="footer-tagline">Forever for women</div>
                        <p className="footer-description">
                            Discover timeless elegance and contemporary style. 
                            Where fashion meets sophistication for the modern woman.
                        </p>
                    </div>

                    {/* About Us Section */}
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p className="footer-description">
                            L4 Lady Creations is dedicated to empowering women through fashion. 
                            We believe every woman deserves to feel confident and beautiful in what she wears. 
                            Our carefully curated collections blend timeless elegance with contemporary trends, 
                            creating pieces that celebrate the unique spirit of every woman.
                        </p>
                    </div>

                    {/* Contact & Follow Us Section */}
                    <div className="footer-section">
                        <h3>Contact & Follow Us</h3>
                        
                        {/* Contact Information */}
                        <div className="footer-contact">
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:info@l4lady.com" className="contact-link">
                                    info@l4lady.com
                                </a>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div className="contact-text">
                                    <div>L4 LADY CREATIONS</div>
                                    <div>Parayil Building, Pattithanam Junction</div>
                                    <div>Ettumanoor, Kottayam</div>
                                    <div>Kerala - 686632</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="footer-social-section">
                            <p className="social-title">Stay Connected</p>
                            <div className="footer-social">
                                <a href="mailto:info@l4lady.com" title="Email">
                                    <FaEnvelope />
                                </a>
                                <a href="https://www.instagram.com/l4.lady?igsh=YjRqMjR5c3U3cGoz" title="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="#" title="Twitter/X">
                                    <img 
                                        src={twitter} 
                                        alt="X logo" 
                                        className="footer-twitter-icon"
                                    />
                                </a>
                                <a href="#" title="Facebook">
                                    <FaFacebookF />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2025 L4 Lady Creations. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;