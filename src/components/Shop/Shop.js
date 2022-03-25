import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Shop = (props) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('foods.json')
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return <div>
      {foods.map(food=><Food key={food.id} food={food}/>)}
  </div>;
};

export default Shop;