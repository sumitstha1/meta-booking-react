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
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/menu"}>Menu</Link></li>
          <li><Link to={"/reservation"}>Reservation</Link></li>
          <li><Link to={"/order-online"}>Order Online</Link></li>
          <li><Link to={"/login"}>Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
