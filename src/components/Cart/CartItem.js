import React from 'react';
import { TrashIcon } from '@heroicons/react/solid';

const CartItem = (props) => {
  const { id, name, img } = props.item;
  
  const deleteHandler = (id) => {
    props.onDeleteItemHandler(id);
  };

  return (
    <div className="cart-details">
      <img src={img} alt="" />
      <p>{name}</p>
      <button
        type="button"
        className="btn-delete"
        onClick={() => deleteHandler(id)}
      >
        <TrashIcon className="icon" />
      </button>
    </div>
  );
};

export default CartItem;
