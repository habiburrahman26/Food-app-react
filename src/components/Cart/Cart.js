import React from 'react';
import './Cart.css';
import CartItem from './CartItem';

const Cart = ({ cart,onRemoveCart }) => {
  return (
    <>
      <h2>Selected Items</h2>
      {cart.map((c) => (
        <CartItem key={c.id} item={c} />
      ))}
      <button className="btn btn-choose-one">Choose 1 for me</button>

      <button className="btn btn-choose-again" onClick={onRemoveCart}>
        Choose Again
      </button>
    </>
  );
};

export default Cart;
