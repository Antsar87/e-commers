import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import Signup from '../../components/sign-up/SignUp';
import './sign-in-and-sign-out.scss';

function SignInAndSignOut() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
}

export default SignInAndSignOut;
