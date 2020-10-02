import React, { Fragment } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FormGroup, Input } from 'reactstrap'

function Header() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                <li className="active"><Link to="/" className="nav-link text-dark"  href="#hero" style={{ fontSize: '15px' }}>Bienvenue</Link></li>
                                
                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#team">Contactez Nous</a></li>
                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#services">Apropos</a></li>
                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#services">Evénements a venir</a></li>
                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#services">Evénements passés</a></li>
                                <li className="nav-item"><Link to="/faq" className="nav-link text-dark"  href="#hero" style={{ fontSize: '15px' }}>FAQ</Link></li>
                                
                            </ul>
                        </div>
                    </div> 
                </nav>
            </header>
 
        </Fragment>
    );
}

export default Header;
