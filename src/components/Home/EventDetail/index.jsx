import React, { Fragment, useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link} from 'react-router-dom'

const EventDetail = ({ match }) => {

    const firebase = useContext(FirebaseContext)

    const [dataEvent, setDataEvent] = useState([])

    const params = match.params

    console.log(params);

    useEffect(() => {
        const fetchDataEvent = async () => {
            await firebase.detailEvent().doc(params.id).get()
            .then(doc => {
                dataEvent.push(doc.data())
                dataEvent.forEach(x => setDataEvent(x))
            })
        }

        fetchDataEvent()
    }, []);

    console.log(dataEvent)
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
        )
    }    


    return (
        <div class="page-wrapper"> 
            <div className="container-fluid">
                <div class="row page-titles">
                    <div class="col-md-6 col-8 align-self-center">
                        <h3 class="text-themecolor m-b-0 m-t-0">Detail de l'évènement</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/Events">liste des évènements</Link></li>
                            <li class="breadcrumb-item active">Detail de l'éevènements : { dataEvent.titre } </li>
                        </ol>
                    </div>

                </div>
        <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-8">

                <div className="card" style={{width: "40rem", margin: "30px"}}>
                    <img src="" alt="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">
                           titre de l'évènement : { dataEvent.titre}
                        </h5>
                        <p className="card-text">
                           Description { dataEvent.description }
                        </p>
                        <p className="card-text">
                           ville ou se deroulera l"evenement : { dataEvent.ville }
                        </p>
                        <p className="card-text">
                           le quartier ou l'évènement se deroulera : { dataEvent.quartier }
                        </p>
                    </div>
                </div>

                <Fragment>        
                       
                                <form onSubmit={handleSubmit}>
                                    <div className="container-fluid">
                                        <h2 className="text-center">Ajouter un partenaire a l'evenement: </h2>
                                        <div class="form-group">
                                            <label for="exampleInputName">entrer l'adresse du site du partenaire</label>
                                            <input onChange={handleInputChange} type="text" class="form-control" id="exampleInputName"/>

                                        </div>

                                        <div className="row form-group">
                                                    <label className="col-md-12" >Entrer les photos des partenaires</label>
                                                    <div className="col-md-12">
                                                        <input onChange={handleImage} type="file" className="form-control form-control-line" name="" id=""/>
                                                    </div>
                                        </div>

                                        <div className="text-center">
                                                <button class="btn btn-primary">AJOUTER</button>
                                        </div>

                                    </div>
                                </form>

            </Fragment>
            </div>
           <div className="col-md-2"></div>            
         </div>
        </div>
         </div> 
     );
}
 
export default EventDetail;