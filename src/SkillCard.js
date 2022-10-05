import React from 'react';

function SkillCard(props) {
    return (
        <div className="col-md-3 skillcard">
            <div className="card my-2">
                {props.image}
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
}

export default SkillCard;