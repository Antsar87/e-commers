import './App.css';
import React, { useEffect, useState } from 'react';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInAndSignOut from './pages/sign-in-and-sign-out/Sign-in-and-sign-out';
import Header from './components/header/Header';
import { Switch, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, createUserProfileDocument } from './firebase/Firebase';
import { setCurrentUser } from './redux/user/user.action';
import { useDispatch } from 'react-redux';

function App() {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const Datos = async () => {
      if (user) {
        let userRef = await createUserProfileDocument(user);

        let store = [];

        userRef.onSnapshot((snap) => {
          store.push({ currentUser: snap.id, ...snap.data() });
        });

        dispatch(setCurrentUser(store));
      }
    };

    Datos();
  }, [user]);

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
