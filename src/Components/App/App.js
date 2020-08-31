import React, { Fragment } from 'react';
import Contact from '../Home/contact'
import Header from '../Home/header';
import Carousel from '../Home/carousel';
import Cards from '../Home/Card';

function App() {
  return (
    <Fragment>
      <Header/>
      <Carousel />
      <Cards />
      <Contact />
    </Fragment>
  );
}
export default App;
