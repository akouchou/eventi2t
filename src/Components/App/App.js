import React, { Fragment } from 'react';

import Header from '../Home/header';
import Home from '../Home/index'
import Event from '../Event/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Footer from '../Home/footer';

function App() {
  return (
    <Router>

      <Header/>
      
      <Switch>
      <Route path="/event" component={Event} />
      <Route path="/" component={Home} />
        
      </Switch>
      
      <Footer/>
    </Router>
  );
}
export default App;
