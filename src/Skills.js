import React from 'react';
import SkillCard from './SkillCard';

function Skills() {
    const images = new Map([
        ["Java", <h2><i className="fab fa-java fa-3x"></i></h2>],
        ["Spring", <img className="img-fluid" src="../spring-logo.jpg"></img>],
        ["React", <h2><i className="fab fa-react fa-3x"></i></h2>],
        ["Redux", <img className="img-fluid" src="../redux.png" alt="redux logo"></img>],
        ["Thymeleaf", <img className="img-fluid" src="../thymeleaf.png" alt="thymeleaf"></img>],
        ["AWS", <h2><i className="fab fa-aws fa-3x"></i></h2>],
        ["Docker", <h2><i className="fab fa-docker fa-3x"></i></h2>],
        ["Stripe", <h2><i className="fab fa-stripe fa-3x"></i></h2>],
        ["Javascript", <h2><i className="fab fa-js-square fa-3x"></i></h2>],
        ["HTML5", <h2><i className="fab fa-html5 fa-3x"></i></h2>],
        ["CSS3", <h2><i className="fab fa-css3 fa-3x"></i></h2>],
        ["JUnit", <img className="img-fluid" src="../junit.png"></img>],
    ]);

    let temp = [];
    images.forEach((k, v) => {
        temp.push(<SkillCard image={k} text={v}></SkillCard>)
    });

    const skillCards = temp.map((item) => item)

    return (
        <>
            <section id="skills" className="container-md">
                <h2 id="section-heading" className="my-5">My Skill Set</h2>
                <div className="row">
                    {skillCards}
                </div>
            </section>
        </>
    );
}

export default Skills;