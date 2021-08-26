import React from 'react';
import { useDispatch } from 'react-redux';

import './collection-item.scss';

import Custombutton from '../custom-buttom/Custom-button';
import { addItem } from '../../redux/cart/cart.action';

function Collectionitem({ item, addItemv2 }) {
  const dispatch = useDispatch();

  // dispatch((item) => addItem(item));

  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Custombutton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </Custombutton>
    </div>
  );
}

export default Collectionitem;
