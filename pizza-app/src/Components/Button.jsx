import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames'

const Button = ({ onClick, className, outline, children }) => {
    console.log();
    return (
        <button
            onClick={onClick} className={classNames('button', className, { 'button--outline': outline, })}>
            {children}
        </button >

    )
}

Button.prototype = {
    onClick: PropTypes.func,
}

export default Button