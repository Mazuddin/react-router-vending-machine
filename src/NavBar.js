import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Soda" className="nav-link">
            Coke
          </Link>
        </li>
        <li>
          <Link to="/doritos" className="nav-link">
            Doritos
          </Link>
        </li>
  
        <li>
          <Link to="/Chips" className="nav-link">
            Chips
          </Link>
        </li>
        <li>
          <Link to="/Monster" className="nav-link">
            Monster
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
