import React from 'react';

function Aboutme() {
    return (
        <>
            <section id="about" className="justify-content-center">
                <h2 id="about-greeting">Hi I'm Tom</h2>
                <p id="about-selfsummary">Full-stack web developer. I am currently seeking full-time and
                    contract work.</p>
                <div>
                    <a href="https://github.com/teekaygithub" target="_blank">
                        <i className="fab fa-github contact-icon"></i>GitHub
                    </a>
                    <a href="https://linkedin.com/in/tomoyuki-tom-kato" target="_blank">
                        <i className="fab fa-linkedin contact-icon"></i>LinkedIn
                    </a>
                    <a href="mailto:tomoyuki.kato@yahoo.com">
                        <i className="fas fa-at contact-icon"></i>Email
                    </a>
                </div>
                <div id="about-mystory-container">
                    <h1><strong>So why embedded to web?</strong></h1>
                    <p id="about-mystory">I started my career as an embedded software engineer and worked on applications
                        ranging from industrial-arm robotics all the way to human-rated spacecrafts. While I did enjoy doing the
                        work of solving both hardware and software issues and integrating them together, I found even the
                        software work itself immensely rewarding.
                        As an embedded software engineer I have integrated software and hardware together to solve interesting
                        problems and to offer incredible capabilities to the end user. I believe my talent for working with
                        multiple disciplines will carry over to my role as a full-stack developer and I will continue to solve
                        problems and deliver amazing products.</p>
                </div>
            </section>
        </>
    );
}

export default Aboutme;