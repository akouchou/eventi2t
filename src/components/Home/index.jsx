import React, { Fragment } from 'react';
import Dashboard from './Dashboard/index'
import Aside from './SideNav/index'
import AddEvent from './AddEvent/index'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

const Home = () => {
    return ( 
        <Router>
            <Aside/>
            
            <Switch>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/admin" component={AddEvent}/>
            </Switch>
            
        </Router>
     );
}
 
export default Home;