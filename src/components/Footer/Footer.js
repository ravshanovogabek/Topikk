
import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <a href="./">
        <img src="https://static.tildacdn.info/tild6461-3631-4933-b438-333065383736/logo_horizontal.svg" alt="logo" className="footer-logo" />
      </a>
      <nav className="footer-nav">
        <a href="#why-topik" className="footer-link">Nega biz</a>
        <a href="#results" className="footer-link">Natijalar</a>
        <a href="#register" className="footer-link">Kurslar</a>
        <a href="#faq" className="footer-link">Savollar</a>
      </nav>
      <div className="footer-social">
        <a href="tel:+998944643808" className="footer-social-icon">
          <i className="fa-solid fa-phone"></i>
        </a>
        <a href="https://t.me/ogabek_devs" className="footer-social-icon">
          <i className="fa-brands fa-telegram"></i>
        </a>
        <a href="https://oga_ocean/" className="footer-social-icon">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/" className="footer-social-icon">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
