import React, { Fragment, useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link} from 'react-router-dom'
import Partenaire from '../AddPartenaire';
import Intervenant from '../AddIntervenant';
import { Modal, Button } from 'react-bootstrap';
import ModalIntervenant from '../Modal';

const EventDetail = ({ match }) => {

    const firebase = useContext(FirebaseContext)

    const [dataEvent, setDataEvent] = useState([])
   
    const [show, setShow] = useState(false);
    const [showi, setShowi] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClosei = () => setShowi(false);
    const handleShowi = () => setShowi(true);

    const params = match.params

    console.log(params);

    useEffect(() => {
        const fetchDataEvent = async () => {
            await firebase.detailEvent().doc(params.id).get()
            .then(doc => {
                dataEvent.push(doc.data())
                dataEvent.forEach(x => setDataEvent(x))
            })
        }

        fetchDataEvent()
    }, []);

    const change = firebase.detailEvent().doc(params.id)
    //differentes fonction de changement de statut
    const changeStatus1 = () => {
        change.update({
            status: "1"
        }).then(() => alert("marqué comme évènement principale"))
    }
    const changeStatus2 = () => {
        change.update({
            status: "2"
        }).then(() => alert("marqué comme évènement a venir"))
    }
    const changeStatus3 = () => {
        change.update({
            status: "3"
        }).then(() => alert("marqué comme évènement passé"))
    }
    const changeStatus4 = () => {
        change.update({
            status: "4"
        }).then(() => alert("marqué comme évènement Archivé"))
    }

    //

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
                    <h2 class="text-themecolor m-b-0 m-t-0 ml-4">{dataEvent.titre} </h2> <br/>
                        <div className="row mb-5">
                           
                            
                                        { dataEvent.status == 1 ? <button onClick={changeStatus1} disabled className="btn btn-primary ml-2">Evenement Principale</button> : <button onClick={changeStatus1} className="btn btn-primary ml-2">Evenement Principale</button> }
                                        { dataEvent.status == 2 ? <button onClick={changeStatus2} disabled className="btn btn-primary ml-2">Evenement A venir</button> : <button onClick={changeStatus2} className="btn btn-primary ml-2">Evenement A venir</button>}
                                        { dataEvent.status == 3 ? <button onClick={changeStatus3} disabled className="btn btn-primary ml-2">Evenement passé</button> : <button onClick={changeStatus3} className="btn btn-primary ml-2">Evenement passé</button>}
                                        { dataEvent.status == 4 ? <button onClick={changeStatus4} disabled className="btn btn-primary ml-2">Archiver l'Evenement</button> : <button onClick={changeStatus4} className="btn btn-primary ml-2">Archiver l'Evenement</button>}
                                      
                        </div>
                        <div className="row">
                            <img src={dataEvent.urlImage} style={{ width: "200px", height: "100px" }} className="rounded mx-auto d-block" alt="..." />
                            <img src={dataEvent.urlImage} style={{ width: "200px", height: "100px" }} className="rounded mx-auto d-block" alt="..." />
                            <img src={dataEvent.urlImage} style={{ width: "200px", height: "100px" }} className="rounded mx-auto d-block" alt="..." />
                        </div>
                        <div class="form-row mt-5">
                            <div class="col-2">
                                    <label for="">Date :<h5>{dataEvent.nom_article}</h5></label>
                            </div>
                            <div class="col-3">
                                    <label for="">Ville :<h5>{dataEvent.ville}</h5></label>
                            </div>
                            <div class="col-3">
                                <label for="">Quartier :<h5>{dataEvent.quartier}</h5></label>
                            </div>
                                     
                            <div class="col-3">
                                <label for="">Description :<h6>{dataEvent.description}</h6></label>
                            </div>
                        </div>
  
                    </div>
                </div>
            </div>
                        <div className="col-lg-12 col-xlg-9 col-md-7">
                            <div className="card" >
                                <img src="" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <div class="form-row  text-center">
 
                                        <div class="col-3">
                                            <button class="btn btn-secondary"><i class="fa fa-navicon m-r-10" aria-hidden="true"></i> Liste des réservations</button>
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
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa fa fa-handshake-o m-r-10" aria-hidden="true"></i>Liste des partenaires</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
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