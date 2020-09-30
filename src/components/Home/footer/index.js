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
                  <Link to="/">Bienvenue</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <a href="#team">Contact</a>
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
