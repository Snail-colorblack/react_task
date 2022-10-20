import React, { Children } from 'react';

const Button = ({children,styleClass, ...props}) => {
    return (
        <button {...props} >{children}</button>
    );
}

export default Button;
