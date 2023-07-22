import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Header() {
  return (
    <div>
  <header className="site-navbar py-4" role="banner">
    <div className="container">
      <div className="d-flex align-items-center">
        <div className="site-logo">
          <a href="index.html">
            <img src="assets/images/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="ml-auto">
          <nav className="site-navigation position-relative text-right" role="navigation">
            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
              <li><NavLink to="/" className="nav-link">Home</NavLink></li>
              <li><NavLink to="matches.html" className="nav-link">Matches</NavLink></li>
              <li><NavLink to="/signup" className="nav-link">SignUp</NavLink></li>
              <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
              <li><NavLink to="/addMatch" className="nav-link">Add Match</NavLink></li>
              <li><NavLink to="/tablematch" className="nav-link">Table Match</NavLink></li>
            </ul>
          </nav>
          <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span className="icon-menu h3 text-white" /></a>
        </div>
      </div>
    </div>
  </header>
</div>

  )
}
