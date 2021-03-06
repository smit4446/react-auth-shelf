import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/shelf">
            The Shelf
          </Link>
        </li>
        <li>
          <Link to="/form">
            Spice up your life!
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
