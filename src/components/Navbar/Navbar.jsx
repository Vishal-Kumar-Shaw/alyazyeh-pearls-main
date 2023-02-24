import React from 'react'
import './Navbar.css';
import logo from './images/logo.png';


const Navbar = () => {
  return (
    <div className='body-bg container'>
        
            <div className='logo'>
                <img src={logo} alt="Logo"/>
                <p>ALYAZYEH PEARLS</p>
            </div>
            <div className='menu'>
                <ul className='menus'>
                    <li className='links'><a href="/"> Home </a></li>
                    <li className='links'><a href="/"> Our Services </a></li>
                    <li className='links'><a href="/"> Jewellery </a></li>
                    <li className='links'><a href="/"> Gallery </a></li>
                    <li className='links'><a href="/"> Contact Us </a></li>
                </ul>
            </div>
        
    </div>
  )
}

export default Navbar;