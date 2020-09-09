import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase'


const AddEvent = (props) => {


    const firebase = useContext(FirebaseContext)

    const event = {
        titre: '',
        description: '',
        date: '',
        ville: '',
        quartier: ''
    }


    const [eventData, setEventData] = useState(event)
   // const [error, setError] = useState('')

    const [files, setFiles] = useState([])

   // const [urlVideo, setUrlVideo] = useState(null)

    const handleChange = (e) => {
        setEventData({...eventData, [e.target.id]: e.target.value})
    }
    const handleImageChange = e => {
        for(let i = 0; i<= e.target.files.length; i++) {
            const newFile = e.target.files[i];
            newFile["id"] = Math.random()

            setFiles(prevState => [...prevState, newFile])
        }
    }

  /*  const handleVideoChange = e => {
        setUrlVideo(e.target.files[0])
    }*/

    const handleSubmit = async e => {
        e.preventDefault()
        const urlsImage = []
        const promises = []
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
                                 urlsImage.push(url)
                             }
                         )                                       
                 }
             )
        })       
        Promise.all(promises)
        .then(() => {
            firebase.createEvent().add({
                titre: eventData.titre,
                description: eventData.description,
                date: eventData.date,
                ville: eventData.ville,
                quartier: eventData.quartier,
                urlImage: urlsImage
            })
            alert("Votre évènement a été créé")
            return dialog
        })
        .catch(error => {
        console.log(error)
         
            })
    }

    const dialog = (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )


    return ( 
        <Fragment>
           <div class="page-wrapper">
            <div class="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-6 col-8 align-self-center">
                        <h3 class="text-themecolor m-b-0 m-t-0">Ajouter un Evenement</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active">Ajouter un Evenement</li>
                        </ol>
                    </div>
            
                </div>
                <div className="row">
                    <div className="col-lg-12 col-xlg-9 col-md-7">
                        <div className="card">
                            <div className="card-block">
                                <form onSubmit={handleSubmit} class="form-horizontal form-material">
                                    <div class="form-group">
                                        <label class="col-md-12">Entrer les titre de L'evenement</label>
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
                                            <input type="file" multiple onChange={handleImageChange} className="form-control form-control-line" name="" id=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label class="col-md-12">Entrer une video de L'evenement si possible</label>
                                        <input type="file" /*onChange={handleVideoChange} */ className="form-control form-control-line" id=""/>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Entrer la date de L'evenement</label>
                                        <div class="col-md-12">
                                            <input type="text" onChange={handleChange} value={eventData.date} id="date" placeholder="jj/mm/yyyy"  class="form-control form-control-line" name=""/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-12">Entrer la ville de L'evenement</label>
                                        <div class="col-md-12">
                                            <input type="text" onChange={handleChange} value={eventData.ville}  id="ville" placeholder="ville de L'evenement " class="form-control form-control-line"/>
                                        </div>
                                    </div>  
                                    <div className="form-group">
                                        <label class="col-md-12">Entrer le Quartier de L'evenement</label>.
                                        <div class="col-md-12">
                                            <input type="text" onChange={handleChange}  id="quartier" placeholder="Quatier de L'evenement " class="form-control form-control-line"/>
                                        </div>
                                    </div>  
                                    <div className="text-center">
                                    <button class="btn btn-danger">CREER L'EVENEMENT</button>
                                    </div>
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