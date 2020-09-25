import React from "react";
//import { MDBCol, MDBFormInline, MDBBtn, MDBIcon } from "mdbreact";
//import { Button, Form, FormGroup, Input } from 'reactstrap'

const SearchBar = () => {
  return (
    <section className="newslatter-section">
        <div className="container" style={{paddingLeft:"0px", paddingRight:"0px", width:"100%", backgroundColor:"#e74c3c"}}>
            <div className="newslatter-inner set-bg" data-setbg="../../../../public/Assets/img/newslatter-bg.jpg">
                <form action="#" class="ni-form">
                    <input type="text" placeholder="rechercher..."/>
                    <button type="submit">Rechercher</button>
                </form>
            </div>
        </div>
    </section>
  );
}

export default SearchBar;