import React, { Fragment,useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase'
import { authContext } from '../Contexts/AuthContext';

const Signup = (props) => {

    const firebase = useContext(FirebaseContext)

    const { setAuthData } = useContext(authContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }

    }, [password, email, btn]);

    const handleSubmit = e => {
        e.preventDefault();

        firebase.loginUser(email, password)
            .then(user => {
                setAuthData(email);
                setEmail('');
                setPassword('');
                props.history.push('/');
            })
            .catch(error => {
                setError(error);
            })

    }

    return ( 
        <Fragment>
            <div className="container" >
                {error !== '' && <div class="alert alert-danger alert-mg-b alert-success-style4 alert-st-bg3">
                    <button type="button" class="close sucess-op" data-dismiss="alert" aria-label="Close">
                        <span class="icon-sc-cl" aria-hidden="true">&times;</span>
                    </button>
                    <p><strong>Oups..!!</strong> {error.message}</p>
                </div>}
                <div className="card card-login mx-auto mt-5 " style={{ width: '28rem'}}>
                    <div className="card-header"><h3>I2T<span style={{ color:"red" }}>Group</span> - Login</h3></div>
            <div className="card-block">
                        <form onSubmit={handleSubmit}  className="form-horizontal form-material">
                
                        <div className="form-group">
                            <label for="example-email" className="col-md-12">Email</label>
                            <div className="col-md-12">
                                    <input type="email" onChange={e => setEmail(e.target.value)} className="form-control form-control-line" />
                                    </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-12">Password</label>
                                <div className="col-md-12">
                                    <input type="password" onChange={e => setPassword(e.target.value)} className="form-control form-control-line"/>
                                    </div>
                                </div>

                                    <div className="form-group">
                                        <div className="col-sm-12 text-center">
                                    {btn ? <button className="btn btn-primary btn-block loginbtn">Login</button> : <button className="btn btn-success btn-block loginbtn" disabled>Login</button>}

                                 
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
        </div>
  
     </Fragment>
     );
}
 
export default Signup;