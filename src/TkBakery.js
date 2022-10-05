import React from 'react';

function TkBakery() {
    return (
        <div className="card mx-3 my-3" id="project-card">
            <div id="project-card-image">
                <img src="../kneadbread.jpg" className="card-img-top img-fluid" alt="TK Bakery" />
            </div>
            <div className="card-body">
                <h4 className="card-title">TK Bakery</h4>
                <p className="card-text">E-commerce site for an online bakery</p>
            </div>
            <div className="card-footer">
                <a href="https://ec2-54-151-82-200.us-west-1.compute.amazonaws.com:8443/" target="_blank">
                    <div style={{ display: 'inline-block' }}>
                        <i className="fab fa-aws fa-3x"></i>
                        <p>Website</p>
                    </div>
                </a>
                <a href="https://github.com/teekaygithub/tomsbakery" target="_blank">
                    <div style={{ display: 'inline-block' }}>
                        <i className="fab fa-github fa-3x"></i>
                        <p style={{ display: 'inline-block' }}>Source</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default TkBakery;