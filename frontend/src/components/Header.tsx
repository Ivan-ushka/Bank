import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCrown} from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <div className="d-flex bg-main align-items-center justify-content-center" style={{ padding: "30px 256px"}}>
            <div className="text-light d-flex">
                <FontAwesomeIcon icon={faCrown} style={{color: "#fff700", fontSize: 35}} />
                <div> CrownBank </div>
            </div>
            <div className="navigation d-flex justify-content-end w-100  align-items-center" style={{fontSize: 16, fontWeight: 400}}>
                <Link to='/' className="text-decoration-none text-light p-2"><div>Home</div></Link>
                <Link to='/orderCard' className="text-decoration-none text-light p-2"><div>Contact</div></Link>
                <Link to='/about' className="text-decoration-none text-light p-2"><div>About us</div></Link>
                <Link to='/orderCard' className="text-decoration-none text-light p-2"><div>Order card</div></Link>
            </div>
            <Link to='/register'><Button className="shadow" style={{width: 100}}>Sign up</Button></Link>
        </div>
    );
}

export default Header;