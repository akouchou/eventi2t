import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const  Carousel = ({ data, loading }) => {

   


  return (
    <Fragment>
          <section id="hero">
              <div className="hero-container">
                  <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                      <div className="carousel-inner" role="listbox">


                          {
                              loading ? ( data.map(event => (
                                  event.status == 1 && (
                                    <Fragment>
                                        <div className="carousel-item active" style={{ backgroundImage: `url(${event.urlImage[0]})` }}>
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animate__animated animate__fadeInDown">Welcome to <span>I2TEvent</span></h2>
                                            <p className="animate__animated animate__fadeInUp"> {event.titre} </p>
                                            <Link to={`/event/${event.id}`} className="btn-get-started scrollto animate__animated animate__fadeInUp">Read More</Link>
                                        </div>
                                    </div>
                                </div>
      
      
                                <div className="carousel-item" style={{ backgroundImage: `url(${event.urlImage[1]})` }}>
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                                            <p className="animate__animated animate__fadeInUp">{event.titre}</p>
                                            <Link to={`/event/${event.id}`} className="btn-get-started scrollto animate__animated animate__fadeInUp">Read More</Link>
                                        </div>
                                    </div>
                                </div>
      
      
                                <div className="carousel-item" style={{ backgroundImage: `url(${event.urlImage[2]})` }}>
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                                            <p className="animate__animated animate__adeInUp">{event.titre}</p>
                                            <Link to={`/event/${event.id}`} className="btn-get-started scrollto animate__animated animate__fadeInUp">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                    </Fragment>
                                  )
                              ))
                              ): (
                                <div className="spinner-border text-center" role="status">
                                  <span className="sr-only">Loading...</span>
                                </div>
                              )
                          }

                      </div>

                      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                          <span className="carousel-control-prev-icon ri-arrow-left-line" aria-hidden="true"></span>
                          <span className="sr-only">Previous</span>
                      </a>

                      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                          <span className="carousel-control-next-icon ri-arrow-right-line" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                      </a>

                  </div>
              </div>
          </section>
    </Fragment>
  );
}

export default Carousel;
