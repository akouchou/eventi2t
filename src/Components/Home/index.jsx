import React, {Fragment} from 'react';
import Cards from './Card/index'
import Carousel from './carousel/index'
import Contact from './contact/index'

const Home = () => {
    return(
       <Fragment>
           <Carousel />
           <Cards />
           <Contact />
       </Fragment>
    )
}

export default Home