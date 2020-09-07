import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return ( 
        
    <div className="row">  

        
    <div className="col-md-3"></div>
    <div className="col-md-4">

        <form>
            <div className="container-fluid" >
                <h2 className="text-center">Register</h2>

                <div class="form-group">
                    <label for="exampleInputName">EnterName</label>
                    <input type="Name" class="form-control" id="exampleInputName" placeholder="Name" />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email Address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">EnterPassword</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">ConfirmPassword</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div className="text-center">
                   <Link to="/signup"  class="btn btn-primary">Register</Link>
                </div>


            </div>
            
        </form>
        </div>
         <div className="col-md-5"></div>
     </div>
  );
}
 
export default Register;