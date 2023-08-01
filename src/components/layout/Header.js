import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './assets/logo.png'
import { FaHamburger } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <nav className='container grid navBar'>
        <Link to={"/"} className='littlelemon-img'>
          <img src={logo} alt='LittleLemon Logo' />
        </Link>
        <button className='navbar-burger'><FaHamburger /></button>
        <ul className='navbar-link-list'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/"}>About</Link></li>
          <li><Link to={"/"}>Menu</Link></li>
          <li><Link to={"/"}>Reservation</Link></li>
          <li><Link to={"/"}>Order Online</Link></li>
          <li><Link to={"/"}>Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
