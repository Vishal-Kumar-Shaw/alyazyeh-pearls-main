import React from 'react';
import logo from './logo.png'
import './Footer.css'
import {GiCutDiamond} from "react-icons/gi";
import { MdLocationPin, MdPhone, MdEmail} from "react-icons/md";
export default function App() {
  return (
    <div className="footer-bg-down">
    <hr className='footer-hr'/>
      <div className='footer-main-content'>
            <div className='footer-child-column logo-section'>
              <img src={logo} alt="company-logo" className='company-logo'/>
              <h2 className='logo-heading-footer'>ALYAZYEH PEARLS</h2>
              <p className='footer-logo-content'>Alyazyeh Pearls is a company dedicated to the exercise of Prospecting,Recognition, Exploration, Lapidation and Marketing 
of diamonds.</p>
            </div>
            <div className='footer-child-column footer-child-first-div footer-special'>
              <h2 className='footer-content-heading'>Quick Links</h2>
              <div><GiCutDiamond className='footer-icons'/><a href='/JewelryS'>Diamond Types</a></div>
              <div><GiCutDiamond className='footer-icons'/><a href='/JewelryS'>Jewellary</a></div>
              <div><GiCutDiamond className='footer-icons'/><a href='/JewelryS'>Gallery</a></div>
            </div>
            <div className='footer-child-column footer-child-first-div'>
                <h2 className='footer-content-heading'>Our Services</h2>
                <div><GiCutDiamond className='footer-icons'/><a href='/Service'>Cutting & Polishing</a></div>
                <div><GiCutDiamond className='footer-icons'/><a href='/Service'>Designing</a></div>
                <div><GiCutDiamond className='footer-icons'/><a href='/Service'>Manufacturing</a></div>
            </div>
            <div className='footer-child-column footer-child-first-div footer-last-div'>
                <h2 className='footer-content-heading'>Contact Us</h2>
                <address><MdLocationPin className='footer-icons'/><a href='#'>Office G/05, Owned by FAHAD AHMAD <span className='second-line-address'>ABDULKARIM ALZAROUNI, Hor Al Anz</span></a></address>
                <div><MdPhone className='footer-icons'/><a href='#'>+971 544444210</a></div>
                <div><MdEmail className='footer-icons'/><a href='#'>info@AlyazyehPearls.com</a></div>
            </div>
      </div>
      <div className='footer-copyright'>
      <small> Copyright &copy; ALYAZYEH FOR PEARLS & PRECIOUS STONES TRADING CO. L.L.C</small>
      </div>
    </div>
  );
}