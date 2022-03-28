import React from 'react';
import './Button.css';
const Buttons = ({type,title}) => {
    return (
        <div className="button__container">
            <button type={type}>{title}</button>
        </div>
    )
}
export default Buttons;
