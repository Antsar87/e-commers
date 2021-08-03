import './App.css';
import React, { useEffect } from 'react';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInAndSignOut from './pages/sign-in-and-sign-out/Sign-in-and-sign-out';
import Header from './components/header/Header';
import { Switch, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/Firebase';

function App() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}
export default App;
