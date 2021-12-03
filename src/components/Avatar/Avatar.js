import React from 'react';
import './avatar.css';

function Avatar(props) {

    const { variant = 'aqua', children, ...rest} = props

    return (
        <button className={`avatar ${variant}`} {...rest}>
            {children}
        </button>
    )
}

export default Avatar;