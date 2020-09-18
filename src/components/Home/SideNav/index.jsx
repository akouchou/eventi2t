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
                            <Link to="/admin" class="waves-effect"><i class="fa fa-send m-r-10" aria-hidden="true"></i>Ajouter un Evenement</Link>
                        </li>
                        <li>
                                <Link to="/Events" class="waves-effect"><i class="fa  fa-file-text m-r-10" aria-hidden="true"></i>Liste des Evenements</Link>
                        </li>
                       
                     
                    </ul>
                    
                </nav>
            
            </div>
         
        </aside>
    </Fragment>
    )
}

export default Aside