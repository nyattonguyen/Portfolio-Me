import React from "react";
import "./Header.css";
import CTA from "./CTA";
// import Me from "../../assets/4.png";
import Me from "../../assets/5.jpg";

import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nguyễn Cao Kỳ Nhật</h1>
        <h3>Nyatto</h3>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="imgMe" className="img-me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
