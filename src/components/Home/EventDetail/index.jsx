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

                <div className="card" style={{width: "40rem", margin: "30px"}}>
                    <img src={ dataEvent.urlImage[0] } alt="" className="card-img-top" />
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

                <Link to="/partner" className="btn btn-primary" >Ajouter des Partenaires</Link>

            </div>
         </div> 
     );
}
 
export default EventDetail;