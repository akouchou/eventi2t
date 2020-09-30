import React, {Fragment, useContext, useState, useEffect} from 'react';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Carousel from './carousel/index'
import Contact from './contact/index'
import Videos from './video/index';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { FirebaseContext } from '../Firebase'
import Slider from "react-slick";
import Footer from './footer';

const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const firebase = useContext(FirebaseContext)

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchDataEvent = async () => {
            await firebase.selectEvent().onSnapshot(data => {
                setData(data.docs.map(doc => ({...doc.data(), id: doc.id })));
                setLoading(true)
            })
        }

        fetchDataEvent()
    }, []);


    return(
       <Fragment>
           <Carousel data={data} loading={loading} />
           <div className="justify-content-space-between mt-3 ">
                {
                    data.map(event => (
                        event.status == 1 && (
                                <div style={{ display: "block", textAlign: "center"}}>
                                    <video src={event.video} height="300" width="1000px" controls="controls" className="container" />
                                </div>
                        )
                    ))
                }
            </div>


                <div className="justify-content-space-between mt-3 ">
                    <div style={{ display: "block", textAlign: "center"}}>
                        <h3>Evènements A Venir</h3>
                        <h1 style={{ display: "inline-block" , width: "150px", height: "5px", backgroundColor: "#e74c3c" }} ></h1> <br/>
                        <OwlCarousel className="owl-theme" loop margin={5} nav>
                          {  (  data.map(event => (
                    
                              event.status == 2 && (
                                <div class="item" >
                               <Card style={{ width: '20rem'}} className="m-2">
                                    <Card.Img variant="top" src={event.urlImage} style={{ height:'270px' }} className="card-mg-top"/>
                                    <Card.Body className="bg-gradient" >
                                        <Card.Title style={{ fontSize:'16px', color: 'white' }}> {event.titre} </Card.Title>
                                        <Card.Text style={{color: 'white'}}>
                                        {event.date}
                                        </Card.Text>
                                        <Link to={`/event/${event.id}`} className="btn btn-light">Plus d'infos</Link>
                                    </Card.Body>
                              </Card>            
                

                            </div>
                              ) 
                  
                    ))
                    )
                    }
                        </OwlCarousel>   
                    
                    </div>
                 
                </div>

                <div className="justify-content-space-between mt-3" style={{ marginTop: "35px"}}>
                
                   
              
                    <div style={{ display: "block", textAlign: "center"}}>
                        <h3>Evènements Passés</h3>
                        <h1 style={{ display: "inline-block" , width: "150px", height: "5px", backgroundColor: "#e74c3c" }} ></h1> <br/>
                        <OwlCarousel className="owl-theme" loop margin={5} nav>
                          {  (  data.map(event => (
                              event.status == 3 && (                           
                                      
                                        <div class="item">
                                           <Card style={{ width: '20rem'}} className="m-1">
                                                <Card.Img variant="top" src={event.urlImage} style={{ height:'270px' }} className="card-mg-top"/>
                                                <Card.Body className="bg-gradient">
                                                    <Card.Title style={{ fontSize:'16px', color: 'white' }}> {event.titre} </Card.Title>
                                                    <Card.Text style={{color: 'white'}}>
                                                    {event.date}
                                                    </Card.Text>
                                                    <Link to={`/event/${event.id}`} className="btn btn-light" >Plus d'infos</Link>
                                                </Card.Body>
                              </Card>
                                        </div>                                                          
                                
                              )
                  
                    ))
                    ) 
                    }
                   </OwlCarousel>   
                    </div>
                </div>
           <Contact />

           <Footer/>
       </Fragment>
    )
}

export default Home



