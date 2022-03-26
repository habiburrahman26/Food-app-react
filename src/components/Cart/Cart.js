import React, { useState } from 'react';
import './Cart.css';
import CartItem from './CartItem';

const Cart = ({ cart, onRemoveCart }) => {
  const [chooseItem, setChoseItem] = useState('');

  const ChoseOneForMeHandler = () => {
    if (cart.length < 4) {
      alert('You have to selected at least 4 item');
    } else {
      const length = cart.length;
      const random = Math.floor(Math.random() * length);
      setChoseItem(`${cart[random].name} is suitable for you.`);
    }
  };

  const onClick = () => {
    setChoseItem('');
    onRemoveCart();
  };

  return (
    <>
      <h2 className="cart-heading">Selected Items</h2>
      {cart.map((c) => (
        <CartItem key={c.id} item={c} />
      ))}
      <p className="choose-item">
        <span>{chooseItem}</span>
      </p>
      <button className="btn btn-choose-one" onClick={ChoseOneForMeHandler}>
        Choose 1 for me
      </button>

      <button className="btn btn-choose-again" onClick={onClick}>
        Choose Again
      </button>
    </>
  );
};

export default Cart;
