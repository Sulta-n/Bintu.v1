import React from "react";

import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";
import IMG4 from "../assets/portfolio4.jpg";
import IMG5 from "../assets/portfolio5.png";
import IMG6 from "../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://githunb.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Charts",
    github: "https://githunb.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma",
    github: "https://githunb.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 4,
    image: IMG4,
    title: "Maintaining",
    github: "https://githunb.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 5,
    image: IMG5,
    title: "Template",
    github: "https://githunb.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
  {
    id: 6,
    image: IMG6,
    title: "RD",
    github: "https://githunb.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization",
  },
];

const Portfolio = () => {
  return (
    <section className="relative py-24 px-4">
      <p className="text-light text-sm">My Recent Work</p>
      <h1 className="text-primary text-2xl md:text-3xl mb-8 font-bold">
        Portfolio
      </h1>
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((cards, index) => (
            <div
              key={index}
              className="card flex flex-col space-y-4 pt-4 px-6 shadow-2xl"
            >
              <img
                src={cards.image}
                alt={cards.title}
                className="rounded-4xl"
              />
              <h1 className="text-left text-white font-bold text-[1.1rem]">
                {cards.title}
              </h1>
              <div className="flex space-x-3.5">
                <a href={cards.github} className="button">
                  Github
                </a>
                <a
                  href={cards.demo}
                  className="button bg-primary text-background"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
