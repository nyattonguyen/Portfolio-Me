import React from "react";
import "./Footer.css";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const footer = () => {
  return (
    <section id="footer">
      <a href="#" className="footer__logo">
        NYATTO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebook className="footer__socials-icon" />
        </a>
        <a href="https://instagram.com">
          <FiInstagram className="footer__socials-icon" />
        </a>
        <a href="https://twitter.com">
          <AiOutlineTwitter className="footer__socials-icon" />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; NYATTO NGUYEN. All rights reserved. </small>
      </div>
    </section>
  );
};

export default footer;
