import React from 'react';
import { TrashIcon } from '@heroicons/react/solid';

const CartItem = (props) => {
  const { name, img } = props.item;
  return (
    <div className="cart-details">
      <img src={img} alt="" />
      <p>{name}</p>
      <button type="button" className="btn-delete">
        <TrashIcon className="icon" />
      </button>
    </div>
  );
};

export default CartItem;
