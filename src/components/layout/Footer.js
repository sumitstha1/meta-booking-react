import React from 'react'
import './Footer.css'
import logo from './assets/logo-white.png'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='container grid'>
        <img src={logo} alt="Logo" />
        <nav className='important-links'>
          <h4>IMPORTANT LINKS</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
        <div className='footer-contact'>
          <h4>CONTACT US</h4>
          <address>
            <p><HiLocationMarker />Chabahil- 07, Kathmandu</p>
            <p><HiPhone />+977 9815980798</p>
            <p><HiMail />sumit.stha911@gmail.com</p>
          </address>
        </div>
        <div className='footer-connect'>
          <h4>SOCIAL MEDIA LINKS</h4>
          <a href="https://www.facebook.com"><BsFacebook /></a>
          <a href="https://www.twitter.com"><BsTwitter /></a>
          <a href="https://www.instagram.com"><BsInstagram /></a>
          <a href="https://www.linkedin.com"><BsLinkedin /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
