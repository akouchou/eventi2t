import React, { Component, Fragment } from 'react';
import Countdown from '../Home/countdown/countdown.jsx'
import {Button, Modal, Form} from 'react-bootstrap';


class Event extends Component {

    state = {
        show: false
    }

    render() {

        const handleShow = () => {
            this.setState({
                show:true
            })
        }

        const handleClose = () => {
            this.setState({
                show:false
            })
        }

        return(  
            <Fragment>
                <section id="hero">
                    <div className="hero-container">
                    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">


                        <div className="carousel-inner" role="listbox">

                        
                        <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/slide/slide-1.jpg)' }}>
                            <div className="carousel-container">
                            <div className="carousel-content">
                                <h2 className="animate__animated animate__fadeInDown">Bienvenue  <span>Titre Evenement</span></h2>
                                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <Button className="animate__animated animate__fadeInUp" variant="danger" onClick={handleShow} >
                                            Réservation
                                </Button>

                            </div>
                            </div>
                        </div>

                        </div>

                    
                    </div>
                    </div>
                </section>

                <Modal show={this.state.show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
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

                <Countdown timeTillDate="10 26 2020, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />

                
                <section id="about" className="about section-bg">
                    <div className="container">

                        <div className="row content">
                        <div className="col-lg-6">
                            <h2>Lieu Evenement </h2>
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                            </p>
                            <ul>
                            <li><i className="ri-check-double-line"></i> Ville</li>
                            <li><i className="ri-check-double-line"></i> Quartier</li>
                            <li><i className="ri-check-double-line"></i> Date</li>
                            <li><i className="ri-check-double-line"></i> Heure</li>
                            </ul>
                            <p className="font-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>
                        </div>
                        </div>

                    </div>
                </section>

                <section id="team" className="team ">
                    <div className="container">

                        <div className="section-title">
                            <span style={{opacity: 0.1, color:"black"}} >Intervenant</span>
                            <h2>Intervenant</h2>
                             <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mt-4">
                                <div className="member d-flex align-items-start">
                                    <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
                                    <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mt-4">
                                <div className="member d-flex align-items-start">
                                    <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/></div>
                                    <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>  
                </section>

                <section id="services" className="services section-bg">
                    <div className="container">

                        <div className="section-title">
                        <span style={{opacity: 0.1, color: "black"}} >Partenaires</span>
                        <h2>Partenaires</h2>

                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="icon-box">
                                <i className="icofont-computer"></i>
                                <h4><a href="#">Lorem Ipsum</a></h4>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4 mt-md-0">
                                <div className="icon-box">
                                <i className="icofont-chart-bar-graph"></i>
                                <h4><a href="#">Dolor Sitema</a></h4>
                                </div>
                            </div>
                    
                        </div>

                    </div>
               </section>

                 
            </Fragment>
        )
    }
}

export default Event