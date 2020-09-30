import React, { Fragment, useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../Firebase';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Intervenants = ({id}) => {

    const firebase = useContext(FirebaseContext)

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            const db = await firebase.selectIntervenant(id)
            .onSnapshot((querySnapshot ) => {
                querySnapshot.forEach((doc) => {
                    tasks.push(doc.data())
                })
                //setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                setLoading(true)
            })

        };
        fetchData()
    }, [firebase]);

    return(
        <Fragment>
            <section class="team-member-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <h2>Intervenants</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="speaker-section spad">
                    <div class="container">
                        <div class="row">
                 
                                <div class="col-sm-6">
                                    <div class="speaker-item">
                                        <div class="row">
                                        {
                                             tasks.map(spell => (
                                                <Fragment>
                                                <div class="col-lg-6">
                                                <div class="si-pic">
                                                    <img src={spell.urlImageIntervenant} className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="si-text">
                                                        <div class="si-title">
                                                            <h4>{spell.nom_intervenant}</h4>
                                                            <span>{spell.metier}</span>
                                                        </div>
                                                        <p>{spell.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                </Fragment>
                                            )) 
                                        }
                                            
                                            </div>
                                        </div>
                                    </div>


                              </div>
                             </div>
    </section>
                
             </section>
        </Fragment>
    )
}

export default Intervenants