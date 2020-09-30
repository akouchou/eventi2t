import React, { Fragment, useState, useContext, useEffect} from 'react';
import { FirebaseContext } from '../../Firebase'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
         
            <section className="testimonial-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Commentaires</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="testimonial-slider">
                                    <OwlCarousel className="owl-theme" loop margin={10} nav>

                                   

                                        {
                                             tasks.map(comment => (
                                                comment.statut == 1 ? (
                                                    <Fragment>
                                                        <div class="item">
                                                            <div className="col-lg-6">
                                                                <div className="testimonial-item">
                                                                    <div className="ti-author">
                                                                        <div className="quote-pic">
                                                                            <img src="../assets/img/quote.png" alt="" />
                                                                        </div>
                                                                        <div className="ta-pic">
                                                                        </div>
                                                                        <div className="ta-text">
                                                                            <h5>{comment.nom_auteur}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <p>“{comment.commentaire}”</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Fragment>
                                                ):(
                                                <div class="item">
                                            <div className="col-lg-6">
                                                <div className="testimonial-item">
                                                    <div className="ti-author">
                                                        <div className="quote-pic">
                                                            <img src="../assets/img/quote.png" alt="" />
                                                        </div>
                                                        <div className="ta-pic">
                                                        </div>
                                                        <div className="ta-text">
                                                            <h5>Aucun commentaires</h5>
                                                        </div>
                                                    </div>
                                                    <p>“Soyez le premier a laisser un commentaire ”</p>
                                                </div>
                                            </div>
                                        </div>
                                            )
                                            )
                                            )
                                             
                                        }
                                    </OwlCarousel>

                                    

                                            

                                                    

                                                        </div>
                                                     </div>
                                                </div>
                                            </div>
                                        </div>
    </section>
            
        </Fragment>
    )
}

export default Commentaires