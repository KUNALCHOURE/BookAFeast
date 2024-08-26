import React from 'react';
import './Footer.css'; 

export default function Footer(){
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section about-us">
          <h4>About Us</h4>
          <p>
            BookAFeast is your ultimate destination for discovering and booking the best dining experiences. 
          </p>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section follow-us">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BookAFeast. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

