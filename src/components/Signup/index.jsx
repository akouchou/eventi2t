import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return ( 
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-4">
                <form>
                    <div className="container-fluid" >
                        <h2 className="text-center">Connexion</h2>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="text-center">
                            <Link to="/home" class="btn btn-primary">Submit</Link>
                        </div>
                    </div>
                
                </form>
            </div>
            <div className="col-md-5"></div>
        </div>
     );
}
 
export default Signup;