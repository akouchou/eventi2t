import React, { useContext, useState, useEffect, Fragment } from "react";
import { FirebaseContext } from '../../Firebase'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Button, Modal, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap';

const SearchBar = () => {

  const firebase = useContext(FirebaseContext)

  const [open, setOpen] = useState(false);
  const [statut, setStatut] = useState('')
  const [show, setShow] = useState(false)
  const [inputSearch, setInputSearch] = useState('')
  const [results, setResults] = useState([])

 

  const handleShow = (e) => {
    e.preventDefault()
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  const handleClickOpen = () => {
    setOpen(true);
};

const handleClickClose = () => {
    setOpen(false);
};

  const handleSubmit = e => {
    e.preventDefault()
    handleClickOpen()
     if(statut === "Evènement a venir") {
      const fetchData = async () => {
       const db = await firebase.searchEventToCome(inputSearch)
       .onSnapshot((querySnapshot) => {
         querySnapshot.forEach(doc => {
          results.push(doc.data())
          console.log(results)
          handleClickClose()
          handleShow()
         })
          
          })
        }
        fetchData()
     } else if(statut === "Evènement Passé") {
      firebase.searchPastEvent(inputSearch)
      .onSnapshot((querySnapshot ) => {
          querySnapshot.forEach((doc) => {
            results.push(doc.data())
          })
      })
     } else if(statut === "Partenaire"){
      firebase.searchPartten(inputSearch)
      .onSnapshot((querySnapshot ) => {
          querySnapshot.forEach((doc) => {
            results.push(doc.data())
          }) 
      })
     } else if(statut === "Intervenant"){
      firebase.searchSpeakers(inputSearch)
      .onSnapshot((querySnapshot ) => {
          querySnapshot.forEach((doc) => {
            results.push(doc.data())
          })  
      })
     }
  }


  return (
    <section className="newslatter-section">
        <div className="container" style={{paddingLeft:"0px", paddingRight:"0px", width:"100%", backgroundColor:"#e74c3c"}}>
            <div className="newslatter-inner set-bg" data-setbg="../../../../public/Assets/img/newslatter-bg.jpg">
                <form onSubmit={handleSubmit} class="ni-form">
                    <input onChange={(e) => setInputSearch(e.target.value) } value={inputSearch} type="text" placeholder="rechercher..."/>
                    <select class="form-control" style={{borderRadius: "30px"}}  onChange={e => setStatut(e.target.value)} value={statut}  placeholder="Entrer votre statut" required >
                    <option>Evènement a venir</option>
                    <option>Evènement Passé</option>
                    <option>Partenaire</option>
                    <option>Intervenant</option>
                    <option>Autre</option>
  </select>
                    <button  type="submit">Rechercher</button>
                </form>
            </div>
        </div>
        <Modal
              show={show}
              onHide={handleClose}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <p style={{ textAlign: "center", color:"#e74c3c" }}>Filtrer la Recherche</p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form onSubmit={handleSubmit} >
                <div className="form-group">
               { /* <select class="form-control"  onChange={e => setStatut(e.target.value)} value={statut}  placeholder="Entrer votre statut" required >
                    <option>2</option>
                    <option>Evènement Passé</option>
                    <option>Partenaire</option>
                    <option>Intervenant</option>
                    <option>Autre</option>
  </select> */}
              
                <button className="btn btn-primary mt-4"> Rechercher</button>
                </div>
              </form>
              <div className="container">
              <p style={{ textAlign: "center", color:"#e74c3c" }}>Resultat de la Recherche</p>
              {
                results.map(result => (
                  statut === "2" ? 
                  <Fragment>
                    <div className="md-2" style={{ display: "inline-block" }}>
                      <Card style={{ width: "20rem" }} className="m-2">
                        <Card.Img
                          variant="top"
                          src={result.urlImage}
                          style={{ height: "200px" }}
                          className="card-mg-top"
                        />
                        <Card.Body className="bg-gradient">
                          <Card.Title
                            style={{ fontSize: "16px", color: "white" }}
                          >
                            {" "}
                            {result.titre}{" "}
                          </Card.Title>
                          <Card.Text style={{ color: "white" }}>
                            {result.date}
                          </Card.Text>
                          <Link
                            to={`/event/${result.id}`}
                            className="btn btn-light"
                            variant="danger"
                          >
                            Plus d'infos
                          </Link>
                        </Card.Body>
                      </Card>
                    </div>
                  </Fragment> : statut == "Evènement Passé" ?
                  <Fragment> 

                  </Fragment> : statut == "Partenaire" ?
                  <Fragment>

                  </Fragment> : 
                  <Fragment>

                  </Fragment>

                ))
              }
              </div>
              </Modal.Body>
            </Modal>

            <Dialog
              open={open}
              onClose={handleClickClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
              <DialogTitle id="alert-dialog-title">{"Patienter s'il vous plaît "}</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-description" className="text-center">
                  <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                  </DialogContentText>
              </DialogContent>
              <DialogActions>

              </DialogActions>
          </Dialog>
    </section>
  );
}

export default SearchBar;