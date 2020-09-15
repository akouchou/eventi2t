import React, {Fragment, useContext, useState, useEffect} from 'react';

import Carousel from './carousel/index'
import Contact from './contact/index'
import Videos from './video/index';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

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

  console.log(data);

    return(
       <Fragment>
           <Carousel />
           <Videos/>
           <div className="row" >
               {
                    loading? ( data.map(event => (
                    
                        <div className="col-md-4">    
                            <Card style={{ width: '20rem', }}>
                                <Card.Img variant="top" src={event.urlImage} className="card-mg-top"/>
                                <Card.Body>
                                    <Card.Title> {event.titre} </Card.Title>
                                    <Card.Text>
                                    {event.description}
                                    </Card.Text>
                                    <Link to={`/event/${event.id}`} variant="danger">Plus d'infos</Link>
                                </Card.Body>
                            </Card>
                         </div>
                  
                    ))
                    ) : (
                    <div className="spinner-border text-center" role="status">
                       <span className="sr-only">Loading...</span>
                    </div>
                    )
                   
                }
             </div>
           <Contact />
       </Fragment>
    )
}

export default Home



