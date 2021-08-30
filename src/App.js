import './App.css';
import React, { useEffect, useState } from 'react';
import { setCurrentUser } from './redux/user/user.action';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInAndSignOut from './pages/sign-in-and-sign-out/Sign-in-and-sign-out';

import { GetIp } from './redux/user/user.action';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  createUserProfileDocument,
  // firestore,
} from './firebase/Firebase';

import { css } from '@emotion/react';
import CircleLoader from 'react-spinners/CircleLoader';

function App() {
  const [loading, setloading] = useState(true);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  let ipv4 = [];

  const gettingIp = async () => {
    await fetch('https://api.ipify.org?format=jsonp?callback=?', {
      method: 'GET',
      headers: {},
    })
      .then((res) => {
        return res.text();
      })
      .then((ip) => {
        ipv4.push(ip);
      });

    let fetching = await fetch(`http://ip-api.com/json/${ipv4}`);
    let json = await fetching.json();

    // firestore.collection('users').add({
    //   ...json,
    // });

    ipv4.push(json);
  };

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

  useEffect(() => {
    dispatch(GetIp(ipv4));
    Datos();
    gettingIp();
    setTimeout(() => setloading(false), 3000)
    
  }, [user]);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <CircleLoader
            color={'#272524'}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      ) : (
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/signin">
              {currentUser ? <Redirect to="/" /> : <SignInAndSignOut />}
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}
export default App;
