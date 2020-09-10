import React, { useState, useContext, useEffect} from 'react';
import { FirebaseContext } from '../Firebase';
import { Link } from 'react-router-dom';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";


function Events() {

    const firebase = useContext(FirebaseContext)
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () =>{
            const db = firebase.selectEvent().onSnapshot(function(data){
                setTasks(data.docs.map(doc => ({...doc.data(), id: doc.id })));
                setLoading(true)
            })
            
        };
        fetchData()
    }, [firebase, tasks]);

    function imageFormatter(cell) {
        return (
            <img src={cell} width="100px" height="100px" className="" alt="Event cover" />
           
        );
    }
    function actionFormatter(cell) {
        return (
            <span>
                <button type="button" rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                    <i class="material-icons">edit</i>
                </button>
                <button type="button"  onClick={() => onDelete(cell)} rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                    <i class="material-icons">close</i>
                </button>
            </span>
        );
    }

    const columns = [
        { dataField: "titre", text: "Noms"},
        { dataField: "date", text: "Dates"},
        { dataField: "urlImage", text: "Images", formatter: imageFormatter},
        { dataField: "id", text: "Actions", formatter: actionFormatter }
    ]

    const onDelete = async (id) => {
        await firebase.deleteEvent(id)
         // console.log(id);
     }

    return(
        <>

            <div class="col-lg-12 col-md-12">
                <Link class="btn btn-primary" to="/admin" >
                        Ajouter une catégorie
                </Link>
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Catégories </h4>
                        <p class="card-category">Exchange by 3DM</p>
                    </div>
                    <div class="card-body table-responsive">
                        {loading ?(
                            <BootstrapTable
                                keyField="id"
                                data={tasks}
                                columns={columns}
                                pagination={paginationFactory()}
                            />
                        ):(
                            <ReactBootStrap.Spinner animation="border" />
                         )

                        }
                    </div>
                </div>
            </div>
        </>
    );


}

export default Events;