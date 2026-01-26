import React, { useState } from 'react'
import logo from '../../assets/logo4.png';
import logo2 from '../../assets/email.png';
import './Header.css';

function Header() {

  const [open, setOpen] = useState(false);


  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={logo} alt="header-logo" />
      </div>
      <div className='header-parts'>
        <div className="user">
          <img src={logo2} alt="header-logo2" />
        </div>
        <div className="search">
          <input type="search" name="search" id="search" placeholder='Search...' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="menu">
          <i onClick={() => setOpen(!open)} className={open ? "close" : "fa-solid fa-bars"}></i>
          <i onClick={() => setOpen(!open)} className={!open ? "close" : "fa-solid fa-xmark"}></i>
          <div className={`side-menu ${!open ? "close" : ""}`}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contect</li>
              <li>Login</li>
              <li>Logout</li>
            </ul>
          </div>

          {open && (
              <div
              className="overlay"
              onClick={() => setOpen(false)}
            ></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header