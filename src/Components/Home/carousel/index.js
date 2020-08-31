import React, { Fragment } from 'react';

function Carousel() {
  return (
    <Fragment>
          <section id="hero">
              <div className="hero-container">
                  <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                      <div className="carousel-inner" role="listbox">


                          <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/slide/slide-1.jpg)' }}>
                              <div className="carousel-container">
                                  <div className="carousel-content">
                                      <h2 className="animate__animated animate__fadeInDown">Welcome to <span>I2TEvent</span></h2>
                                      <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                      <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Read More</a>
                                  </div>
                              </div>
                          </div>


                          <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/slide/slide-2.jpg)' }}>
                              <div className="carousel-container">
                                  <div className="carousel-content">
                                      <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                                      <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                      <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Read More</a>
                                  </div>
                              </div>
                          </div>


                          <div className="carousel-item" style={{ backgroundImage: 'url(assets/img/slide/slide-3.jpg)' }}>
                              <div className="carousel-container">
                                  <div className="carousel-content">
                                      <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                                      <p className="animate__animated animate__adeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                      <a href="#about" className="btn-get-started scrollto animate__animated animate__fadeInUp">Read More</a>
                                  </div>
                              </div>
                          </div>

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
