import React from 'react';

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-sm bg-primary">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default Navbar;