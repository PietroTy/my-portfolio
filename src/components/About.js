import React from 'react';

function About() {
    return (
        <section id="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>Hello! I’m Pietro, a passionate full-stack developer with a focus on Python, C, JavaScript, and web technologies.</p>
                    <p>Currently pursuing a degree in Computer Science and aiming to create a positive impact using AI and technology.</p>
                </div>
                <div className="about-image">
                <img src={require('../assets/your-image.jpg')} alt="Pietro" />
                </div>
            </div>
        </section>
    );
}

export default About;
