import React, { Fragment } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

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
                                <li className="active"><a className="nav-link text-dark"  href="#hero" style={{ fontSize: '15px' }}>Bienvenue</a></li>
                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#about">Programme</a></li>
                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#team">Contactez Nous</a></li>
                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#services">Apropos</a></li>
                                <li className="nav-item "><a className="nav-link text-dark"  style={{ fontSize:'15px' }} href="#services">Evénements passés</a></li>
                                <li className="active">
                                    <a className="nav-link text-dark"  href="#hero" style={{ fontSize: '15px' }}>
                                        <Button variant="danger" onClick={handleShow}>
                                            Réservation
                                        </Button>
                                    </a>
                                </li>
                            </ul>
                        </div> 
                    </div> 
                </nav>
            </header>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title> <p style={{textAlign:"center"}}>RESERVER VOTRE PLACE</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="i2tgroup@gmail.com" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group> 
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Réserver
                    </Button>
                </Modal.Footer>
            </Modal>
 
        </Fragment>
    );
}

export default Header;
