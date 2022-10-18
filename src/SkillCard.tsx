import React from 'react';

export interface iSkillCardProps {
    image: JSX.Element,
    text: string
}
export const SkillCard = (props: iSkillCardProps): JSX.Element => {
    return (
        <div className="col-md-3 skillcard" >
            <div className="card my-2">
                {props.image}
                <p className="card-text">{props.text}</p>
            </div>
        </div >
    );
}