import React from 'react';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="justify-content-space-between text-center">
          <a href="#" className="m-2"style={{ display: "inline-block" }}>
              <img src="../assets/img/partner-logo/logo-1.png" alt=""/>
          </a>
          <a href="#" className="ml-3 mr-3"style={{ display: "inline-block" }}>
              <img src="../assets/img/partner-logo/logo-2.png" alt=""/>
          </a>
          <a href="#" className="ml-3 mr-3"style={{ display: "inline-block" }}>
                
               <img src="../assets/img/partner-logo/logo-3.png" alt=""/>
          </a>
          <a href="#" className="ml-3 mr-3"style={{ display: "inline-block" }}>
              <img src="../assets/img/partner-logo/logo-4.png" alt=""/>
          </a>
           <a href="#" className="ml-3 mr-3"style={{ display: "inline-block" }}>
              <img src="../assets/img/partner-logo/logo-5.png" alt=""/>
           </a>
            <a href="#" className="ml-3 mr-3"style={{ display: "inline-block" }}>
                      
              <img src="../assets/img/partner-logo/logo-6.png" alt=""/>
            </a>
            </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="footer-text">
                          <div className="ft-logo">
                            <a href="#" className="footer-logo"><img src="img/footer-logo.png" alt=""/></a>
                        </div>
                            <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Speakers</a></li>
                              <li><a href="#">Schedule</a></li>
                              <li><a href="#">Blog</a></li>
                              <li><a href="#">Contact</a></li>
                            </ul>
                            <div className="copyright-text"><p>
                              
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved by <a href="" target="_blank">I2TGroup</a>
                             </p></div>
                         
                          </div>
                        </div>
                      </div>
                    </div>
    </footer>
  );
}

export default Footer;
