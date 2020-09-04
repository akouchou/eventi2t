import React, {Fragment } from 'react';

const Header = () => {
    return(
        <Fragment>
        <header class="topbar fix-top">
            <nav class="navbar top-navbar navbar-toggleable-sm navbar-light">
    
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.html">
                     <h2>EventAdmin</h2>
                    </a>
                </div>
                
                <div class="navbar-collapse">
               
                    <ul class="navbar-nav mr-auto mt-md-0 ">
                       
                        <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                        <li class="nav-item hidden-sm-down">
                            <form class="app-search p-l-20">
                                <input type="text" class="form-control" placeholder="Search for..." /> <a class="srh-btn"><i class="ti-search"></i></a>
                            </form>
                        </li>
                    </ul>
          
                    <ul class="navbar-nav my-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user" class="profile-pic m-r-5" />Markarn Doe</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </Fragment>
    )
}

export default Header