import React, { Fragment } from 'react';
import Header from '../Header/index'
import Aside from '../SideNav/index'
import Dashboard from '../Home/Dashboard/index'
import Admin from '../Home/Profile_Admin/index'



const App = () => {
  return(
    <Fragment>
       <Header/>
       <Aside/>
       <Dashboard/>
       <Admin/>
    </Fragment>
  )
}

export default App;
