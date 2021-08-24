import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase/Firebase';
import { setSignOut } from '../../redux/user/user.action';

import './header.scss';

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const adios = () => {
    auth.signOut()
    dispatch(setSignOut())
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={(() => adios())}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
export default Header;
