import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './cart-icon.scss';
import { ReactComponent as ShoppinIcon } from '../assets/shopping-bag.svg';

function CartIcon() {
  const [quantity, setquantity] = useState(0);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart); 

  useEffect(() => {
    setquantity({
      itemCount: cartItems.reduce(
        (accumulation, cartItem) => accumulation + cartItem.quantity,
        0
      ),
    });
  }, [cartItems])

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppinIcon className="shopping-icon" />
      <span className="item-count">{quantity.itemCount}</span>
    </div>
  );
}

export default CartIcon;
