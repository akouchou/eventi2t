import React, { Fragment, useState, useContext, useEffect} from 'react';
import { FirebaseContext } from '../../Firebase'

const Commentaires = ({ id }) => {


    const firebase = useContext(FirebaseContext)
// envoie du commentaire
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    

    const handleSubmit = e => {
        e.preventDefault()
        firebase.sendComment().add({
            id_evenement: id,
            nom_auteur: name,
            commentaire: comment,
            statut: '0'

        }).then(() => alert('commentaire envoyé'))

    }
// fin

//recuperation des commentaires

const [tasks, setTasks] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {

    const fetchData = async () => {
        const db = await firebase.selectComments(id)
        .onSnapshot((querySnapshot ) => {
            querySnapshot.forEach((doc) => {
                tasks.push(doc.data())
            })
            setLoading(true)
            //setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
           // setLoading(true)
        })

    };
    fetchData()
}, [firebase]);


    return(
        <Fragment>
            <div className="container">

               <div className="section-title">
                  <span style={{ opacity: 0.1, color: "black" }} >Commentaires</span>
                  <h2>Commentaires</h2>

               </div>

                <div className="row">
                    <div className="col-md-5">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Votre Nom</label>
                                <input type="text" onChange={e => setName(e.target.value)} class="form-control" id="nom" placeholder="Entrer votre nom" />               
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Entrer votre commentaire</label>
                                <textarea onChange={e => setComment(e.target.value)} class="form-control" id="commentaire" rows="3"></textarea>
                            </div>
                            <button className="btn btn-success">Soumettre</button>
                        </form>
                    </div>
                    <div className="col-md-7 text-center">
                        <h6 style={{color: "#F9A6A2", fontWeight: "bold"}} >liste des commentaires sur l'évènement</h6>

                        {
                            loading ? tasks.map(comment => (
                                
                                    <Fragment>
                                        <div className="row" style={{backgroundColor: "#F5F3F2", borderRadius: "7px", margin: "3px",padding: "7px"}}>
                                            <p style={{fontWeight: "bold", marginRight: "7px"}}> {comment.nom_auteur} : </p>  <p> {comment.commentaire} </p>
                                        </div>
                                    </Fragment>
                                                        )) : (
                                <div className="spinner-border text-center" role="status">
                                   <span className="sr-only">Loading...</span>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Commentaires