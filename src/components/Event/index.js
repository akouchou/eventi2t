import React, { Component, Fragment, useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase'
import Countdown from '../Home/countdown/countdown.jsx'
import {Button, Modal, Form} from 'react-bootstrap';
import Addparticip from './AddParticip';
import { Link } from 'react-router-dom';
import Partenaire from './Partenaires';
import Intervenants from './Intervenants'
import Commentaires from './Commentaires'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import MapCard from './CardMaps';


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

        console.log(dataEvent.status);

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
                                {
                                    dataEvent.status == 3 ? <Button className="btn btn-primary" disabled>
                                    Evenement passé
                                                           </Button> : (
                                                   <Button className="animate__animated animate__fadeInUp" variant="danger" onClick={handleShow} >
                                                               Réservation
                                                   </Button>
                                                           )
                                }

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

                        <Addparticip id={id} event={dataEvent.titre}/>

                </Modal.Body>
               
                </Modal>

                {
                  
                        loading ?  ( dataEvent.status == 2 || dataEvent.status == 1) && ( <Countdown timeTillDate={ dataEvent.date } timeFormat="YYYY MM DD, h:mm a" />) : (
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
                            <li><i className="ri-check-double-line"></i> {dataEvent.date} </li>
                            <li><i className="ri-check-double-line"></i> {dataEvent.heure} </li>
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
                    <Intervenants id={id} />
                </section>
                   
                    <Commentaires id={id} />

                <section id="services" className="services section-bg" >
                    <Partenaire id={id}/>
                </section>

                 
            </Fragment>
        )
    }

export default Event