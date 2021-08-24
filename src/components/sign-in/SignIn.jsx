import React, { useState } from 'react';

import Forminput from '../form-input/Form-input';
import Custombutton from '../custom-buttom/Custom-button';
import { auth, signInWithGoogle } from '../../firebase/Firebase';
import './signIn.scss';

function SignIn() {
  const [state, setstate] = useState({ email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;

    console.log(email);

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setstate({
        email: '',
        password: '',
      });
    } catch (err) {
      console.log(err);
    }
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

        <div className="buttons">
          <Custombutton type="submit"> Sign in </Custombutton>
          <Custombutton signInWithGoogle onClick={signInWithGoogle}>
            {' '}
            Sign in with Google
          </Custombutton>{' '}
        </div>
      </form>
    </div>
  );
}

export default SignIn;
