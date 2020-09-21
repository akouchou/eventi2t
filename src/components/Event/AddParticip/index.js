<<<<<<< HEAD
import React, { Fragment, useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FirebaseContext } from '../../Firebase'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import * as emailjs from 'emailjs-com'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Addparticip = ({id, event})=> {

    const firebase = useContext(FirebaseContext)

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    console.log(event)
    console.log("Bonjour")

    const _eventName = event

    const handleSubmit = (e) =>{
        e.preventDefault();
        firebase.storeReservation().add({
            id_evenemant:id,
            name: nom,
            prenom: prenom,
            email: email
        }).then(() =>{
            setNom('')
            setPrenom('')
            setEmail('')
            handleClickOpen()
        })

        //const { name, email, subject, message } = this.state//
        let templateParams = {
          nom: nom,
          prenom: prenom,
          email: email,
          evenement: _eventName,
         }
    
         emailjs.send(
            "service_u5w8aak",
            "template_g3z15tj",
           templateParams,
          'user_qsCaizYblaLOa904GGYVm'
         ).then(res => {
            console.log('Votre mail a bien été envoyé')
          }).catch(err => console.error('Probmème reconctré. Veuillez reesayer s\'il-vous-plaît', err))
    }


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const message = "vous recevrez un email avec un numero d'identification a présenter a l'accueil. you will receive an email with an identification number to present at reception"

  return (
    <Fragment>
        
          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                  <label>Nom</label>
                  <input className="form-control" type="text" onChange={e => setNom(e.target.value)} value={nom} id="nom" placeholder="Last name" required/>
                  <Form.Text className="text-muted">
                     Entrer votre nom / Enter your last name.
                  </Form.Text> 

              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <label>Prenom</label>
                  <input className="form-control" type="text" onChange={e => setPrenom(e.target.value)} value={prenom} id="prenom" placeholder="First name" required/>
                  <Form.Text className="text-muted">
                     Entrer votre prenom / Enter your first name
                  </Form.Text> 
                  
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <label>Email address</label>
                  <input className="form-control" type="email" onChange={e => setEmail(e.target.value)} value={email} id="email" placeholder="my_email@gmail.com" required/>
                  <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text> 
                  
              </Form.Group>
              <div className="text-center">
                  <button className="btn btn-danger">Envoyer</button>
              </div>
          </Form>

          <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
          >
              <DialogTitle id="alert-dialog-slide-title">{"Registration completed"}</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                     {message}
          </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose} color="danger">
                      Ok
          </Button>
              </DialogActions>
          </Dialog>
    </Fragment>
  );
}

export default Addparticip;
=======
import React, { Fragment, useState, useContext } from 'react';
import { Form } from 'react-bootstrap';
import { FirebaseContext } from '../../Firebase'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Addparticip = ({id})=> {

    const firebase = useContext(FirebaseContext)

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        firebase.storeReservation().add({
            id_evenemant:id,
            name: nom,
            prenom: prenom,
            email: email
        }).then(() =>{
            setNom('')
            setPrenom('')
            setEmail('')
            handleClickOpen()
        })
    }


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const message = "vous recevrez un email avec un numero d'identification a présenter a l'accueil. you will receive an email with an identification number to present at reception"

  return (
    <Fragment>
        
          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                  <label>Nom</label>
                  <input className="form-control" type="text" onChange={e => setNom(e.target.value)} value={nom} id="nom" placeholder="Last name" required/>
                  <Form.Text className="text-muted">
                     Entrer votre nom / Enter your last name.
                  </Form.Text> 

              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <label>Prenom</label>
                  <input className="form-control" type="text" onChange={e => setPrenom(e.target.value)} value={prenom} id="prenom" placeholder="First name" required/>
                  <Form.Text className="text-muted">
                     Entrer votre prenom / Enter your first name
                  </Form.Text> 
                  
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <label>Email address</label>
                  <input className="form-control" type="email" onChange={e => setEmail(e.target.value)} value={email} id="email" placeholder="my_email@gmail.com" required/>
                  <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text> 
                  
              </Form.Group>
              <div className="text-center">
                  <button className="btn btn-danger">Envoyer</button>
              </div>
          </Form>

          <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
          >
              <DialogTitle id="alert-dialog-slide-title">{"Registration completed"}</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                     {message}
          </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button onClick={handleClose} color="danger">
                      Ok
          </Button>
              </DialogActions>
          </Dialog>
    </Fragment>
  );
}

export default Addparticip;
>>>>>>> 10eb53c94dfc8ed2bcc76681fd8f9f64161c7e6a
