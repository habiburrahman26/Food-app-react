import React, { useState } from 'react';
import './Cart.css';
import CartItem from './CartItem';

const Cart = ({ cart, onRemoveCart, onDeleteCart }) => {
  const [chooseItem, setChoseItem] = useState('');

  const ChoseOneForMeHandler = () => {
    if (cart.length < 2) {
      alert('You have to selected at least 2 item');
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

  const deleteItemHandler = (id) => {
    onDeleteCart(id);
  };

  return (
    <div className="cart">
      <h2 className="cart-heading">Selected Items</h2>
      {cart.map((c) => (
        <CartItem key={c.id} item={c} onDeleteItemHandler={deleteItemHandler} />
      ))}
      <p className="choose-item">{chooseItem}</p>
      <button className="btn btn-choose-one" onClick={ChoseOneForMeHandler}>
        Choose 1 for me
      </button>

      <button className="btn btn-choose-again" onClick={onClick}>
        Choose Again
      </button>
    </div>
  );
};

export default Cart;
