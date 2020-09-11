import React, { Fragment } from 'react';
import Dashboard from './Dashboard/index'
import Aside from './SideNav/index'
import AddEvent from './AddEvent/index'
import Header from '../Header/index'
import AddPartner from './Partner/index'
import { Route, Switch } from 'react-router-dom';
import Events from './Events/index'
import eventDetail from './EventDetail';

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
                        <Route path="/partner" component={AddPartner}/> 
                        <Route path="/Events" component={Events}/> 
                        <Route path="/Events/:id" component={eventDetail} />
                    </Switch>
        
            </div>
        </Fragment>
     );
}
 
export default Home;