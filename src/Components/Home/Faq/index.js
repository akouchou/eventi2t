import React, { Fragment } from 'react';
import Footer from '../footer';

function Faq() {
  return (
    <Fragment>
          <section class="accordion-section clearfix mt-3 mb-5" aria-label="Question Accordions">
              <div class="container">

                  <h2>QUESTIONS FRÉQUEMMENT POSÉES</h2>
                  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                      <div class="panel panel-default">
                          <div class="panel-heading p-3 mb-3" role="tab" id="heading0">
                              <h3 class="panel-title">
                                  <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
                                      <i class="fa fa-minus"></i> What are the benefits of Solodev CMS?
			  </a>
                              </h3>
                          </div>
                          <div id="collapse0" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                              <div class="panel-body px-3 mb-4">
                                  <p>With Solodev CMS, you and your visitors will benefit from a finely-tuned technology stack that drives the highest levels of site performance, speed and engagement - and contributes more to your bottom line. Our users fell in love with:</p>
                                  <ul>
                                      <li>Light speed deployment on the most secure and stable cloud infrastructure available on the market.</li>
                                      <li>Scalability – pay for what you need today and add-on options as you grow.</li>
                                      <li>All of the bells and whistles of other enterprise CMS options but without the design limitations - this CMS simply lets you realize your creative visions.</li>
                                      <li>Amazing support backed by a team of Solodev pros – here when you need them.</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div class="panel panel-default">
                          <div class="panel-heading p-3 mb-3" role="tab" id="heading1">
                              <h3 class="panel-title">
                                  <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                      <i class="fas fa-minus"></i>  How easy is it to build a website with Solodev CMS?
			  </a>
                              </h3>
                          </div>
                          <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                              <div class="panel-body px-3 mb-4">
                                  <p>Building a website is extremely easy. With a working knowledge of HTML and CSS you will be able to have a site up and running in no time.</p>
                              </div>
                          </div>
                      </div>

                      <div class="panel panel-default">
                          <div class="panel-heading p-3 mb-3" role="tab" id="heading2">
                              <h3 class="panel-title">
                                  <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                      <i class="fa fa-minus"></i>   What is the uptime for Solodev CMS?
			  </a>
                              </h3>
                          </div>
                          <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                              <div class="panel-body px-3 mb-4">
                                  <p>Using Amazon AWS technology which is an industry leader for reliability you will be able to experience an uptime in the vicinity of 99.95%.</p>
                              </div>
                          </div>
                      </div>

                      <div class="panel panel-default">
                          <div class="panel-heading p-3 mb-3" role="tab" id="heading3">
                              <h3 class="panel-title">
                                  <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                      <i class="fa fa-minus"></i>  Can Solodev CMS handle multiple websites for my company?
			  </a>
                              </h3>
                          </div>
                          <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                              <div class="panel-body px-3 mb-4">
                                  <p>Yes, Solodev CMS is built to handle the needs of any size company. With our Multi-Site Management, you will be able to easily manage all of your websites.</p>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </section>
          <Footer />
    </Fragment>
  );
}

export default Faq;
