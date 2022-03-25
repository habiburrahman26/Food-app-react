import React, { useEffect, useState } from 'react';

const Food = (props) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('foods.json')
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return <div></div>;
};

export default Food;
