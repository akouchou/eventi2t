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
import Footer from '../Home/footer';


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

        return loading ? (
          <Fragment>
            <section id="hero">
              <div className="hero-container">
                <div
                  id="heroCarousel"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div
                      className="carousel-item active"
                      style={{ backgroundImage: `url(${dataEvent.urlImage})` }}
                    >
                      <div className="carousel-container">
                        <div className="carousel-content">
                          <h2 className="animate__animated animate__fadeInDown">
                            Bienvenue <span>{dataEvent.titre}</span>
                          </h2>
                          <p className="animate__animated animate__fadeInUp">
                            {dataEvent.description}
                          </p>
                          {dataEvent.status == 3 ? (
                            <Button className="btn btn-primary" disabled>
                              Evenement passé
                            </Button>
                          ) : (
                            <Button
                              className="animate__animated animate__fadeInUp"
                              variant="danger"
                              onClick={handleShow}
                            >
                              Réservation
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Modal
              show={show}
              onHide={handleClose}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  {" "}
                  <p style={{ textAlign: "center" }}>RESERVER VOTRE PLACE</p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Addparticip id={id} event={dataEvent.titre} />
              </Modal.Body>
            </Modal>

            {dataEvent.status == 2 || dataEvent.status == 1 ? (
              <Countdown
                timeTillDate={dataEvent.date}
                timeFormat="YYYY MM DD, h:mm a"
              />
            ) : (
              <section class="counter-section bg-gradient">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="counter-text">
                        <h3>L'évènement n'est plus au programme</h3>
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="cd-timer" id="countdown">
                        <div className="cd-item">
                          <span>00</span>
                          <p>days</p>
                        </div>
                        <div className="cd-item">
                          <span>00</span>
                          <p>hours</p>
                        </div>
                        <div className="cd-item">
                          <span>00</span>
                          <p>minutes</p>
                        </div>
                        <div className="cd-item">
                          <span>00</span>
                          <p>seconds</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            <section class="home-about-section spad">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="ha-pic">
                      <section class="contact-section spad">
                        <div class="container">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="cs-map">
                                <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.38789495531!2d-118.19465514866786!3d34.03523211493029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf71ad83ff9f%3A0x518b28657f4543b7!2sEast%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1579763856144!5m2!1sen!2sbd"
                                  height="400"
                                  width="480"
                                  style={{ border: "0" }}
                                  allowfullscreen=""
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="ha-text">
                      <h2>À propos de la conférence</h2>
                      <p>{dataEvent.description}</p>
                      <ul>
                        <li>
                          <span class="icon_check"></span> Date :
                          <b> {dataEvent.date}</b>
                        </li>
                        <li>
                          <span class="icon_check"></span> Heure :
                          <b> {dataEvent.heure}</b>
                        </li>
                        <li>
                          <span class="icon_check"></span> Ville :
                          <b> {dataEvent.ville}</b>
                        </li>
                        <li>
                          <span class="icon_check"></span> Quartier :
                          <b> {dataEvent.quartier}</b>
                        </li>
                      </ul>
                      <a href="#" class="ha-btn">
                        Discover Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="team" className="team ">
              <Intervenants id={id} />
            </section>

            <Commentaires id={id} />

            <section id="services" className="services section-bg">
              <Partenaire id={id} />
            </section>
            <Footer />
          </Fragment>
        ) : (
          <div id="preloder">
            <div class="loader"></div>
          </div>
        );
    }

export default Event