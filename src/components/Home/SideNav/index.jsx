import React, {Fragment} from 'react';
import { Link } from 'react-router-dom'

const Aside = () => {
    return(
        <Fragment>
                <aside class="left-sidebar">
            
            <div class="scroll-sidebar">
              
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <Link to="/dashboard" class="waves-effect"><i class="fa fa-clock-o m-r-10" aria-hidden="true"></i>Dashboard</Link>
                        </li>
                        <li>
                            <Link  to="/admin" class="waves-effect"><i class="fa fa-user m-r-10" aria-hidden="true"></i>Ajouter un Evenement</Link>
                        </li>
                        <li>
                            <a href="table-basic.html" class="waves-effect"><i class="fa fa-table m-r-10" aria-hidden="true"></i>Liste des Evenements</a>
                        </li>
                        <li>
                            <a href="table-basic.html" class="waves-effect"><i class="fa fa-table m-r-10" aria-hidden="true"></i>Partenaires</a>
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