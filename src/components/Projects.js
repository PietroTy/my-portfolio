import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function Projects() {
    const { language } = useContext(LanguageContext);

    const content = {
        en: {
            title: "Projects",
            projects: [
                {
                    name: "Chub",
                    description: "A Hub for simple minigames developed entirely using C and Raylib."
                },
                {
                    name: "Portfolio",
                    description: "This site that you are in!"
                }
            ]
        },
        pt: {
            title: "Projetos",
            projects: [
                {
                    name: "Chub",
                    description: "Um Hub para minijogos simples desenvolvido inteiramente em C e Raylib."
                },
                {
                    name: "Portfolio",
                    description: "Esse site que você está!"
                }
            ]
        }
    };

    return (
        <section id="projects" className="projects-section my-5">
            <h2 className="text-light">{content[language].title}</h2>
            <ul>
                {content[language].projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;
