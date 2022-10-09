import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChargingStation, faCar, faRobot, faSatellite, faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';

function Aboutme() {
    return (
        <>
            <section id="about" className="justify-content-center">
                <div id="about-greeting">
                    <h2>Hi I'm</h2>
                    <h2>Tom Kato</h2>
                </div>
                <p className="mb-5" id="about-selfsummary">Full-stack web developer. I am currently seeking full-time work.</p>
                <br></br>
                <br></br>
                <div id="about-mystory-container">
                    <div id="about-mystory">
                        <p>
                            I started my career as an embedded software engineer and worked on applications ranging from industrial-arm robotics all the way to human-rated spacecrafts.
                        </p>

                        <p>
                            While I did enjoy doing the work of solving both hardware and software issues and integrating them together, I found the software work itself immensely rewarding.
                        </p>

                        <p>
                            I believe my talent for working with multiple disciplines will carry over to my role as a full-stack developer and I will continue to solve problems and deliver great products.
                        </p>
                    </div>
                    <div id="experience-container">
                        <div className="experience-icon-container">
                            <FontAwesomeIcon className="mb-3" icon={faSatellite} size="5x"></FontAwesomeIcon>
                            <a href="https://www.maxar.com/" target="_blank">
                                <h4>Maxar Technologies</h4>
                                <p>(formerly Space Systems Loral)</p>
                            </a>
                        </div>
                        <div className="experience-icon-container">
                            <FontAwesomeIcon className="mb-3" icon={faSpaceShuttle} size="5x"></FontAwesomeIcon>
                            <a href="https://www.lockheedmartin.com/en-us/index.html" target="_blank">
                                <h4>Lockheed Martin</h4>
                            </a>
                        </div>
                        <div className="experience-icon-container">
                            <img className="mx-auto mb-3" src="../robotic-arm-svgrepo-com.svg" id="orst-logo"></img>
                            <a href="https://www.adept.com/" target="_blank">
                                <h4>Omron Robotics and Safety Technology</h4>
                            </a>
                        </div>
                        <div className="experience-icon-container">
                            <div>
                                <FontAwesomeIcon className="mr-5" icon={faChargingStation} size="3x"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faCar} size="5x"></FontAwesomeIcon>
                            </div>
                            <a href="https://freewiretech.com/" target="_blank">
                                <h4 className="mt-3">FreeWire Technologies</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Aboutme;