import React, { Fragment, useContext } from 'react';
import { FirebaseContext } from '../Firebase'
import { Link } from 'react-router-dom';
import { authContext } from '../Contexts/AuthContext';

const Header = () => {

    const firebase = useContext(FirebaseContext)
    const { setAuthData, auth } = useContext(authContext);


    const handleLogOut = e => {

        firebase.signoutUser()
        console.log("Déconnexion");
        setAuthData(null);
    }


    return(
        <Fragment>
            <header className="topbar">
                <nav className="navbar top-navbar  navbar-toggleable-sm navbar-light" > 
     
                    <div className="navbar-header" style={{ position: "fixed" }}>
                        <Link className="navbar-brand" to="/">
                          
                            <b>
                             
                                <img src="../assets/images/logo.jpg" style={{ width: "200px", height: "90px" }} alt="homepage" className="dark-logo mt-5" />

                            </b>
                           
                      
                        </Link>
                    </div>
           
                <div className="navbar-collapse" >
                    <ul className="navbar-nav mr-auto mt-md-0 ">
                  
                        <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu"></i></a> </li>
                            <li className="nav-item hidden-sm-down">
                                
                        </li>
                    </ul>
                    <ul className="navbar-nav my-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <Link onClick={handleLogOut} className="fa fa-sign-out text-white"></Link></a>
                                </li>
                            </ul>
                </div>
            </nav>
        </header>
    </Fragment>
    )
}

export default Header