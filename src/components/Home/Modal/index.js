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
            await firebase.selectEvent().onSnapshot(data => {
                setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                setLoading(true)
            })

        };
        fetchData()

    }, []);

    const imageFormatter = cell => {
        return (
            <img src={cell} width="100px" height="100px" className="" />

        );
    }



    const actionFormatter = cell => {
        return (
            <span>
                <button type="button" onClick={() => onDelete(cell)} rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                    <i class="fa fa-trash-o m-r-10" aria-hidden="true"></i>
                </button>

            </span>
        );
    }

    const columns = [
        { dataField: "titre", text: "Titre" },
        { dataField: "description", text: "Description" },
        { dataField: "date", text: "Date" },
        { dataField: "ville", text: "Ville" },
        { dataField: "quartier", text: "Quartier" },
        { dataField: "id", text: "Actions", formatter: actionFormatter }
    ]

    const onDelete = async (id) => {
        await firebase.deleteEvent(id)
        // console.log(id);
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
