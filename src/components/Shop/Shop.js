import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Shop.css'

const Shop = (props) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('foods.json')
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="food-container">
        {foods.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </div>
      <div className="cart-container">cart</div>
    </div>
  );
};

export default Shop;
