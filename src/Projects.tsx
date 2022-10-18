import React from 'react';
import { MyKanBan } from './MyKanBan';
import { TkBakery } from './TkBakery';

export const Projects = (): JSX.Element => {
    return (
        <>
            <section id="projects">
                <div className="container-fluid" id="projects-container">
                    <h1 className="my-5 py-3" id="section-heading">My Projects</h1>
                    <div className="row flex-column justify-content-center">
                        <MyKanBan></MyKanBan>
                        <TkBakery></TkBakery>
                    </div>
                </div>
            </section>
        </>
    );
}