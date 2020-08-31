import React, { Fragment } from 'react';
import Carousel from '../carousel';

function Header() {
  return (
      <Fragment>
          <button type="button" className="mobile-nav-toggle d-lg-none"><i className="icofont-navigation-menu"></i></button>
    <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center">

              <div className="logo mr-auto">
                  <h1 className="text-light"><a href="index.html">I2T<span>Evénement</span></a></h1>
            
                    </div>

                  <nav className="nav-menu d-none d-lg-block" id="topbar">
                      <ul>
                          <li className="active"><a href="#header">Bienvenue</a></li>
                          <li><a href="#about">Programme</a></li>
                          <li><a href="#team">Contactez Nous</a></li>
                          <li><a href="#team">Apropos</a></li>
                          <li><a href="#services">Evénements passés</a></li>
                      </ul>
                  </nav>
            </div>
    </header>
 
        <Carousel/>
    </Fragment>
  );
}

export default Header;
