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
                <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "white" }}>
                    <div className="container">
                       <div class="logo">
                        <a href="">
                            <img src="../assets/img/logo/logo.jpg" width="100px" height="50px" alt=""/>
                        </a>
                    </div>
                        <button className="navbar-toggler bg-gradient"  type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-dark" ></span>
                        </button>
                        <div className="nav-menu mennu collapse navbar-collapse" id="main_nav">
                           
                            <ul className="navbar-nav mainmenu ml-auto">
                                <li className="active">
                                <Link to="/" className="nav-link text-dark"  href="" style={{ fontSize: '15px' }}>Bienvenue</Link></li>

                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#team">Contactez Nous</a></li>
                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#hero">Evénements a venir</a></li>
                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#services">Evénements passés</a></li>
                                <li className="nav-item "><Link className="nav-link text-dark"  style={{ fontSize:'15px' }} to="/faq">Faq</Link></li>
                            </ul>
                        
                            
                        </div>

                    </div> 
                </nav>
            </header>
 
        </Fragment>
    );
}

export default Header;
