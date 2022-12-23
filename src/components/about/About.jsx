import React from "react";
import Me from "../../assets/1.jpg";
import { FaAward, FaUserAstronaut } from "react-icons/fa";
import { VscRootFolderOpened } from "react-icons/vsc";
import "./About.css";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>0.5 Years Working</small>
            </article>
            <article className="about__card">
              <FaUserAstronaut className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscRootFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
          </div>
          <p>watashiha ............................</p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
