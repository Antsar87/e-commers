import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-buttom/Custom-button';
import CartItem from '../cart-item/Cart-Item';
import { useSelector } from 'react-redux';

function CartDropdown() {
  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
