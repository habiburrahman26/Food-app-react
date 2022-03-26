import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Shop.css';

const Shop = (props) => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('foods.json')
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const addToCart = (food) => {
    setCart((prevFood) => [...prevFood, food]);
  };

  return (
    <div className="shop-container">
      <div className="food-container">
        {foods.map((food) => (
          <Food key={food.id} food={food} onAddToCart={addToCart} />
        ))}
      </div>
      <div className="cart-container">
        <h2>Selected Items</h2>
        {cart.map((c) => (
          <Cart key={c.id} item={c} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
