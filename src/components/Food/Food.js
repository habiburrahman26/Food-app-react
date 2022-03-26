import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import './Food.css';

const Food = (props) => {
  const { name, img, price } = props.food;

  const addToCartHandler = (food) => {
    props.onAddToCart(food);
  };

  return (
    <div className="food">
      <div className="img-box">
        <img src={img} alt="" />
      </div>
      <div className="food-info">
        <p className="food-name">{name}</p>
        <p>Price: {price}Tk</p>
      </div>
      <button className="btn-cart" onClick={() => addToCartHandler(props.food)}>
        <p>Add to Cart</p>
        <ShoppingCartIcon className="icon-cart" />
      </button>
    </div>
  );
};

export default Food;
