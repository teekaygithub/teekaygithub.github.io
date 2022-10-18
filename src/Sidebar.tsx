import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Sidebar = (): JSX.Element => {
    return (
        <div id='sidebar'>
            <ul id='sidebar-links'>
                <li>
                    <a href="https://github.com/teekaygithub" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="white"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/tomoyuki-tom-kato" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="white"></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    );
}