import React, { Fragment, useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../Firebase';

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
            <div className="container">

                    <div className="section-title">
                        <span style={{opacity: 0.1, color:"black"}} >Intervenant</span>
                        <h2>Intervenant</h2>

                    </div>

                    {
                        loading? tasks.map(spell => (
                            <div className="row">
                                <div className="col-md-6 mt-4">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic"><img src={spell.urlImageIntervenant}className="img-fluid" alt=""/></div>
                                        <div className="member-info">
                                        <h4> {spell.nom_intervenant} </h4>
                                        <span> {spell.metier} </span>
                                        <p> {spell.description} </p>
                                        
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )) : (
                            <div className="spinner-border text-center" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                        )
                    }
            </div>  
        </Fragment>
    )
}

export default Intervenants