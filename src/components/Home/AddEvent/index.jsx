import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase'


const AddEvent = (props) => {


    const firebase = useContext(FirebaseContext)

    
    return ( 
        <Fragment>
           <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                    <div className="col-md-6 col-8 align-self-center">
                        <h3 className="text-themecolor m-b-0 m-t-0">Ajouter un Evenement</h3>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Ajouter un Evenement</li>
                        </ol>
                    </div>
            
                </div>
                <div className="row">
                    <div className="col-lg-12 col-xlg-9 col-md-7">
                        <div className="card">
                            <div className="card-block">
                                <form onSubmit={handleSubmit} class="form-horizontal form-material">
                                    <div className="form-group">
                                        <label className="col-md-12">Entrer le titre de L'evenement</label>
                                        <div className="col-md-12">
                                            <input type="text"  id="titre" placeholder="Titre de L'evenement " class="form-control form-control-line"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">Description de L'venement</label>
                                        <div className="col-md-12">
                                            <textarea rows="5" id="description" class="form-control form-control-line"></textarea>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <label className="col-md-12" >Entrer les photos de l'evenement</label>
                                        <div className="col-md-4">
                                            <input type="file" onChange={handleImageChange} className="form-control form-control-line" name="" id=""/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="file" onChange={handleImageChange} className="form-control form-control-line" name="" id=""/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="file" onChange={handleImageChange} className="form-control form-control-line" name="" id=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label class="col-md-12">Entrer une video de L'evenement si possible</label>
                                        <input type="file"  className="form-control form-control-line" id=""/>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">Entrer la date de L'evenement</label>
                                        <div className="col-md-12">
                                            <input type="date" onChange={handleChange}  id="date"  class="form-control form-control-line" name="" id=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12">Entrer la ville de L'evenement</label>
                                        <div className="col-md-12">
                                            <input type="text" onChange={handleChange}  id="ville" placeholder="ville de L'evenement " class="form-control form-control-line"/>
                                        </div>
                                    </div>  
                                    <div className="form-group">
                                        <label class="col-md-12">Entrer le Quartier de L'evenement</label>.
                                        <div class="col-md-12">
                                            <input type="text" onChange={handleChange}  id="quartier" placeholder="Quatier de L'evenement " class="form-control form-control-line"/>
                                        </div>
                                    </div>  
                                    <button className="btn btn-success">CREER L'EVENEMENT</button>
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