import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Ram Akaash</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/ram_akaash_?igsh=MWV5enhodmJ6bDhvZg%3D%3D&utm_source=qr" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/ram-akaashu/" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/ram-akaash" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
            </a>
            </div>
            <span className="footer__copy">Ram Akaash. All rights reserved.</span>
        </div>

    </footer>
  )
}

export default Footer