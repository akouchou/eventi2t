import React, { Fragment, useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link } from 'react-router-dom'

const Intervenant = (props) => {

    const eventId = props.eventId


    const firebase = useContext(FirebaseContext)
    // ajout dun intervenant a l'evenement 

    const [speakerName, setSpeakerName] = useState('')

    const [imagSpeaker, setImagSpeaker] = useState(null)

    const handleInputChange = e => {
        setSpeakerName(e.target.value)
    }
    const handleImage = e => {
        setImagSpeaker(e.target.files[0])
    }

    const handleSubmit = async e => {
        e.preventDefault()
                const storageSpeaker = await firebase.sendPhotoSpeaker(imagSpeaker)
                storageSpeaker.put(imagSpeaker).on('state_changed', 
                    snap => console.log('snap'), 
                    error => console.log(error), 
                    () => {
                        storageSpeaker.getDownloadURL().then((url) => {
                            firebase.createSpeaker().add({
                                id_evenement: eventId,
                                nom_intervenant: speakerName,
                                urlImageIntervenant: url
                            })
                       }).then(() => alert("Intervenant ajouté")).catch(error => alert(error))
                    }
                )
    }    


  return (
      <Fragment>

          <form onSubmit={handleSubmit}>
              <div className="container-fluid">
                  <h3 className="text-center">Ajouter les intervenants a l'evenement: </h3>
                  <div class="form-group">
                      <label for="exampleInputName">Entrer le nom de l'intervenant </label>
                      <input onChange={handleInputChange} type="text" placeholder="Nom de l'intervenant" class="form-control" id="exampleInputName" />

                  </div>

                  <div className="row form-group">
                      <label className="col-md-12" >Entrer la photo de l'intervenant</label>
                      <div className="col-md-12">
                          <input onChange={handleImage} type="file" className="form-control form-control-line" name="" id="" />
                      </div>
                  </div>

                  <div className="text-center">
                      <button class="btn btn-primary"><i class="fa fa-send m-r-10" aria-hidden="true"></i> Ajouter  l'intervenant</button>
                  </div>

              </div>
          </form>

      </Fragment>
  );
}

export default Intervenant;
