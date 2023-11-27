import React from 'react'
import  Logo from "../../assets/images/logo.png"
import "../../App.css"

function Header() {
  return (
    <header class="header" id="header">
      <div class="container">
        <div class="header_section">
          <a href=""
            ><img class="logo" src={Logo} alt="logo"
          /></a>
          <div>
            <ul class="navbar" id="navbar">
              <li><a href="index.html">Home</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li class="lg-bag">
                <a href="cart.html"><i class="bx bx-shopping-bag"></i></a>
              </li>
              <a href="#"><i class='bx bx-x' id="close"></i></a>
            </ul>
          </div>
          <div class="mobile">
            <a href="cart.html"><i class="bx bx-shopping-bag"></i></a>
            <i class='bx bx-menu' id="bar"></i>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header