import React from 'react';
import './card.css';

function Card(props) {

    const { variant = 'aqua', children, ...rest} = props

    return (
        <card className={`card ${variant}`} {...rest}>
            {children}
        </card>
    )
}

export default Card;