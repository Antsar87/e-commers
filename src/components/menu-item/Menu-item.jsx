import React from 'react';
import { useHistory } from 'react-router-dom';
import './menu-item.scss';

const Menuitem = ({ title, imageUrl, size }) => {
  let histor = useHistory();

  const historia = () => histor.push(`/${title}`);
  
  return (
    <div className={`${size} menu-item`} onClick={historia}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">shop</span>
      </div>
    </div>
  );
};

export default Menuitem;
