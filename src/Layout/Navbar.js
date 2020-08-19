import React, { useState } from 'react'
import "./mainCss.css";
import pic from '../img/Dishoo.jpg'
import {AiOutlineBars} from "react-icons/ai"
import { NavbarToggler, Collapse, Nav, NavItem,NavLink } from 'reactstrap';

const Navbar =()=> {

  const [isOpen,setisOpen]= useState(false);
  const toggle= () => setisOpen(!isOpen);
    return (
        <div>
         
         <nav class="navbar navbar-expand-lg  fixed-top " style={{backgroundColor: "#2C3347"}} id="mainNav">
        <div class="container">
          <div className="ml-auto mr-auto ">
          <NavbarToggler onClick={toggle} style={{color:"white", backgroundColor:"#B14448"}} className="mr-5"><AiOutlineBars/></NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar >
            <ul class="navbar-nav ml-auto" style={{textIndent:"center"}} >
              <NavItem className="nav-item">
                <NavLink  href="/" >Home</NavLink >
              </NavItem> 
              
              <NavItem class="nav-item">
                <NavLink   href="/aboutme">About Me</NavLink >
              </NavItem>
              <NavItem class="nav-item">
                <NavLink   href="/work">Work</NavLink >
              </NavItem>
              <NavItem class="nav-item">
                <NavLink   href="/contact">Contact</NavLink >
              </NavItem>
            </ul>
          </Nav>
          </Collapse>
          </div>
          </div>
      </nav>

    </div>
    )
}
export default Navbar;
