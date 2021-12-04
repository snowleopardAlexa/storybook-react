import React from 'react';
import './Input.css'

function Input (props) {
    const { size = 'medium', variant='aqua-input', ...rest } = props

    return (
        <input className={`input ${size} ${variant}`} {...rest} />
    )
}

export default Input;