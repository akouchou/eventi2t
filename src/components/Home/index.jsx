import React, { Fragment } from 'react';
import Dashboard from './Dashboard/index'
import Aside from './SideNav/index'
import AddEvent from './AddEvent/index'
import Header from '../Header/index'

import { Route, Switch } from 'react-router-dom';
import Events from './Events/index'
import EventDetail from './EventDetail';

const Home = () => {
    return ( 
        <Fragment>
           
            <div id="main-wrapper">
                <Header />  
            
                    <Aside/>
                    
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/admin" component={AddEvent}/>
        
                        <Route path="/Events/:id" component={EventDetail} />
                        <Route path="/Events" component={Events}/> 
                        
                    </Switch>
        
            </div>
        </Fragment>
     );
}
 
export default Home;