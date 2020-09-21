import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase'
import { Card, Button } from 'react-bootstrap';

const Partenaire = ({id}) => {

    const firebase = useContext(FirebaseContext)

    const [tasks, setTasks] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const db = await firebase.selectPartenaire(id)
            .onSnapshot((querySnapshot ) => {
                querySnapshot.forEach((doc) => {
                    tasks.push(doc.data())
                })
                //setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
               // setLoading(true)
            })

        };
        fetchData()
    }, [firebase]);

  return (
    <Fragment>
          <div className="container">

               <div className="section-title">
                  <span style={{ opacity: 0.1, color: "black" }} >Partenaires</span>
                  <h2>Partenaires</h2>

              </div>

              <div className="justify-content-space-between ">
             
                  <div style={{ display: "block", textAlign: "center" }}>
                      
                      {tasks.map((spell) => (
                          <div style={{ display: "inline-block" }} className="" key={spell.urlImagePartenaire}>
                          <div className="icon-box">
                              <Link to={spell.site_du_partenaire}>
                                      <img src={spell.urlImagePartenaire} style={{ width: "80px", height: "80px", borderRadius:"10px" }}  alt="" />
                              </Link>
                          </div>
                      </div>

                      
                      ))}

                  </div>
              </div>

          </div>

    </Fragment>
  );
}

export default Partenaire;
