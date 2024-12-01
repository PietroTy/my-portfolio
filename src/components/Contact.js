import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Contact Me",
      description:
        "Feel free to reach out through any of the following channels:",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      instagram: "Instagram",
    },
    pt: {
      title: "Entre em Contato",
      description:
        "Fique à vontade para me contatar por meio de qualquer um dos seguintes canais:",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      instagram: "Instagram",
    },
  };

  return (
    <section id="contact">
      <div className="contact-content">
        <h2 className="text-light">{content[language].title}</h2>
        <p className="text-light">{content[language].description}</p>
        <ul>
          <li>
            <a href="mailto:pietro.turcimm@gmail.com" target="_blank" rel="noopener noreferrer">
              {content[language].email}
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/pietro-turci-2a419229a" target="_blank" rel="noopener noreferrer">
              {content[language].linkedin}
            </a>
          </li>
          <li>
            <a href="https://github.com/PietroTy" target="_blank" rel="noopener noreferrer">
              {content[language].github}
            </a>
          </li>
          <li>
            <a href="https://x.com/pit_cromado" target="_blank" rel="noopener noreferrer">
              {content[language].twitter}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pit_tmm/" target="_blank" rel="noopener noreferrer">
              {content[language].instagram}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
