import React, { useState, useContext, useEffect} from 'react';
import { FirebaseContext } from '../../Firebase'
import { Link } from 'react-router-dom';
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next"


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

    const statusFormatter = cell => {

        let result;

        if (cell === '1') {
            result = <i  className="btn btn-success" rel="tooltip" title="Remove">
                Evènement en cours
                </i>
        } else if (cell === '2'){
            result = <i  className="btn btn-warning" rel="tooltip" title="Remove">
                Evènement a venir </i>
        } else if (cell === '3') {
            result = <i className="btn btn-danger" rel="tooltip" >
                Evènement passé </i>
        } else if (cell === '4') {
            result = <i  className="btn btn-light" rel="tooltip" title="Remove">
                <i class="fa  fa-file-zip-o m-r-10" aria-hidden="true"></i> Evènement archiver</i>
        }
        else{
            result = <i  className="btn btn-secondary"  rel="tooltip" title="Remove">
                Nouveau </i>
        }
        return result;
    }



    const  actionFormatter = cell => {
        return (
            <span>
                <Link type="button" className="btn btn-info" to={`/Events/${cell}`} rel="tooltip" title="Edit Task" >
                    <i class="fa  fa-cog"></i>
                </Link>
            </span>
        );
    }

    const columns = [
        { dataField: "titre", text: "Titre"},
        { dataField: "status", text: "Status", formatter: statusFormatter},
        { dataField: "date", text: "Date"},
        { dataField: "ville", text: "Ville"},
        { dataField: "quartier", text: "Quartier"},
        { dataField: "id", text: "Actions", formatter: actionFormatter }
    ]



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
                        <i class="fa fa-plus m-r-10" aria-hidden="true"></i>
                        Ajouter un Evenement
                </Link>
               
                <div class="card mt-2">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">
                            <i class="fa fa-plus m-r-10" aria-hidden="true"></i>
                            Liste des évenements 
                        </h4>
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