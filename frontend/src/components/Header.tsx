import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"
function Header() {
    const bg = {
        background: 'linear-gradient(150deg, rgba(211,240,8,1) 1%, rgba(231,228,27,1) 5%, rgba(57,214,157,1) 32%, rgba(105,200,220,1) 52%, rgba(110,109,209,1) 71%, rgba(147,87,199,1) 91%, rgba(169,68,194,1) 97%)',
    };


    return (
        <div className="d-flex align-items-center bg-opacity-25 bg-secondary" >
            <div className=" p-3 text-center float-left">
                <img src={logo} alt="logo" width="100px"/>
            </div>
            <div className=" p-3 text-custom-blue">
                <Link to='/orderCard' className="text-decoration-none text-custom-blue"><h3>About</h3></Link>
            </div>
            <div className=" p-3 text-custom-blue">
                <Link to='/orderCard' className="text-decoration-none text-custom-blue"><h3>Order card</h3></Link>
            </div>
        </div>
    );
}

export default Header;