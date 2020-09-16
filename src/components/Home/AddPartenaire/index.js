import React, { Fragment, useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link } from 'react-router-dom'


function Partenaire() {

    const firebase = useContext(FirebaseContext)
        // ajout du partenaire a l'evenement 

    const [siteAdress, setSiteAdress] = useState('')

    const [imagPartner , setImagPartner] = useState(null)

    const handleInputChange = e => {
        setSiteAdress(e.target.value)
    }
    const handleImage = e => {
        setImagPartner(e.target.files[0])

    }

    const handleSubmit = async e => {
        e.preventDefault()
/*
        const storagePartner = await firebase.sendPhoto(imagPartner)
        storagePartner.put(imagPartner).on('state_changed', 
            snap => console.log('snap'), 
            error => console.log(error), 
            () => {
                storagePartner.getDownloadURL().then((url) => {
                    firebase.createEvent().doc(params.id).update({
                        site_du_partenaire: siteAdress,
                        urlImagePartenaire: url
                    })
               }).then(() => alert("partenaire ajouté")).catch(error => alert(error))
            }
        )*/
    }    

  return (
      <Fragment>

          <form onSubmit={handleSubmit}>
              <div className="container-fluid">
                  <h3 className="text-center">Ajouter un partenaire a l'evenement: </h3>
                  <div class="form-group">
                      <label for="exampleInputName">entrer l'adresse du site du partenaire</label>
                      <input onChange={handleInputChange} type="text" placeholder="http://www.exemple.com" class="form-control" id="exampleInputName" />

                  </div>

                  <div className="row form-group">
                      <label className="col-md-12" >Entrer le logo du partenaire</label>
                      <div className="col-md-12">
                          <input onChange={handleImage} type="file" className="form-control form-control-line" name="" id="" />
                      </div>
                  </div>

                  <div className="text-center">
                      <button class="btn btn-primary"><i class="fa fa-send m-r-10" aria-hidden="true"></i> Ajouter le partenaire</button>
                  </div>

              </div>
          </form>

      </Fragment>
  );
}

export default Partenaire;
