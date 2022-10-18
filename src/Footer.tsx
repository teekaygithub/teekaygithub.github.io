import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

export const Footer = (): JSX.Element => {
    return (
        <>
            <footer>
                <a href="https://github.com/teekaygithub" target="_blank">
                    <FontAwesomeIcon className="mr-2" icon={faGithub}></FontAwesomeIcon>GitHub
                </a>
                <a href="https://linkedin.com/in/tomoyuki-tom-kato" target="_blank">
                    <FontAwesomeIcon className="mr-2" icon={faLinkedin}></FontAwesomeIcon>LinkedIn
                </a>
                <a href="mailto:tomoyuki.kato@yahoo.com">
                    <FontAwesomeIcon className="mr-2" icon={faMailBulk}></FontAwesomeIcon>Email
                </a>
            </footer>
        </>
    );
}