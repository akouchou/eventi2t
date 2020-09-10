import React, { Fragment, useContext , useState} from 'react';
import { FirebaseContext } from '../../Firebase'

  const AddPartner = (props) =>{

    const firebase = useContext(FirebaseContext)

    const [siteAdress, setSiteAdress] = useState('')

    const handleInputChange = e => {
        setSiteAdress(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()

        firebase.createPartner().add({
            partenaires: siteAdress
        })
        .then(() => {
            alert("partenaire ajouté")
        })
        .catch((error) => {
           alert(error)
        })
    }
            

    return ( 
        <Fragment>
        
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">

                    <form onSubmit={handleSubmit}>
                        <div className="container-fluid">
                            <h2 className="text-center">AJOUTER PARTENAIRE</h2>
                            <div class="form-group">
                                <label for="exampleInputName">entrer l'adresse du site du partenaire</label>
                                <input onChange={handleInputChange} type="text" class="form-control" id="exampleInputName"/>

                            </div>

                            <div className="row form-group">
                                        <label className="col-md-12" >Entrer les photos des partenaires</label>
                                        <div className="col-md-12">
                                            <input type="file" className="form-control form-control-line" name="" id=""/>
                                        </div>
                            </div>

                            <div className="text-center">
                                    <button class="btn btn-danger">AJOUTER</button>
                                    </div>


                        </div>
                    </form>

                </div>
                <div className="col-md-5"></div>
                    
            </div>
                 
          

                               
         </Fragment>
    
    );

   }

  
            
          
export default AddPartner;