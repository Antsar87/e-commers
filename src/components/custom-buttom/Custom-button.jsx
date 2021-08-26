import React from 'react';
import './custom-button.scss';

function Custombutton({ children, signInWithGoogle, inverted, ...otherProps }) {
  return (
    <button
      className={` ${inverted ? 'inverted' : ''} ${
        signInWithGoogle ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Custombutton;
