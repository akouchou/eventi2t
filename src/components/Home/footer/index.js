import React from 'react';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-text">
            
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Speakers</a>
                </li>
                <li>
                  <a href="#">Schedule</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <div className="copyright-text">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved by{" "}
                  <a href="" target="_blank">
                    I2TGroup
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
