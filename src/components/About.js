import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function About() {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "About Me",
      introduction:
        "Hi! I'm Pietro Turci, a Brazilian full-stack developer passionate about Python, C, JavaScript, and web technologies.",
      description:
        "Currently pursuing a degree in Computer Science, with the goal of making a positive impact through AI and technology.",
    },
    pt: {
      title: "Sobre Mim",
      introduction:
        "Oi! Sou Pietro Turci, um desenvolvedor full-stack brasileiro apaixonado por Python, C, JavaScript e tecnologias web.",
      description:
        "Atualmente, estou cursando Ciências da Computação, com o objetivo de causar um impacto positivo por meio de IA e tecnologia.",
    },
  };

  return (
    <section id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>{content[language].title}</h2>
          <p>{content[language].introduction}</p>
          <p>{content[language].description}</p>
        </div>
        <div className="about-image">
          <img
            src={require("../assets/pietro-image.jpg")}
            alt="Pietro"
            className="main-image"
          />
          <img
            src={require("../assets/jack-image.jpg")}
            alt="Pietro's work"
            className="overlay-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
