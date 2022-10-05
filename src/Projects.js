import React from 'react';
import MyKanBan from './MyKanBan';
import TkBakery from './TkBakery';

function Projects() {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <h1 className="my-5 py-3" id="section-heading">My Projects</h1>
                    <div className="row justify-content-center">
                        <MyKanBan></MyKanBan>
                        <TkBakery></TkBakery>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;