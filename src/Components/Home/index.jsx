import React, {Fragment} from 'react';
import Cards from './Card/index'
import Carousel from './carousel/index'
import Contact from './contact/index'
import Videos from './video/index';

const Home = () => {
    return(
       <Fragment>
           <Carousel />
           <Videos/>
           <Cards />
           <Contact />
       </Fragment>
    )
}

export default Home