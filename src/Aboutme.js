import React from 'react';

function Aboutme() {
    return (
        <>
            <section id="about" className="justify-content-center">
                <h2 id="about-greeting">Hi I'm Tom Kato</h2>
                <p className="mb-5" id="about-selfsummary">Full-stack web developer. I am currently seeking full-time work.</p>
                <br></br>
                <br></br>
                <div id="about-mystory-container">
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