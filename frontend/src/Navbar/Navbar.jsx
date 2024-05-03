import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../Components/Assets/logo.png';
import card_icon from '../Components/Assets/cart_icon.png';

import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>Style Savvy</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("Home")}>
          <NavLink to='/' activeClassName='active-link'>Home</NavLink>
          {menu === "Home" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Shop")}>
          <NavLink to='/shop' activeClassName='active-link'>Shop</NavLink>
          {menu === "Shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Saved")}>
          <NavLink to='/saved' activeClassName='active-link'>Saved</NavLink>
          {menu === "Saved" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Cart")}>
          <NavLink to='/cart' activeClassName='active-link'>Cart</NavLink>
          {menu === "Cart" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("Profile")}>
          <NavLink to='/profile' activeClassName='active-link'>Profile</NavLink>
          {menu === "Profile" ? <hr /> : null}
        </li>
        <div className='nav-login-cart'>
        <NavLink to='/login'><button>Login</button></NavLink>
       
      </div>
        <li>
          <Dropdown /> {/* Add the Dropdown component here */}
        </li>
      </ul>
     
    </div>
  );
}

export default Navbar;
