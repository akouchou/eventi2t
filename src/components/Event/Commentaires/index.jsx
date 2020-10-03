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
            statut: '0',
            date: new Date()

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
            <div className="container mb-5">

               <div className="section-title">
                  <span style={{ opacity: 0.1, color: "black" }} >Commentaires</span>
                  <h2>Commentaires</h2>

               </div>

                <div class="chatHistoryContainer">

        <ul class="formComments">
			
              {
                             tasks.map(comment => (
                                comment.statut == 1 && (
                                    <Fragment>
                                        <li class="commentLi commentstep-1" data-commentid="4">
                                        <table class="form-comments-table">
                                            <tr>
                                                <td><div class="comment-timestamp">{comment.date}</div></td>
                                                <td><div class="comment-user">{comment.nom_auteur}</div></td>
                                                
                                                <td>
                                                    <div id="comment-4" data-commentid="4" class="comment comment-step1">
                                                       {comment.nom_auteur}
                                                    
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </li>
                                    </Fragment>
                                )
                            )) 
                        }
            
            
            

   </ul>
</div>
    <form onSubmit={handleSubmit}>
 
        <div class="input-group input-group-sm chatMessageControls">
            <input type="text" onChange={e => setName(e.target.value)} class="form-control ml-2 col-lg-2" placeholder="Votre nom" required />    
            
            <input type="text" onChange={e => setComment(e.target.value)} class="form-control ml-2" placeholder="Votre commentaire" aria-describedby="sizing-addon4" required />    
            <span class="input-group-btn">

                <button  class="btn btn-danger ml-1"><i class="fa fa-send"></i>Soumettre</button>
            </span>
        </div>
    </form>
</div>
        </Fragment>
    )
}

export default Commentaires