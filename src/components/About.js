import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function About() {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "About Me",
      introduction:
        "Hello! I’m Pietro, a passionate full-stack developer with a focus on Python, C, JavaScript, and web technologies.",
      description:
        "Currently pursuing a degree in Computer Science and aiming to create a positive impact using AI and technology.",
    },
    pt: {
      title: "Sobre Mim",
      introduction:
        "Olá! Eu sou Pietro, um desenvolvedor full-stack apaixonado com foco em Python, C, JavaScript e tecnologias web.",
      description:
        "Atualmente cursando Ciências da Computação e com o objetivo de criar um impacto positivo usando IA e tecnologia.",
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
