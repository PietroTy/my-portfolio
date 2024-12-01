import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageContext } from "../LanguageContext";

const Skills = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Skills",
      description:
        "Here are some of the technologies and languages I’ve worked with, along with my progress level.",
    },
    pt: {
      title: "Habilidades",
      description:
        "Aqui estão algumas das tecnologias e linguagens com as quais trabalhei, junto com meus níveis de progresso.",
    },
  };

  const skills = [
    { name: "Python", percentage: 90 },
    { name: "C", percentage: 90 },
    { name: "HTML", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "React", percentage: 75 },
    { name: "CSS", percentage: 65 },
    { name: "SQL", percentage: 45 },
    { name: "Java", percentage: 35 },
  ];

  return (
    <section id="skills" className="skills-section my-5">
      <div className="row">
        {/* Skills content */}
        <div className="col-12">
          <h2 className="text-light">{content[language].title}</h2>
          <p className="text-light">{content[language].description}</p>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <h5 className="text-light">{skill.name}</h5>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${skill.percentage}%`,
                    backgroundColor: "#6c63ff",
                  }}
                  aria-valuenow={skill.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {skill.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
