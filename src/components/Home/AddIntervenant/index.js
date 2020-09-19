import React, { Fragment, useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Intervenant = (props) => {

    const eventId = props.eventId
    console.log(eventId);

    const firebase = useContext(FirebaseContext)
    // ajout dun intervenant a l'evenement 

   const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


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
        handleClickOpen()
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
                       }).then(() => {
                           setSpeakerName('')
                           setImagSpeaker('')
                           
                          handleClose()
                       }).catch(error => alert(error))
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
                      <input onChange={handleInputChange} type="text" placeholder="Nom de l'intervenant" class="form-control" id="exampleInputName" required/>

                  </div>

                  <div className="row form-group">
                      <label className="col-md-12" >Entrer la photo de l'intervenant</label>
                      <div className="col-md-12">
                          <input onChange={handleImage} type="file" className="form-control form-control-line" name="" id="" required/>
                      </div>
                  </div>

                  <div className="text-center">
                      <button class="btn btn-primary"><i class="fa fa-send m-r-10" aria-hidden="true"></i> Ajouter  l'intervenant</button>
                  </div>

              </div>
          </form>
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
              <DialogTitle id="alert-dialog-title">{"Patienter s'il vous plaît "}</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                      <div className="mt-5">
                          <svg className="circular" viewBox="25 25 50 50">
                              <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                        </svg>
                      </div>
                    </DialogContentText>
              </DialogContent>
              <DialogActions>
            
              </DialogActions>
          </Dialog>
      </Fragment>
  );
}

export default Intervenant;
