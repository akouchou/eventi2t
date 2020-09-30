import React from 'react';

import Header from '../Home/header';
import Home from '../Home/index'
import Event from '../Event/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import MapCard from '../Event/CardMaps';
import Faq from '../Home/Faq';

function App() {

  
  return (
    <Router>

      <Header/>
      
      <Switch>
      <Route path="/event/:id" component={Event} />
      <Route exact path="/" component={Home} />
      <Route path="/map/:id" component={MapCard} />
      <Route  path="/faq" component={Faq} /> 

      </Switch>
      
    </Router>
  );
}
export default App;
