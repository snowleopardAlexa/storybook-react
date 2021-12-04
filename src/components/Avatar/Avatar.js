import React from 'react';
import './avatar.css';

function Avatar(props) {

    const { variant = 'aqua', size='small', children, ...rest} = props

    return (
        <button className={`avatar ${variant} ${size}`} {...rest}>
            {children}
        </button>
    )
}

export default Avatar;