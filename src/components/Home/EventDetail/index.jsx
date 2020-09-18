import React, { Fragment, useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link} from 'react-router-dom'
import Partenaire from '../AddPartenaire';
import Intervenant from '../AddIntervenant';
import { Modal, Button } from 'react-bootstrap';
import ModalIntervenant from '../ModalIntervenant';
import ModalPartenaire from '../ModalPartenaire';
import ModalReservation from '../ModalReservation';
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EventDetail = ({ match }, props) => {

    const history = useHistory();
    
    const firebase = useContext(FirebaseContext)

    const [etat, setEtat] = useState('')

    const [dataEvent, setDataEvent] = useState([])
    const [tasks, setTasks] = useState([])

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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseConf = () => {
        setOpen(false);
    };

   

    useEffect(() => {
      
        //verifierStatusPrincip()
        const fetchDataEvent = async () => {
            await firebase.detailEvent(params.id).get()
            .then(doc => {
                const data = doc.data();
                dataEvent.push(data)
               
                setEtat(data.status)
               // console.log(etat);
            })
           
        }
        fetchDataEvent()
    }, []);

    const verifierStatusPrincip = async (idst)=>{
        let test = []
        let i='';
        const fetch= async () => {
            await firebase.selectEvent().onSnapshot(dat => {
                const data =  dat.docs.map(doc => {
                    test =  doc.data().status

                    for (var index = 0; test[index]; index++) {
                     // console.log('index:', index, 'valeur:', test[index]);
                        if (test[index] === idst){
                            i = '0'
                         }
                    }

                }); 
                 if(i!='0'){
                     
                     setEtat(idst)
                     firebase.changeStatus(params.id).update({
                         status: idst,
                     })

                 }else{
                   
                }
            })
        };
        //console.log(test); 
        fetch()
        
    }

    //differentes fonction de changement de statut
    const changeStatus = async (status) => {
       
        if (status === '1'){

            verifierStatusPrincip(status)

        }else{
           setEtat(status)  
        await firebase.changeStatus(params.id).update({
        status: status,
        })
        }
       /* */
    }

    const onDelete = async (id) => {


        //suppriession de l'evenement
        await firebase.deleteEvent(params.id)
        .then(()=>{

            //suppriession des intervenent
            firebase.deleteIntervEvent(id).get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    doc.ref.delete();
                });
            });
            //suppriession des partenaires
            firebase.deletePartnerEvent(id).get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    doc.ref.delete();
                });
            });

            //suppriession des reservations
            firebase.deleteReservEvent(id).get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    doc.ref.delete();
                });
            });
            history.push("/Events");
        })
        // console.log(id);
    }

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
                    <div class="alert alert-danger" role="alert">
                        <i class="fa fa-exclamation-triangle m-r-10" aria-hidden="true"></i>
                        Si vous voulez activer un évènement
                        <Link to="" class="alert-link"> rassurez vous </Link>que l'évènements actuel soit inactif
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
                            <div class="alert alert-secondary" role="alert">
                                <h2 class="text-themecolor m-b-0 m-t-0 ml-2 "><i> {spell.titre} </i></h2> 
                              
                            </div>
                        <div className="row mb-5 mt-5 text-right">
             
                            {etat === '1'
                                ? <button class="btn btn-success ml-2" disabled>
                                    <i class="fa fa-power-off m-r-10" aria-hidden="true"></i>Evenement actif</button>
                                    : <button class="btn btn-danger ml-2" onClick={() => changeStatus('1')}>
                                    <i class="fa fa-power-off m-r-10" aria-hidden="true"></i>Evenement inactif</button>
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
                                <button class="btn btn-danger ml-2" onClick={handleClickOpen} >
                            <i class="fa fa-trash-o m-r-10" aria-hidden="true"></i></button>
     
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
                                        <Partenaire eventId={params.id}/>
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
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Confirmation"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <h2 class="fa fa-trash-o m-r-10" aria-hidden="true"></h2> Êtes-vous sûr de bien vouloir supprimer cet élément?.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConf} color="primary">
                        Non
          </Button>
                    <Button onClick={() => onDelete(params.id)} color="primary">
                        Oui
          </Button>
                </DialogActions>
            </Dialog>

            <Modal
                show={showr}
                onHide={handleCloser}
                backdrop="static"
                keyboard={false}
                size="lg"
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
                size="lg"
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