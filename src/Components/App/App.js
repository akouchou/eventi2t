import React from 'react';

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
      <Route path="/event/:id" component={Event} />
      <Route exact path="/" component={Home} />
        
      </Switch>
      
      <Footer/>
    </Router>
  );
}
export default App;