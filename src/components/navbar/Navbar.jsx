import React from 'react'
import { Outlet, Link } from "react-router-dom";
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <div><img className="logo-img" src='./logo.jpg' alt='Next-Decade logo' /></div>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/shop" className="nav-link px-2 text-white">Shop</Link></li>
          <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
          <li><Link to="/portfolio" className="nav-link px-2 text-white">Portfolio</Link></li>
          <li><Link to="/about" className="nav-link px-2 text-white">About Us</Link></li>
          <li><Link to="/contact" className="nav-link px-2 text-white">Contact Us</Link></li>
        </ul>

        <SearchBar/>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar