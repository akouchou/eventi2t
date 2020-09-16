import React, { Fragment, useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link} from 'react-router-dom'
import Partenaire from '../AddPartenaire';
import Intervenant from '../AddIntervenant';

const EventDetail = ({ match }) => {

    const firebase = useContext(FirebaseContext)

    const [dataEvent, setDataEvent] = useState([])

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


    return (
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
                        <div className="row mb-5">
                            <h2 class="text-themecolor m-b-0 m-t-0 ml-4">{dataEvent.titre} </h2>
                                        <button className="btn btn-danger ml-2"><i class="fa fa-power-off m-r-10" aria-hidden="true"></i> Désactiver l'évènement</button>
                                        <button class="btn btn-danger ml-2"><i class="fa fa-trash-o m-r-10" aria-hidden="true"></i>Supprimer l'évènement</button>
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
                                            <button class="btn btn-secondary"><i class="fa fa fa-handshake-o m-r-10" aria-hidden="true"></i> Liste des partenaires</button>
                                        </div>
                                        <div class="col-3">
                                            <button class="btn btn-secondary"><i class="fa fa-comment m-r-10" aria-hidden="true"></i> Liste des commentaires</button>
                                        </div>
                                        
                                        <div class="col-3">
                                            <button class="btn btn-secondary"><i class="fa fa-users  m-r-10" aria-hidden="true"></i> Liste des intervenants</button>
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
                                       <Intervenant/>
                                    </div>
                                </div>
                            </div>
            </div>

            </div>
           <div className="col-md-2"></div>            
         </div>
        </div>
         </div> 
     );
}
 
export default EventDetail;