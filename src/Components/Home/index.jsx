import React, {Fragment} from 'react';
import Cards from './Card/index'
import Carousel from './carousel/index'
import Contact from './contact/index'
import Videos from './video/index';
import ContactUs from './contactUs/index'

const Home = () => {
    return(
       <Fragment>
           <Carousel />
           <Videos/>
           <Cards />
           <Contact />
           <ContactUs />

       </Fragment>
    )
}

export default Home