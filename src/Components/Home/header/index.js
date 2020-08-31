import React, { Fragment } from 'react';

function Header() {
  return (
      <Fragment>
          <header>
              <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark bg-light">
                  <div className="container">
                      <a className="navbar-brand text-dark" style={{ fontSize: '20px' }}  href="#">I2T<span>Event</span></a>
                      <button className="navbar-toggler" style={{ backgroundColor: '#e74c3c' }} type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon text-dark" ></span>
                      </button>
                      <div className="collapse navbar-collapse" id="main_nav">
                          <ul className="navbar-nav ml-auto">
                              <li className="active"><a className="nav-link text-dark"  href="#hero" style={{ fontSize: '15px' }}>Bienvenue</a></li>
                              <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#about">Programme</a></li>
                              <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#team">Contactez Nous</a></li>
                              <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#services">Apropos</a></li>
                              <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#services">Evénements passés</a></li>
                          </ul>
                      </div> 
</div> 
</nav>
          </header>
 
      
    </Fragment>
  );
}

export default Header;
