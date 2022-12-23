import React from "react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://facebook.com/"
        target="_blank"
      >
        <BsFacebook />
      </a>
      <a href="https://github.com/" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
