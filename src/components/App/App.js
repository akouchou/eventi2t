import React, { Fragment } from 'react';
import Header from '../Header/index'
import Aside from '../SideNav/index'
import Dashboard from '../Home/Dashboard/index'
import Admin from '../Home/Profile_Admin/index'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 



const App = () => {
  return(
    <Router>
       <Header/>      
       <Aside/>

       <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/" component={Dashboard}/>
       </Switch>

    </Router>
  )
}

export default App;
