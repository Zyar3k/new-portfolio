import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./Portfolio.css";

const data = [
  {
    title: "Portfolio Item 1",
    image: IMG1,
    id: 1,
    github: "https://github.com",
    liveDemo: "https://google.com",
  },
  {
    title: "Portfolio Item 2",
    image: IMG2,
    id: 2,
    github: "https://github.com",
    liveDemo: "https://google.com",
  },
  {
    title: "Portfolio Item 3",
    image: IMG3,
    id: 3,
    github: "https://github.com",
    liveDemo: "https://google.com",
  },
  {
    title: "Portfolio Item 4",
    image: IMG4,
    id: 4,
    github: "https://github.com",
    liveDemo: "https://google.com",
  },
  {
    title: "Portfolio Item 5",
    image: IMG5,
    id: 5,
    github: "https://github.com",
    liveDemo: "https://google.com",
  },
  {
    title: "Portfolio Item 6",
    image: IMG6,
    id: 6,
    github: "https://github.com",
    liveDemo: "https://google.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ title, image, id, github, liveDemo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={liveDemo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
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

export default Portfolio;
