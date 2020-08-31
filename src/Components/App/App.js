import React, { Fragment } from 'react';
import About from '../Home/About_us'
import Header from '../Home/header';
import Carousel from '../Home/carousel';

function App() {
  return (
    <Fragment>
      <Header/>
      <Carousel/>
      <About />
    </Fragment>
  );
}
export default App;
