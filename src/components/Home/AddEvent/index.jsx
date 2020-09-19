import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddEvent = (props) => {


    const firebase = useContext(FirebaseContext)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [titre, setTitre] = useState('')
    const [date, setDate] = useState('')
    const [heure, setHeure] = useState('')
    const [description, setDescription] = useState('')
    const [quartier, setQuartier] = useState('')
    const [ville, setVille] = useState('')
    const [video, setVideo] = useState(null)
    const [array, setArray] = useState([])

    
    const [files, setFiles] = useState([])

    const onFileChange = e => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newFile = e.target.files[i];
            newFile["id"] = Math.random();
            // add an "id" property to each File object
            setFiles(prevState => [...prevState, newFile]);
            //console.log(files);
        }
        
    };

    const handleSubmit = async e => {
        e.preventDefault()
        const promises = []

        handleClickOpen()
        files.forEach(file => {
           
            const uploadTask = firebase.sendImage(file).put(file)

            promises.push(uploadTask)

            uploadTask.on(
                'state_changed',
                snapshot => {
                    const progress = (snapshot.bytesTransfered / snapshot.totalBytes) * 100
                    console.log(`progress: ${progress}%`);
                },
                error => console.log(error),
                async () => {
                    await uploadTask.snapshot.ref.getDownloadURL().then(
                        url => {
                            array.push(url) 
                            
                        }
                        
                    )
                    
                }
            )


        });
        Promise.all(promises)   
            .then(() => {
                const storageRef = firebase.sendVideo(video);

                storageRef.put(video).on('state_changed', snap => {
                    console.log('snap')
                }, (error) => { console.log(error) }, () => {

                    storageRef.getDownloadURL().then(
                        urll => {
                            console.log( urll)
                           firebase.createEvent().add({
                            titre: titre,
                            description: description,
                            date: date,
                            heure: heure,
                            ville: ville,
                            quartier: quartier,
                            urlImage: array,
                            status: "0",
                            video:urll,
                            dateCreation: new Date()
                        }).then(()=>{
                            handleClose()
                        })
                        props.history.push('/Events')
                           // props.history.push('/categorie');
                        }).catch(error => {
                            // setError(error);
                        })


                })
                //let tab = array
            
               // alert("Votre évènement a été créé, vous devez aller dans la liste des évènements puis dans les détails pour pouvoir configurer un évènement")
               // 

                //console.log(tab);
            })
            .catch(err => console.log(err.code));
    }
   



    return ( 
        <Fragment>
           <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-6 col-8 align-self-center">
                        <h3 class="text-themecolor m-b-0 m-t-0">Creer un évènement</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                            <li class="breadcrumb-item active">New Event</li>
                        </ol>
                    </div>
            
                </div>
                <div className="row">
                    <div className="col-lg-12 col-xlg-9 col-md-7">
                        <div className="card">
                            <div className="card-block">

                                <form onSubmit={handleSubmit} class="form-horizontal form-material">
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <input type="text" onChange={e => setTitre(e.target.value)} value={titre} id="titre" placeholder="Titre de l'évènement " class="form-control" required />
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                            <div class="col-md-4 ml-3">
                                                <input type="date" onChange={e => setDate(e.target.value)} value={date} id="date" placeholder="Titre de l'évènement " class="form-control" required/>
                                            </div>
                                            <div class="col-md-4">
                                                <input type="text" onChange={e => setHeure(e.target.value)} value={heure} id="heure" placeholder="Heure de l'évènement" class="form-control" required/>

                                            </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                                <textarea rows="5" onChange={e => setDescription(e.target.value)} value={description} placeholder="Description de l'évènement" id="description" class="form-control" required></textarea>
                                        </div>
                                    </div>
                                        <div class="row form-group">
                                            <div class="col-md-4 ml-3">
                                                <input type="text" onChange={e => setVille(e.target.value)} value={ville} id="ville" placeholder="Ville de L'évènement" class="form-control" required/>
                                            </div>
                                            <div class="col-md-4">
                                                <input type="text" onChange={e => setQuartier(e.target.value)} value={quartier} id="quartier" placeholder="Quatier de L'evenement" class="form-control" required/>

                                            </div>
                                        </div>
                                       
                                        <div class="row form-group mt-5">
                                            <div class="col-md-5">
                                                <label class="col-md-6 mb-3"><b>Multiples images</b></label>

                                                <input type="file" multiple onChange={onFileChange} className="form-control form-control-line" name="" required/>
                                            </div>
                                            <div class="col-md-5">
                                                <label class="col-md-6 mb-3"><b>Ajouter une video</b></label>
                                                <input type="file" onChange={e => setVideo(e.target.files[0])} id="video" className="form-control form-control-line ml-3" id=""/>
                                            </div>
                                            
                                        </div>
                                   
                                        <hr />                     
                                    
                                    <div className="text-center">
                                     <button class="btn btn-danger">
                                                <i class="fa fa-plus m-r-10" aria-hidden="true"></i>
                                                CREER L'EVENEMENT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </div> 
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
 
export default AddEvent;