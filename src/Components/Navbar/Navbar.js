import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbarwork">
      <div>
        <img className="logo"
          src="https://www.pentadsecurities.com/static/media/main_logo.e25b3d49fea3aafefb995baa84be4516.svg"
          alt=""
        />
      </div>
      <div className="navalign">
        <ul className="navbar-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Platforms</a></li>
          <li><a href="#">Attention investors</a></li>
          <li><a href="#">Contact us</a></li>
          <li><span className="separator">|</span></li>
          <li ><a href="#">Open an Account</a></li>
          <li className="dropdown">
            <button className="login-button">Login</button>
            <div className="dropdown-content">
              <a href="#"><i className="fa-sharp fa-solid fa-pen"></i> Pen</a>
              <a href="#"><i className="fa-solid fa-book"></i> Book</a>
              <a href="#"><i className="fa-brands fa-simplybuilt"></i> Evote</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
