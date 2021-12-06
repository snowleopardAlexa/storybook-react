import React from 'react';
import './checkbox.css';

function Checkbox(props) {

    const { variant = 'aqua-checkbox', children, ...rest} = props

    return (
        <card className={`checkbox ${variant}`} {...rest}>
            {children}
        </card>
    )
}

export default Checkbox;