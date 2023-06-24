import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/autocheck.jpg";

const data = [
  {
    id: 3,
    image: IMG3,
    title: "Web application",
    github: "https://github.com/nyattonguyen/autocheck",
    demo: "",
  },

  {
    id: 2,
    image: IMG2,
    title: "Web application",
    github: "https://github.com/nyattonguyen/E-Souji",
    demo: "",
  },
  {
    id: 1,
    image: IMG1,
    title: "Mobile application",
    github: "https://github.com/nyattonguyen/21store",
    demo: "",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
