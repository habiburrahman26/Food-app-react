import React from 'react';
import './Food.css'

const Food = (props) => {
  const { name, img, price } = props.food;
  return (
    <div className="food">
      <img src={img} alt="" />
      <div className="food-info">
        <p className="food-name">{name}</p>
        <p>{price}Tk</p>
      </div>
      <button className="btn-cart">
        <p>Add To Cart</p>
      </button>
    </div>
  );
};

export default Food;
