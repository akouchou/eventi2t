import React, { Fragment, useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Partenaire = (props) =>{

    const eventId = props.eventId
    //console.log(eventId);

    const firebase = useContext(FirebaseContext)
        // ajout du partenaire a l'evenement 

    const [siteAdress, setSiteAdress] = useState('')

    const [imagPartner , setImagPartner] = useState(null)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = e => {
        setSiteAdress(e.target.value)
    }
    const handleImage = e => {
        setImagPartner(e.target.files[0])

    }

    const handleSubmit = async e => {
        e.preventDefault()

        handleClickOpen()
        const storagePartner = await firebase.sendPhoto(imagPartner)
        storagePartner.put(imagPartner).on('state_changed', 
            snap => console.log('snap'), 
            error => console.log(error), 
            () => {
                storagePartner.getDownloadURL().then((url) => {
                    firebase.createPartner().add({
                        id_evenement: eventId,
                        site_du_partenaire: siteAdress,
                        urlImagePartenaire: url
                    })
               }).then(() => {
                   handleClose()
               }).catch(error => alert(error))
            }
        )
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

export default Partenaire;
