import React from "react";
import logo from "./assets/images/flower_logo.jpeg";
import Cart from "./Cart";
import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        <img src={logo} alt="logo image" />
        <nav>
          <a href="#">About</a>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Help</a>
        </nav>
        <Cart />
      </header>
    </div>
  );
}

export default Header;
