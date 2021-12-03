import React from 'react';
import './buttonrounded.css';

function Button(props) {

    const { variant = 'aqua', children, ...rest} = props

    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;