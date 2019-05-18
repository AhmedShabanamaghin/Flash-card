import React from 'react';
import './Card.css';

const Card = props => (
    <div className="card-container">
        <div className="card">
            <div className="front">{props.word}</div>
            <div className="back">{props.def}</div>
        </div>
    </div>
)

export default Card