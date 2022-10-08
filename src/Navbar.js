import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faToolbox, faUser, faBriefcase} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-sm">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">    
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> About Tom
                            </a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                            <FontAwesomeIcon icon={faBriefcase} /> Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                            <FontAwesomeIcon icon={faToolbox}></FontAwesomeIcon> Skills
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;