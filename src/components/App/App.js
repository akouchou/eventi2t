import React from 'react';
import Header from '../Header/index'
import Home from '../Home/index'
import Signup from '../Signup/index'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 



const App = () => {
  return(
    <Router>
       <Header/>      
       
       <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Signup}/>
       </Switch>

    </Router>
  )
}

export default App;
