import React, { useState,useEffect, useContext } from "react";
import "./Header.css";
import logo from "../assets/u.png";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom"; 
import { cartContext } from "./CartContext";


const Header = () => {
 
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [menuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menuOpen);
  };

 
  const value  = useContext(cartContext)



  
  return (
    <>
      <div className="container">
        <ul className="whole-menu">
          {/* Menu Toggle Button */}
          <button className="list-icon first" onClick={toggleMenu}>
            {menuOpen ? <IoCloseSharp size={"30px"} /> : <HiMenu size={"30px"} />}
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <ul className="login">
              <li>
                <a href="#">LOGIN</a>
              </li>
              <li>
                <a href="#">REGISTRATION</a>
              </li>
            </ul>
          )}

          {/* Navigation Links */}
          <li className="list-menu">
            <Link to="/" className={isActive("/") ? "active" :""}>Home</Link>
        
          </li>
          <li className="list-menu">
            <Link to="/store" className={isActive("/store") ? "active" : ""}>Store</Link>
          </li>
          <li className="list-menu">
            <Link to="/about"  className={isActive("/about") ? "active" : ""}>About</Link>
          </li>
          <li className="list-menu">
            <img src={logo} alt="Logo" />
          </li>
          <li className="list-menu">
            <Link to="/blog"  className={isActive("/blog") ? "active" : ""}>Blog</Link>
          </li>
          <li className="list-menu">
            <Link to="/page"  className={isActive("/page") ? "active" : ""}>Page</Link>
          </li>
          <li className="list-menu">
            <Link to="/contact"  className={isActive("/contact") ? "active" : ""}>Contact</Link>
          </li>

        
          <li className="list-icon">
  <CiHeart size={"25px"} />
      <Link to="/cart" className="cart-link">
    <FiShoppingCart size={"25px"} />
    <span className="cart-count">{value.countItem}</span>
  </Link>
</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
