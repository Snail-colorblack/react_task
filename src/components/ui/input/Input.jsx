import React from 'react';

const Input = ({children,styleClass, ...props}) => {
    return (
        <input {...props} >{children}</input>
    );
}

export default Input;
