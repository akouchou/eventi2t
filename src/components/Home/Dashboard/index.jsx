import React, { Fragment } from 'react';

class Dashboard extends React.Component {
    render() {
        return(
            <Fragment>
          <div class="page-wrapper">
            <div class="container-fluid">
               
                <div class="row page-titles">
                    <div class="col-md-6 col-8 align-self-center">
                        <h3 class="text-themecolor m-b-0 m-t-0">Dashboard</h3>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">Nombre de Visiteurs du site</h4>
                                <div class="text-right">
                                    <h2 class="font-light m-b-0"><i class="ti-arrow-up text-success"></i> $120</h2>
                                    <span class="text-muted">Todays Income</span>
                                </div>
                                <span class="text-success">80%</span>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "80%", height: "6px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-block">
                                <h4 class="card-title">Nombre d'Evenements Programmé</h4>
                                <div class="text-right">
                                    <h2 class="font-light m-b-0"><i class="ti-arrow-up text-info"></i> $5,000</h2>
                                    <span class="text-muted">Todays Income</span>
                                </div>
                                <span class="text-info">30%</span>
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style={{width: "30%", height: "6px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>  

                
                <div className="row">
                        <div className="col-sm-12">
                        <h2 style={{color: "red"}} >Liste Evenements Programmés</h2>
                        </div>
                </div>

                <div className="row">
                    <div class="col-sm-6">
                            <div class="card">
                                <div class="card-block">
                                    <h4 class="card-title">Titre de l'Evenement</h4>
                                    <div class="text-right">
                                        <h2 class="font-light m-b-0">19/10/2020</h2>
                                        <span class="text-muted">13h30</span>
                                    </div>
                                    <span class="text-info">jj-23</span>
                                </div>
                            </div>
                     </div>
                     <div class="col-sm-6">
                            <div class="card">
                                <div class="card-block">
                                    <h4 class="card-title">Titre de l'Evenement</h4>
                                    <div class="text-right">
                                        <h2 class="font-light m-b-0">19/10/2020</h2>
                                        <span class="text-muted">13h30</span>
                                    </div>
                                    <span class="text-info">jj-23</span>
                                </div>
                            </div>
                     </div>
                     
                </div>
                <div className="row">
                    <div class="col-sm-6">
                            <div class="card">
                                <div class="card-block">
                                    <h4 class="card-title">Titre de l'Evenement</h4>
                                    <div class="text-right">
                                        <h2 class="font-light m-b-0">19/10/2020</h2>
                                        <span class="text-muted">13h30</span>
                                    </div>
                                    <span class="text-info">jj-23</span>
                                </div>
                            </div>
                     </div>
                     <div class="col-sm-6">
                            <div class="card">
                                <div class="card-block">
                                    <h4 class="card-title">Titre de l'Evenement</h4>
                                    <div class="text-right">
                                        <h2 class="font-light m-b-0">19/10/2020</h2>
                                        <span class="text-muted">13h30</span>
                                    </div>
                                    <span class="text-info">jj-23</span>
                                </div>
                            </div>
                     </div>
                     
                </div>
            </div> 
         </div>   
       </Fragment>
        )
    }
    
        
     
}
 
export default Dashboard