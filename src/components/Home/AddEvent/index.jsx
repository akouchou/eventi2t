import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase'


const AddEvent = (props) => {


    const firebase = useContext(FirebaseContext)

    const event = {
        titre: '',
        description: '',
        date: null,
        ville: '',
        quartier: ''

    }

    const [eventData, setEventData] = useState(event)
    const [error, setError] = useState('')



    const handleChange = (e) => {
        setEventData({...eventData, [e.target.id]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.createEvent(
            eventData
        ).then(() => {
             console.log("event created");
             setEventData({...eventData})

         }).catch((error) => {
             console.log(error);
            setError(error)
            setEventData({...eventData})
         })
    }


    return ( 
        <Fragment>
           <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-6 col-8 align-self-center">
                        <h3 class="text-themecolor m-b-0 m-t-0">Ajouter un Evenement</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Ajouter un Evenement</li>
                        </ol>
                    </div>
            
                </div>
                <div class="row">
                    <div class="col-lg-12 col-xlg-9 col-md-7">
                        <div class="card">
                            <div class="card-block">
                                <form onSubmit={handleSubmit} class="form-horizontal form-material">
                                    <div class="form-group">
                                        <label class="col-md-12">Entrer le titre de L'evenement</label>
                                        <div class="col-md-12">
                                            <input type="text" onChange={handleChange} value={eventData.titre} id="titre" placeholder="Titre de L'evenement " class="form-control form-control-line"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Description de L'venement</label>
                                        <div class="col-md-12">
                                            <textarea rows="5" onChange={handleChange} value={eventData.description} id="description" class="form-control form-control-line"></textarea>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <label className="col-md-12" >Entrer les photos de l'evenement</label>
                                        <div className="col-md-4">
                                            <input type="file" className="form-control form-control-line" name="" id=""/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="file" className="form-control form-control-line" name="" id=""/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="file" className="form-control form-control-line" name="" id=""/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Entrer une video de L'evenement si possible</label>
                                        <input type="file"  className="form-control form-control-line" id=""/>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Entrer la date de L'evenement</label>
                                        <div class="col-md-12">
                                            <input type="date" onChange={handleChange} value={eventData.date} id="date"  class="form-control form-control-line" name="" id=""/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Entrer la ville de L'evenement</label>
                                        <div class="col-md-12">
                                            <input type="text" onChange={handleChange} value={eventData.ville} id="ville" placeholder="ville de L'evenement " class="form-control form-control-line"/>
                                        </div>
                                    </div>  
                                    <div class="form-group">
                                        <label class="col-md-12">Entrer le Quartier de L'evenement</label>
                                        <div class="col-md-12">
                                            <input type="text" onChange={handleChange} value={eventData.quartier} id="quartier" placeholder="Quatier de L'evenement " class="form-control form-control-line"/>
                                        </div>
                                    </div>  
                                    <button type="submit" class="btn btn-success">CREER L'EVENEMENT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </div>    
        </Fragment>
     );
}
 
export default AddEvent;