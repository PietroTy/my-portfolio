import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function Header() {
    const { language, toggleLanguage } = useContext(LanguageContext);

    // Define the navigation items in both languages
    const navItems = {
        en: {
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        pt: {
            about: "Sobre Mim",
            skills: "Habilidades",
            projects: "Projetos",
            contact: "Contato"
        }
    };

    return (
        <header>
            <div className="header-left">
                <span className="logo">
                    <span className="pietro">Pietro</span>
                    <span className="ty">Ty</span>
                </span>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">{navItems[language].about}</a></li>
                    <li><a href="#skills">{navItems[language].skills}</a></li>
                    <li><a href="#projects">{navItems[language].projects}</a></li>
                    <li><a href="#contact">{navItems[language].contact}</a></li>
                </ul>
            </nav>
            <button onClick={toggleLanguage} className="language-toggle">
                {language === 'en' ? 'Switch to Portuguese' : 'Switch to English'}
            </button>
        </header>
    );
}

export default Header;
