import React from "react";
import Nav from 'react-bootstrap/Nav';
import { HashLink } from 'react-router-hash-link';
import "./nav.css";



const links = () => {

  return (
    <div className="navSection">
      <Nav className="justify-content-center navLinks">
        <Nav.Item>
          <a className="navLink"><HashLink smooth to="#skillSection">About</HashLink></a>
        </Nav.Item>
        <Nav.Item>
          <a className="navLink"><HashLink smooth to="#statSection">Services</HashLink></a>
        </Nav.Item>
        <Nav.Item>
          <a className="navLink"><HashLink smooth to="#contactSection">Contact</HashLink></a>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default links;