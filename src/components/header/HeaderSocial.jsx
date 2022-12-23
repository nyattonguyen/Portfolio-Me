import React from "react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://facebook.com/profile.php?id=100013007494386"
        target="_blank"
      >
        <BsFacebook />
      </a>
      <a href="https://github.com/nyattonguyen" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/nyattonguyen/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
