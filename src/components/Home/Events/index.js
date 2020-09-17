import React, { useState, useContext, useEffect} from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link } from 'react-router-dom';
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";


const  Events = () => {

    const firebase = useContext(FirebaseContext)

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)

    //const data = []

    useEffect(() => {
        const fetchData = async () =>{
            await firebase.selectEvent().onSnapshot(data => {
                setTasks(data.docs.map(doc => ({...doc.data(), id: doc.id })));
                setLoading(true)
            })
            
        };
        fetchData()

    }, []);

    const  imageFormatter = cell => {
        return (
            <img src={cell} width="100px" height="100px" className=""  />
           
        );
    }



    const  actionFormatter = cell => {
        return (
            <span>
                <Link type="button" to={`/Events/${cell}`} rel="tooltip" title="Edit Task" class="btn btn-primary btn-link btn-sm">
                    <i class="material-icons">info</i>
                </Link>
                <button type="button"  onClick={() => onDelete(cell)} rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
                    <i class="material-icons">close</i>
                </button>
            
            </span>
        );
    }

    const columns = [
        { dataField: "titre", text: "Titre"},
        { dataField: "description", text: "Description"},
        { dataField: "date", text: "Date"},
        { dataField: "ville", text: "Ville"},
        { dataField: "quartier", text: "Quartier"},
        { dataField: "id", text: "Actions", formatter: actionFormatter }
    ]

    const onDelete = async (id) => {
        await firebase.deleteEvent(id)
         // console.log(id);
     }

    return(
        <div class="page-wrapper">
        <div class="container-fluid">
        <div class="row page-titles">
                    <div class="col-md-6 col-8 align-self-center">
                        <h3 class="text-themecolor m-b-0 m-t-0">Liste des evenements</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active">Liste des éevènements</li>
                        </ol>
                    </div>
            
                </div>
            <div class="col-lg-12 col-md-12 ">
                <Link class="btn btn-primary" to="/admin" >
                        Ajouter un Evenement
                </Link>
               
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Evenements </h4>
                        <p class="card-category">I2T group</p>
                    </div>
                    <div class="card-body table-responsive">
                        {loading ? (
                            <BootstrapTable
                                keyField="id"
                                data={tasks}
                                columns={columns}
                                pagination={paginationFactory()}
                            />
                        ):(
                            <div className="spinner-border text-center" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                         )

                        }
                    </div>
                </div>
            </div>
        </div> 
        </div>   
    );


}

export default Events;