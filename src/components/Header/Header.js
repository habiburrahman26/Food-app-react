import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <nav className="nav-list">
      <h1>Food App</h1>
      <ul className="nav-items">
        <li className="nav-item">Shop</li>
        <li className="nav-item">Order</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Header;
