import React, {Fragment, useContext, useState, useEffect} from 'react';
import Carousel from './carousel/index'
import Contact from './contact/index'
import Videos from './video/index';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import SearchBar from './searchBar/searchBar.jsx'

import { FirebaseContext } from '../Firebase'


const Home = () => {

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


    return loading ? (
       <Fragment>
           <SearchBar/>
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


                <div className="justify-content-space-between mt-3">
                    <div style={{ display: "block", textAlign: "center"}}>
                        <h3>Evènements A Venir</h3>
                        <h1 style={{ display: "inline-block" , width: "150px", height: "5px", backgroundColor: "#e74c3c" }} ></h1> <br/>
                      
                          {data.map(event => (
                    
                              event.status == 2 && (
                                <div className="md-2" style={{ display: "inline-block" }}>    
                                <Card style={{ width: '20rem',}} className="m-2">
                              <Card.Img variant="top" src={event.urlImage} style={{ height:'260px' }} className="card-mg-top"/>
                              <Card.Body className="bg-gradient">
                                  <Card.Title style={{ fontSize:'16px', color: "white"  }}> {event.titre} </Card.Title>
                                  <Card.Text style={{color: "white"}}>
                                  {event.date}
                                  </Card.Text>
                                  <Link to={`/event/${event.id}`} className="btn btn-light" variant="danger">Plus d'infos</Link>
                              </Card.Body>
                          </Card>
                          </div>
                              ) 
                  
                    ))
                    }
                        
                    </div>
                </div>

                <div className="justify-content-space-between mt-3" style={{ marginTop: "35px"}}>
                    <div style={{ display: "block", textAlign: "center"}}>
                        <h3>Evènements Passés</h3>
                        <h1 style={{ display: "inline-block" , width: "150px", height: "5px", backgroundColor: "#e74c3c" }} ></h1> <br/>
                      
                          { data.map(event => (
                    
                              event.status == 3 && (
                                <div className="md-2" style={{ display: "inline-block" }}>    
                                <Card style={{ width: '20rem',}} className="m-2">
                              <Card.Img variant="top" src={event.urlImage} style={{ height:'260px' }} className="card-mg-top"/>
                              <Card.Body className="bg-gradient">
                                  <Card.Title style={{ fontSize:'16px', color: "white" }}> {event.titre} </Card.Title>
                                  <Card.Text style={{color: "white"}}>
                                  {event.date}
                                  </Card.Text>
                                  <Link to={`/event/${event.id}`} className="btn btn-light" variant="danger">Plus d'infos</Link>
                              </Card.Body>
                          </Card>
                          </div>
                              )
                  
                    ))
                    
                    }
                        
                    </div>
                </div>
           <Contact />
       </Fragment>
    ) : (
        <div style={{display: "inline-block"}} className="spinner-border text-center" role="status">
           <span className="sr-only">Loading...</span>
        </div>
        )
}

export default Home



