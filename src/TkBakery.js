import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAws, faGithub} from '@fortawesome/free-brands-svg-icons';

function TkBakery() {
    return (
        <div className="card project-card mx-auto my-3">
            <div id="project-card-image">
                <img src="../kneadbread.jpg" className="card-img-top img-fluid" alt="TK Bakery" />
            </div>
            <div className="card-body">
                <h4 className="card-title">TK Bakery</h4>
                <p className="card-text">E-commerce site for an online bakery</p>
            </div>
            <div className="card-footer d-flex justify-content-around align-items-center">
                <a className="card-footer-button" href="https://ec2-54-183-254-184.us-west-1.compute.amazonaws.com:8443/" target="_blank">
                    <div className="card-footer-container">
                        <FontAwesomeIcon icon={faAws} size="3x"></FontAwesomeIcon>
                        <p>Website</p>
                    </div>
                </a>
                <a className="card-footer-button" href="https://github.com/teekaygithub/tomsbakery" target="_blank">
                    <div className="card-footer-container">
                        <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
                        <p>Source</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default TkBakery;