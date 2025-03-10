import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>NS Hostel</h3>
          <p>Your perfect stay in the heart of the city.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/booking">Book Now</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>NS Hostel and PG</p>
          <p>Dahmi Kalan</p>
          <p>Jaipur, Rajasthan 303007</p>
          <p>Phone: +91 9799605406</p>
          <p>Email: nshostel@gmail.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NS Hostel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 