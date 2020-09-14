import React, { useContext, useState } from 'react';

import { FirebaseContext } from '../Firebase'


const Register = (props) => {

    const firebase = useContext(FirebaseContext)
    

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const handleSubmit = e => {
        e.preventDefault();
        //destructuring pour recuperer les information
        const { email, password, pseudo } = loginData;
        firebase.signupUser(email, password)
            .then(authuser => {
                return firebase.user(authuser.user.uid).set({
                    pseudo,
                    email,
                    password
                })
            })
            .then(user => {
                setLoginData({ ...data });
                props.history.push('/');
            })
            .catch(error => {
                setError(error)
            })

    }



    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value })
    }

    const { pseudo, email, password, confirmPassword } = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
        ? <button className="btn btn-primary" disabled>Register</button> : <button className="btn btn-primary">Register</button>

    //getion erreur
    const erroMsg = error !== '' && <div class="alert alert-danger alert-mg-b alert-success-style4 alert-st-bg3">
        <button type="button" class="close sucess-op" data-dismiss="alert" aria-label="Close">
            <span class="icon-sc-cl" aria-hidden="true">&times;</span>
        </button>
        <p><strong>Oups..!!</strong> {error.message}</p>
    </div>


    return ( 
        
        <div className="container" >
            {erroMsg}
            <div className="card card-login mx-auto mt-5 " style={{ width: '28rem' }}>
                <div className="card-header"><h3>I2T<span style={{ color: "red" }}>Group</span> - Register</h3></div>
                <div className="card-block">
                    <form onSubmit={handleSubmit} className="form-horizontal form-material">

                        <div className="form-group">
                            <label for="example-email" className="col-md-12">Pseudo</label>
                            <div className="col-md-12">
                                <input type="text" onChange={handleChange} value={pseudo} id="pseudo" className="form-control form-control-line"  />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="example-email" className="col-md-12">Email</label>
                            <div className="col-md-12">
                                <input type="email" onChange={handleChange} value={email} id="email" className="form-control form-control-line"  />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12">Password</label>
                            <div className="col-md-12">
                                <input type="password" onChange={handleChange} value={password} id="password"  className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="example-email" className="col-md-12">Repeat password</label>
                            <div className="col-md-12">
                                <input type="password" onChange={handleChange} value={confirmPassword} id="confirmPassword" className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12 text-center">
                                {btn}
                               
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

  );
}
 
export default Register;