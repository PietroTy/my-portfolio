import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function Projects() {
    const { language } = useContext(LanguageContext);

    const content = {
        en: {
            title: "Projects",
            projects: [
                {
                    name: "Checkers Game",
                    description: "A simple checkers game developed using C and Raylib."
                },
                {
                    name: "Tectris",
                    description: "A Tetris clone made in C with Raylib for game development practice."
                },
                {
                    name: "My Hub of Games",
                    description: "A hub for multiple mini-games made in C, ready to be adapted for the web."
                }
            ]
        },
        pt: {
            title: "Projetos",
            projects: [
                {
                    name: "Jogo de Damas",
                    description: "Um jogo de damas simples desenvolvido em C e Raylib."
                },
                {
                    name: "Tectris",
                    description: "Um clone do Tetris feito em C com Raylib para prática de desenvolvimento de jogos."
                },
                {
                    name: "Meu Hub de Jogos",
                    description: "Um hub para vários mini-jogos feito em C, pronto para ser adaptado para a web."
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
