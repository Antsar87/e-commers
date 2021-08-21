import './App.css';
import React, { useEffect, useState } from 'react';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInAndSignOut from './pages/sign-in-and-sign-out/Sign-in-and-sign-out';
import Header from './components/header/Header';
import { Switch, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, createUserProfileDocument } from './firebase/Firebase';

function App() {
  const [user] = useAuthState(auth);
  const [space, setspace] = useState({ currentUser: null });

  useEffect(() => {
    const datos = async () => {
      if (user) {
        let userRef = await createUserProfileDocument(user);

        let store = [];

        userRef.onSnapshot((snap) => {
          store.push({ currentUser: snap.id, ...snap.data() });
        });

        setspace(() => store);
      }
    };

    datos();
  }, [user]);

  console.log(space);

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
