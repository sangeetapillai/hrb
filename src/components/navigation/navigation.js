import React from "react";
import { FaBell, FaSmile, FaEnvelope, FaHome } from 'react-icons/fa';
import style from "./navigation.module.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


export default ({data}) => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Navbar.Brand href="#home"><img width="25" height="25" src="../../iq.png" /></Navbar.Brand>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="font-weight-bold">Life@VIQ</Nav.Link>
              <Nav.Link href="#link" className="font-weight-bold">Job</Nav.Link>
              <NavDropdown title="Events" id="basic-nav-dropdown" className="font-weight-bold">
                  {data.edges.map(({node}) => (
                    <NavDropdown.Item href={node.event_link}>{node.title}</NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
              <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/home"><FaHome /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><FaBell /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><FaEnvelope /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><FaSmile /></a>
                </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#"><img className={style.add_margin_bottom} width="25" height="20" src="../../nielsen.jpg" /></a>
                </li>
            </ul>
         </Navbar.Collapse>
</Navbar>
    )
}





