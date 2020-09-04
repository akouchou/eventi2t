import React, {Fragment} from 'react';

const Aside = () => {
    return(
        <Fragment>
                <aside class="left-sidebar">
            
            <div class="scroll-sidebar">
              
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <a href="index.html" class="waves-effect"><i class="fa fa-clock-o m-r-10" aria-hidden="true"></i>Dashboard</a>
                        </li>
                        <li>
                            <a href="pages-profile.html" class="waves-effect"><i class="fa fa-user m-r-10" aria-hidden="true"></i>Administrateur</a>
                        </li>
                        <li>
                            <a href="table-basic.html" class="waves-effect"><i class="fa fa-table m-r-10" aria-hidden="true"></i>Utilisateurs</a>
                        </li>
                        <li>
                            <a href="table-basic.html" class="waves-effect"><i class="fa fa-table m-r-10" aria-hidden="true"></i>Ajouter un Evenement</a>
                        </li>
                        <li>
                            <a href="pages-error-404.html" class="waves-effect"><i class="fa fa-info-circle m-r-10" aria-hidden="true"></i>Error 404</a>
                        </li>
                    </ul>
                    
                </nav>
            
            </div>
         
        </aside>
    </Fragment>
    )
}

export default Aside