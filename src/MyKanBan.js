import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAws, faGithub} from '@fortawesome/free-brands-svg-icons';

function MyKanBan() {
    return (
        <div className="card project-card mx-auto my-3">
            <div id="project-card-image">
                <img src="../mykanban.png" className="card-img-top img-fluid" />
            </div>
            <div className="card-body">
                <h4 className="card-title">myKanBan</h4>
                <p className="card-text">KanBan board for tracking your project progress</p>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
                <a className="card-footer-button" href="http://mykanban-fe.s3-website-us-west-1.amazonaws.com/" target="_blank">
                    <div className="card-footer-button-container">
                        <FontAwesomeIcon icon={faAws} size="3x"></FontAwesomeIcon>
                        <p>Website</p>
                    </div>
                </a>
                <a className="card-footer-button" href="https://github.com/teekaygithub/myKanBan-FE" target="_blank">
                    <div className="card-footer-button-container">
                        <FontAwesomeIcon icon={faGithub} size="2xl"></FontAwesomeIcon>
                        <p>Source (frontend)</p>
                    </div>
                </a>
                <a className="card-footer-button" href="https://github.com/teekaygithub/myKanBan" target="_blank">
                    <div className="card-footer-button-container">
                        <FontAwesomeIcon icon={faGithub} size="2xl"></FontAwesomeIcon>
                        <p>Source (backend)</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default MyKanBan;