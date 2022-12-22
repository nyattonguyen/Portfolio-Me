import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.css";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          {/* UX/UI  */}
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
          </ul>
        </article>
        {/* End of UX/UI */}

        {/* Web Development  */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development  */}

        {/* Content Create  */}
        <article className="service">
          <div className="service__head">
            <h3>Content Create</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>doushisuruka</p>
            </li>
          </ul>
        </article>
        {/* End of Content Create  */}
      </div>
    </section>
  );
};

export default Services;
