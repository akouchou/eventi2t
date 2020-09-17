import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../../Firebase'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';

const ModalIntervenant = ({id}) => {

    const firebase = useContext(FirebaseContext)

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            const db = await firebase.listIntervenant(id)
            .onSnapshot(function (data) {
                setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                setLoading(true)
            })

        };
        fetchData()
    }, [firebase]);



    const actionFormatter = cell => {
        return (
            <span>
                <button type="button" onClick={() => onDelete(cell)} rel="tooltip" title="Remove" class="btn btn-danger">
                    <i class="fa fa-trash-o m-r-10" aria-hidden="true"></i>
                </button>

            </span>
        );
    }

    function imageFormatter(cell) {
        return (
            <img src={cell} width="100px" height="70px" className="" />

        );
    }
    const columns = [
        { dataField: "nom_intervenant", text: "Noms" },
        { dataField: "urlImageIntervenant", text: "Photos", formatter: imageFormatter },
        { dataField: "id", text: "Actions", formatter: actionFormatter }
    ]

    const onDelete = async (idEv) => {
        await firebase.deleteIntervenant(idEv).then(()=>{
            console.log("idEv");
        })
       // 
    }

  return (
    <div>
      
          {loading ? (
              <BootstrapTable
                  keyField="id"
                  data={tasks}
                  columns={columns}
                  pagination={paginationFactory()}
              />
          ) : (
                  <div className="spinner-border text-center" role="status">
                      <span className="sr-only">Loading...</span>
                  </div>
              )

          }
    </div>
  );
}

export default ModalIntervenant;
