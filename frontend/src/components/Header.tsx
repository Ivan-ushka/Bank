import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <Navbar expand="lg" className="d-flex bg-main align-items-center justify-content-center px-5 py-4">
            <Container>
                <Navbar.Brand className="text-white align-items-center justify-content-center d-flex text-center m-0">
                    <FontAwesomeIcon icon={faCrown} style={{color: "#fff700", fontSize: 35}} />
                    <h4 className="m-0"> CrownBank</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link to='/' className="text-decoration-none text-light p-2">
                        <h5 className="m-0">Home</h5>
                    </Link>
                    <Link to='/orderCard' className="text-decoration-none text-light p-2">
                        <h5 className="m-0">Contact</h5>
                    </Link>
                    <Link to='/about' className="text-decoration-none text-light p-2">
                        <h5 className="m-0">About us</h5>
                    </Link>
                    <Link to='/orderCard' className="text-decoration-none text-light p-2">
                        <h5 className="m-0">Order card</h5>
                    </Link>
                </Nav>
                <Link to='/register'><Button className="shadow" style={{width: 100}}>Sign up</Button></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;