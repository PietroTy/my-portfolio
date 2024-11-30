import React from 'react';

function Contact() {
    return (
        <section id="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <p>If you'd like to get in touch with me, feel free to reach out through any of the following channels:</p>
                <ul>
                    <li>
                        <a href="mailto:pietro.turcimm@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/pietro-turci-2a419229a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://github.com/PietroTy" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://x.com/pit_cromado" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/pit_tmm/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;
