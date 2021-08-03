import React from 'react';
import './custom-button.scss';

function Custombutton({ children, signInWithGoogle, ...otherProps }) {
  return (
    <button
      className={` ${signInWithGoogle ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Custombutton;
