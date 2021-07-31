import React, { useState } from 'react';

import Forminput from '../form-input/Form-input';
import Custombutton from '../custom-buttom/Custom-button';
import { signInWithGoogle } from '../../firebase/Firebase';
import './signIn.scss';

function SignIn() {
  const [state, setstate] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    setstate({
      email: '',
      password: '',
    });
  };

  const onHandleChange = (e) => {
    const { value, name } = e.target;

    setstate({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <Forminput
          name="email"
          type="email"
          label="email"
          value={state.email}
          handleChange={onHandleChange}
          required
        />

        <Forminput
          name="password"
          type="password"
          value={state.password}
          label="password"
          handleChange={onHandleChange}
          required
        />

        <Custombutton type="submit"> Sign in </Custombutton>
        <Custombutton onClick={signInWithGoogle}>
          {' '}
          Sign in with Google
        </Custombutton>
      </form>
    </div>
  );
}

export default SignIn;
