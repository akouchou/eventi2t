import React, { Fragment } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <header class="header-section">
                <div class="container">
                    <div class="logo">
                        <a href="">
                            <img src="../assets/img/logo/logo.jpg" width="100px" height="50px" alt=""/>
                </a>
            </div>
                        <div class="nav-menu">
                            <nav class="mainmenu mobile-menu">
                                <ul>
                                    <li class="active"><a href="./index.html">Home</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href=".">Speakers</a>
                                        <ul class="dropdown">
                                            <li><a href="#">Jayden</a></li>
                                            <li><a href="#">Sara</a></li>
                                            <li><a href="#">Emma</a></li>
                                            <li><a href="#">Harriet</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./schedule.html">Schedule</a></li>
                                    <li><a href="./blog.html">Blog</a></li>
                                    <li><a href="./contact.html">Contacts</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div id="mobile-menu-wrap"></div>
                    </div>
    </header>
 
        </Fragment>
    );
}

export default Header;
