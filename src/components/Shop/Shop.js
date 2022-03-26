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
    const existItem = cart.find((c) => c.id === food.id);

    if (existItem) {
      alert('This item is already added');
    } else if (cart.length > 3) {
      alert("You can't select more than 4 items");
    } else {
      setCart((prevFood) => [...prevFood, food]);
    }

  };

  const removeCart = () => {
    setCart([]);
  };

  return (
    <div className="shop-container">
      <div className="food-container">
        {foods.map((food) => (
          <Food key={food.id} food={food} onAddToCart={addToCart} />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} onRemoveCart={removeCart} />
      </div>
    </div>
  );
};

export default Shop;
