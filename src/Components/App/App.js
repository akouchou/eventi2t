<<<<<<< HEAD
import React from 'react';

import Header from '../Home/header';
import Home from '../Home/index'
import Event from '../Event/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Footer from '../Home/footer';
import MapCard from '../Event/CardMaps';

function App() {
  return (
    <Router>

      <Header/>
      
      <Switch>
      <Route path="/event/:id" component={Event} />
      <Route exact path="/" component={Home} />
      <Route path="/map/:id" component={MapCard} />
        
      </Switch>
      
      <Footer/>
    </Router>
  );
}
export default App;
=======
import React from 'react';

import Header from '../Home/header';
import Home from '../Home/index'
import Event from '../Event/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Footer from '../Home/footer';
import MapCard from '../Event/CardMaps';

function App() {
  return (
    <Router>

      <Header/>
      
      <Switch>
      <Route path="/event/:id" component={Event} />
      <Route exact path="/" component={Home} />
      <Route path="/map/:id" component={MapCard} />
        
      </Switch>
      
      <Footer/>
    </Router>
  );
}
export default App;
>>>>>>> 10eb53c94dfc8ed2bcc76681fd8f9f64161c7e6a
