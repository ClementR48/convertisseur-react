import React from 'react';

const Button = ({ open, manageClick }) => {

  
let cssClass = 'button';
if(open) {
  cssClass += ' button--open';
}

  return (
    <button className={cssClass} type="button" onClick={manageClick}>
      +
    </button>
  )
}

export default Button
