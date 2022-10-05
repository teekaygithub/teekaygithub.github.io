import React from 'react';

function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-dark navbar-expand-sm bg-primary">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">Skills</a>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default Navbar;