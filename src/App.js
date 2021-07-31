import './App.css';
import React, { useState, useEffect } from 'react';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInAndSignOut from './pages/sign-in-and-sign-out/Sign-in-and-sign-out';
import Header from './components/header/Header';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/Firebase';

function App() {
  const [check, setcheck] = useState({ currentUser: null });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setcheck({
        currentUser: user,
      });
      console.log(user);
    });
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}
export default App;
