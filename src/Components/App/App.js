import React, { Fragment } from 'react';
import Contact from '../Home/contact'
import Header from '../Home/header';
import Carousel from '../Home/carousel';

function App() {
  return (
    <Fragment>
      <Header/>
      <Carousel />
      <Contact />
    </Fragment>
  );
}
export default App;
