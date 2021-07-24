import React from 'react';
import "./Homepage.scss"

function Homepage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">shop</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">jackets</h1>
            <span className="subtitle">shop</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">sneakers</h1>
            <span className="subtitle">shop</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">women</h1>
            <span className="subtitle">shop</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">mens</h1>
            <span className="subtitle">shop</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
