import React from 'react';
import Home from '../Home/index'
import Signup from '../Signup/index'
import Register from '../Register/index'
import { BrowserRouter } from 'react-router-dom';

import { Route, Switch} from 'react-router-dom' 
import PrivateRoute from '../PrivateRoute';

//

const App = () => {
  return(
    <BrowserRouter>
       <Switch>
        <Route path="/singin" component={Signup} />
      
        <Route path="/singup" component={Register}/>
        <PrivateRoute path="/" component={Home} />
       </Switch>
    </BrowserRouter>
  )
}

export default App;
