import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase'
import Countdown from '../Home/countdown/countdown.jsx'
import {Button, Modal, Form} from 'react-bootstrap';
import Addparticip from './AddParticip';
import { Link } from 'react-router-dom';
import Partenaire from './Partenaires';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import mapCard from './CardMaps';


const Event = ({ match }) =>  {



    const [show, setShow] = useState(false)
  
        const handleShow = () => {
           setShow(true)
        }

        const handleClose = () => {
           setShow(false)
        }
        
        const firebase = useContext(FirebaseContext)
        const [dataEvent, setDataEvent] = useState([])
        const [loading, setLoading] = useState(false)

        const id = match.params.id

        useEffect(() => {
            const fetchDataEvent = async () => {
                await firebase.detailEvent().doc(id).get()
                .then(doc => {
                    dataEvent.push(doc.data())
                    dataEvent.forEach(x => setDataEvent(x))
                    setLoading(true)
                })
            }
    
            fetchDataEvent()
        }, []);

        console.log(dataEvent.titre);

        return(  
            <Fragment>
                <section id="hero">
                    <div className="hero-container">
                    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">


                        <div className="carousel-inner" role="listbox">

                        
                        <div className="carousel-item active" style={{ backgroundImage: `url(${dataEvent.urlImage})` }} >
                            <div className="carousel-container">
                            <div className="carousel-content">
                                <h2 className="animate__animated animate__fadeInDown">Bienvenue  <span>{dataEvent.titre}</span></h2>
                                <p className="animate__animated animate__fadeInUp">{dataEvent.description}</p>
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

                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title> <p style={{textAlign:"center"}}>RESERVER VOTRE PLACE</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                        <Addparticip id={id} />

                </Modal.Body>
               
                </Modal>

                {
                    loading ? <Countdown timeTillDate={ dataEvent.date } timeFormat="MM DD YYYY, h:mm a" /> : (
                        <div className="spinner-border text-center" style={{float: "center"}} role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                    )

                }
                
                <section id="about" className="about section-bg">
                    <div className="container">

                        <div className="row content">
                        <div className="col-lg-6">
                            <h3>Lieu Evenement: { dataEvent.ville } </h3>
                            <Link className="btn btn-primary" to={`/map/${id}`}>visualiser</Link>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                            { dataEvent.description }
                            </p>
                            <ul>
                            <li><i className="ri-check-double-line"></i> {dataEvent.ville}</li>
                            <li><i className="ri-check-double-line"></i> {dataEvent.quartier}</li>
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
                                    <div className="pic"><img src="../assets/img/team/team-3.jpg" className="img-fluid" alt=""/></div>
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
                                    <div className="pic"><img src="../assets/img/team/team-4.jpg" className="img-fluid" alt=""/></div>
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

                <section id="services" className="services section-bg" >
                    <Partenaire id={id}/>
                </section>

                 
            </Fragment>
        )
    }

export default Event