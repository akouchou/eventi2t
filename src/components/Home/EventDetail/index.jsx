import React, { Fragment, useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link} from 'react-router-dom'
import Partenaire from '../AddPartenaire';
import Intervenant from '../AddIntervenant';
import { Modal, Button } from 'react-bootstrap';
import ModalIntervenant from '../ModalIntervenant';
import ModalPartenaire from '../ModalPartenaire';
import ModalReservation from '../ModalReservation';

const EventDetail = ({ match }) => {

    const firebase = useContext(FirebaseContext)

    const [etat, setEtat] = useState('')

    const [dataEvent, setDataEvent] = useState([])
   
    const [show, setShow] = useState(false);
    const [showi, setShowi] = useState(false);
    const [showr, setShowr] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClosei = () => setShowi(false);
    const handleShowi = () => setShowi(true);

    const handleCloser = () => setShowr(false);
    const handleShowr = () => setShowr(true);

    const params = match.params

   

    useEffect(() => {
        const fetchDataEvent = async () => {
            await firebase.detailEvent(params.id).get()
            .then(doc => {
                const data = doc.data();
                dataEvent.push(data)
               
                setEtat(data.status)
                console.log(etat);
            })
           
        }
        fetchDataEvent()
    }, []);


    //differentes fonction de changement de statut
    const changeStatus = async (status) => {
        setEtat(status)
        await firebase.changeStatus(params.id).update({
            status: status,
        })
    }

    console.log(dataEvent.status);


    return (
         <>
        <div class="page-wrapper"> 
            <div className="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-6 col-8 align-self-center">
                      
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/Events" className="btn btn-info"><i class="fa fa-reply m-r-10" aria-hidden="true"></i></Link></li>
                        </ol>
                    </div>

                </div>
        <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-12">

                <div className="col-lg-12 col-xlg-9 col-md-7">
                <div className="card" >
                    <img src="" alt="" className="card-img-top" />
                    <div className="card-body">
                    {dataEvent.map((spell) => ( 
                        
                        <Fragment>
                        <h1 class="text-themecolor m-b-0 m-t-0 ml-4 ">{spell.titre} </h1> <br/>
                        <div className="row mb-5 text-right">
             
                            {etat === '1'
                                ? <button class="btn btn-success ml-2" disabled>
                                    <i class="fa fa-power-off m-r-10" aria-hidden="true"></i>Evenement Principale</button>
                                : <button class="btn btn-danger ml-2" onClick={() => changeStatus('1')}>
                                    <i class="fa fa-power-off m-r-10" aria-hidden="true"></i>Evenement Principale</button>
                            }
                            {etat === '2'
                                ? <button class="btn btn-success ml-2" disabled>
                                    <i class="fa fa-power-off m-r-10" aria-hidden="true"></i>Evenement A venir</button>
                                : <button class="btn btn-danger ml-2" onClick={() => changeStatus('2')}>
                                    <i class="fa fa-power-off m-r-10" aria-hidden="true"></i>Evenement A venir</button>
                            } 
                            {etat === '3'
                                ? <button class="btn btn-success ml-2" disabled>
                                    <i class="fa fa-power-off m-r-10" aria-hidden="true"></i>Evenement passé</button>
                                : <button class="btn btn-danger ml-2" onClick={() => changeStatus('3')}>
                                    <i class="fa fa-power-off m-r-10" aria-hidden="true"></i>Evenement passé</button>
                             }
                            {etat === '4'
                                ? <button class="btn btn-success ml-2" disabled>
                                    <i class="fa fa-power-off m-r-10" aria-hidden="true"></i>Archiver l'Evenement</button>
                                : <button class="btn btn-danger ml-2" onClick={() => changeStatus('4')}>
                                    <i class="fa fa-power-off m-r-10" aria-hidden="true"></i>Archiver l'Evenement</button>
                            }

     
                        </div>
                        <div className="row">
                                <img src={spell.urlImage[0] != null || '' ? spell.urlImage[0] : "../assets/images/logo.jpg" } style={{ width: "200px", height: "100px" }} className="rounded mx-auto d-block" alt="..." />
                                <img src={spell.urlImage[1] != null || '' ? spell.urlImage[1] : "../assets/images/logo.jpg" } style={{ width: "200px", height: "100px" }} className="rounded mx-auto d-block" alt="..." />
                                <img src={spell.urlImage[2] != null || '' ? spell.urlImage[2] : "../assets/images/logo.jpg" } style={{ width: "200px", height: "100px" }} className="rounded mx-auto d-block" alt="..." />
                        </div>
                        <div class="form-row mt-5">
                            <div class="col-2">
                                    <label for="">Date :<h5>{spell.nom_article}</h5></label>
                            </div>
                            <div class="col-3">
                                    <label for="">Ville :<h5>{spell.ville}</h5></label>
                            </div>
                            <div class="col-3">
                                <label for="">Quartier :<h5>{spell.quartier}</h5></label>
                            </div>
                                     
                            <div class="col-3">
                                <label for="">Description :<h6>{spell.description}</h6></label>
                            </div>
                        </div>
                        </Fragment>
                        ))}
                    </div>
                </div>
            </div>
                        <div className="col-lg-12 col-xlg-9 col-md-7">
                            <div className="card" >
                                <img src="" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <div class="form-row  text-center">
 
                                        <div class="col-3">
                                                <button class="btn btn-secondary" onClick={handleShowr}><i class="fa fa-edit m-r-10" aria-hidden="true"></i> Liste des réservations</button>
                                         </div>
                                        <div class="col-3">
                                                <button class="btn btn-secondary" onClick={handleShow}><i class="fa fa fa-handshake-o m-r-10" aria-hidden="true"></i> Liste des partenaires</button>
                                        </div>
                                        <div class="col-3">
                                            <button class="btn btn-secondary"><i class="fa fa-comment m-r-10" aria-hidden="true"></i> Liste des commentaires</button>
                                        </div>
                                        
                                        <div class="col-3">
                                                <button class="btn btn-secondary" onClick={handleShowi}><i class="fa fa-users  m-r-10" aria-hidden="true"></i> Liste des intervenants</button>
                                        </div>
                                        <div class="col-2">
                                           
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
            <div className="row">
                            <div className="col-lg-6 col-xlg-9 col-md-6">
                                <div className="card" >
                                    <img src="" alt="" className="card-img-top" />
                                    <div className="card-body">
                                      <Partenaire/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xlg-9 col-md-6">
                                <div className="card" >
                                    <img src="" alt="" className="card-img-top" />
                                    <div className="card-body">
                                       <Intervenant eventId={params.id} />
                                    </div>
                                </div>
                            </div>
            </div>

            </div>
           <div className="col-md-2"></div>            
         </div>
        </div>
            </div> 

            <Modal
                show={showr}
                onHide={handleCloser}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa fa-edit m-r-10" aria-hidden="true"></i>Liste des réservations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalReservation id={params.id}></ModalReservation>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloser}>
                        Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa fa fa-handshake-o m-r-10" aria-hidden="true"></i>Liste des partenaires</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalPartenaire id={params.id}></ModalPartenaire>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showi}
                onHide={handleClosei}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa fa-users  m-r-10" aria-hidden="true"></i>Liste des intervenants</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Fragment>

                        <ModalIntervenant id={params.id}></ModalIntervenant>
                        
                    </Fragment>  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosei}>
                        Close</Button>
                </Modal.Footer>
            </Modal>
    </>
     );
}
 
export default EventDetail;