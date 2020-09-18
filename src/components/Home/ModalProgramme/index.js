import React, { Fragment, useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../../Firebase'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


function ModalProgramme({id}) {
    
    const firebase = useContext(FirebaseContext)
    const [jour, setJour] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {

        const fetchData = async () => {
            const db = await firebase.listProgramme(id)
                .onSnapshot(function (data) {
                    setTasks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    setLoading(true)
                })

        };
        fetchData()
    }, [firebase]);

    const handleSubmit = (e) =>{
        e.preventDefault()
         handleClickOpen()
        firebase.createProgramme().add({
            id_evenement: id,
            jour: jour,
            description: description
        }).then(()=>{
            setJour('')
            setDescription('')
            handleClose()
        }).catch(error => alert(error))
       
    }
    const actionFormatter = cell => {
        return (
            <span>
                <button type="button" onClick={() => onDelete(cell)} rel="tooltip" title="Remove" class="btn btn-danger">
                    <i class="fa fa-trash-o m-r-10" aria-hidden="true"></i>
                </button>

            </span>
        );
    }

    
    const columns = [
        { dataField: "jour", text: "Jour" },
        { dataField: "description", text: "Description"},
        { dataField: "id", text: "Actions", formatter: actionFormatter }
    ]

    const onDelete = async (id) => {
        await firebase.deleteProgramme(id).then(() => {
            console.log("idEv");
        })
        // 
    }

  return (
      <Fragment>
      <form onSubmit={handleSubmit}>
          <div className="container-fluid">
              <h3 className="text-center">Ajouter un programme </h3>

                  <div className="row form-group">
                      <label className="col-md-6" >Choisir le jour</label>
                      <div className="col-md-12">
                          <select onChange={e => setJour(e.target.value)} value={jour} id="jour" class="form-control form-control-line" required>
                              <option>Choisir</option>
                              <option value="Lundi">Lundi</option>
                              <option value="Mardi">Mardi</option>
                              <option value="Mercredi">Mercredi</option>
                              <option value="Jeudi">Jeudi</option>
                              <option value="Vendredi">Vendredi</option>
                              <option value="Samedi">Samedi</option>
                              <option value="Dimanche">Dimanche</option>
                          </select>
                      </div>
                  </div>
              <div class="form-group">
                  <label for="exampleInputName">Entrer une description </label>
                      <input type="text" onChange={e => setDescription(e.target.value)} value={description} id="description" placeholder="Description" class="form-control" id="exampleInputName" required />

              </div>


              <div className="text-center">
                  <button class="btn btn-primary">
                      <i class="fa fa-send m-r-10" aria-hidden="true"></i> Ajouter </button>
              </div>

          </div>

      </form>
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
          )}
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
              <DialogTitle id="alert-dialog-title">{"Patienter s'il vous plaît "}</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                      <div className="mt-5">
                          <svg className="circular" viewBox="25 25 50 50">
                              <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                          </svg>
                      </div>
                  </DialogContentText>
              </DialogContent>
              <DialogActions>

              </DialogActions>
          </Dialog>
      </Fragment>
  );
}

export default ModalProgramme;
