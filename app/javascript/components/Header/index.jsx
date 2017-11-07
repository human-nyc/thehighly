import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../Logo'

import styles from './header.css'

const Header = ({ openNavigation, isHomePage }) => (
  <header className="header">
    <div className="header__inner">
      <div className="menu-button-area"></div>
        {!isHomePage && <Link className="mainLink about-link caps" to="/about">About</Link>}
      <div className="logo-area">
        <Logo />
      </div>
        {!isHomePage && <Link className="mainLink caps" to="/recommended/bay-area">The Highly Recommended</Link>}
      <div className="menu-button-area">
        <button className="menu-button"onClick={openNavigation}>Menu</button>
      </div>
    </div>
  </header>
)

export default Header