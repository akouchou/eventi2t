import React,{Component, Fragment} from 'react'

import * as emailjs from 'emailjs-com'

class Contact extends Component {


    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        let templateParams = {
            subject: subject,
          name: name,
          email: email,
          message: message,
         }
    
         emailjs.send(
            "service_u5w8aak",
            "template_nt9qv2k",
           templateParams,
          'user_qsCaizYblaLOa904GGYVm'
         ).then(res => {
            console.log('Votre mail a bien été envoyé')
          }).catch(err => console.error('Probmème reconctré. Veuillez reesayer s\'il-vous-plaît', err))
        
         this.resetForm()
     }
    resetForm() {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

    
    render(){

        return(
            <Fragment>
                <section id="team" className="contact">
                    <div className="container">
    
                        <div className="section-title">
                            <h2 data-aos="fade-up">Contact</h2>
                        </div>
    
                        <div className="row justify-content-center">
    
                            <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up">
                                <div className="info-box">
                                <i className="bx bx-map"></i>
                                <h3>Address</h3>
                                <p>Cameroun, Yaoundé , Avenue Germaine</p>
                                </div>
                            </div>
    
                            <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="info-box">
                                <i className="bx bx-envelope"></i>
                                <h3>Email</h3>
                                <p>info@example.com<br/>contact@example.com</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="info-box">
                                    <i className="bx bx-phone-call"></i>
                                    <h3>Telephonoe</h3>
                                    <p>+237 65555555<br/>+237 67788888</p>
                                </div>
                            </div>
                        </div>
    
                        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
                            <div className="col-xl-9 col-lg-12 mt-4">
                                <form  className="php-email-form" onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="form-row">
                                        <div className="col-md-6 form-group">
                                            <input 
                                                type="text" 
                                                name="name" 
                                                className="form-control" 
                                                id="name" 
                                                placeholder="Votre Nom" 
                                                data-rule="minlen:4" 
                                                data-msg="Please enter at least 4 chars" 
                                                value={this.state.name}
                                                onChange={this.handleChange.bind(this, 'name')}/>
                                            <div className="validate"></div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                name="email" id="email" 
                                                placeholder="votre Email" 
                                                data-rule="email" 
                                                data-msg="Please enter a valid email" 
                                                value={this.state.email}
                                                onChange={this.handleChange.bind(this, 'email')} />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="subject" id="subject" 
                                            placeholder="Sujet" 
                                            data-rule="minlen:4" 
                                            data-msg="Please enter at least 8 chars of subject" 
                                            value={this.state.subject}
                                            onChange={this.handleChange.bind(this, 'subject')}/>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            className="form-control" 
                                            name="message" 
                                            rows="5" 
                                            data-rule="required" 
                                            data-msg="Please write something for us" 
                                            placeholder="votre Message"
                                            value={this.state.message}
                                            onChange={this.handleChange.bind(this, 'message')}></textarea>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Votre message a été envoyé, merci!!</div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" style={{textAlign:"center"}}>Envoyer le Message</button>
                                    </div>
                                </form>
                            </div>
    
                        </div>
    
                </div>
            </section>
            
            </Fragment>
        );

    }
}

export default Contact


