import React, { useState } from 'react';

import Forminput from '../form-input/Form-input';
import Custombutton from '../custom-buttom/Custom-button';

import { auth, createUserProfileDocument } from '../../firebase/Firebase';

import './signUp.scss';

function Signup() {
  const [signs, setsign] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = signs;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Ta malo');
      return;
    }

    try {
      const { user } = auth
        .createUserWithEmailAndPassword(email, password)
        .then((results) =>
          results.user.updateProfile({ displayName: displayName })
        );

      await createUserProfileDocument(user, { displayName: displayName });

      setsign({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log('Mal');
    }
  };

  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setsign({
      ...signs,
      [name]: value,
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>

      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <Forminput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          handleChange={onhandleChange}
          required
        />

        <Forminput
          type="email"
          name="email"
          value={email}
          onChange={onhandleChange}
          label="Email"
          required
        />

        <Forminput
          type="password"
          name="password"
          value={password}
          onChange={onhandleChange}
          label="Password"
          required
        />

        <Forminput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onhandleChange}
          label="confirm Password"
          required
        />

        <Custombutton type="submit">Sign Up</Custombutton>
      </form>
    </div>
  );
}

export default Signup;

export function sendEmailVerification() {
  throw new Error('Function not implemented.');
}
