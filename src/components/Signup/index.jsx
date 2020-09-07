import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return ( 
        <form>
            <div className="container-fluid" >
                <h2>Inscription</h2>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <Link to="/home"  class="btn btn-primary">Submit</Link>
            </div>
            
        </form>
     );
}
 
export default Signup;