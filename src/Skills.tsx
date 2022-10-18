import React from 'react';
import { SkillCard } from './SkillCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faJava, faReact, faDocker, faStripe, faJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

export const Skills = (): JSX.Element => {
    const images = new Map([
        ["Java", <h2><FontAwesomeIcon icon={faJava} size="3x"></FontAwesomeIcon></h2>],
        ["Spring", <img className="img-fluid" src="../spring-logo.jpg"></img>],
        ["React", <h2><FontAwesomeIcon icon={faReact} size="3x"></FontAwesomeIcon></h2>],
        ["Redux", <img className="img-fluid" src="../redux.png" alt="redux logo"></img>],
        ["Thymeleaf", <img className="img-fluid" src="../thymeleaf.png" alt="thymeleaf"></img>],
        ["AWS", <h2><FontAwesomeIcon icon={faAws} size="3x"></FontAwesomeIcon></h2>],
        ["Docker", <h2><FontAwesomeIcon icon={faDocker} size="3x"></FontAwesomeIcon></h2>],
        ["Stripe", <h2><FontAwesomeIcon icon={faStripe} size="3x"></FontAwesomeIcon></h2>],
        ["Javascript", <h2><FontAwesomeIcon icon={faJs} size="3x"></FontAwesomeIcon></h2>],
        ["HTML5", <h2><FontAwesomeIcon icon={faHtml5} size="3x"></FontAwesomeIcon></h2>],
        ["CSS3", <h2><FontAwesomeIcon icon={faCss3} size="3x"></FontAwesomeIcon></h2>],
        ["JUnit", <img className="img-fluid" src="../junit.png"></img>],
    ]);

    const temp: JSX.Element[] = [];
    images.forEach((k, v) => {
        temp.push(<SkillCard image={k} text={v}></SkillCard>);
    });

    const skillCards = temp.map((item) => item)

    return (
        <>
            <section id="skills" className="container-md">
                <h2 id="section-heading" className="text-white my-5">My Skill Set</h2>
                <div className="row w-75 mx-auto">
                    {skillCards}
                </div>
            </section>
        </>
    );
}