import React from 'react';

function MyKanBan() {
    return (
        <div className="card mx-3 my-3" id="project-card">
            <div id="project-card-image">
                <img src="../mykanban.png" className="card-img-top img-fluid" />
            </div>
            <div className="card-body">
                <h4 className="card-title">myKanBan</h4>
                <p className="card-text">KanBan board for tracking your project progress</p>
            </div>
            <div className="card-footer" style={{ display: 'flex' }}>
                <a href="http://mykanban-fe.s3-website-us-west-1.amazonaws.com/" target="_blank">
                    <div style={{ display: 'inline-block' }}>
                        <i className="fab fa-aws fa-3x"></i>
                        <p>Website</p>
                    </div>
                </a>
                <a href="https://github.com/teekaygithub/myKanBan-FE" target="_blank">
                    <div style={{ display: 'inline-block' }}>
                        <i className="fab fa-github fa-3x"></i>
                        <p>Source (frontend)</p>
                    </div>
                </a>
                <a href="https://github.com/teekaygithub/myKanBan" target="_blank">
                    <div style={{ display: 'inline-block' }}>
                        <i className="fab fa-github fa-3x"></i>
                        <p>Source (backend)</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default MyKanBan;