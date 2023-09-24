import React from 'react';
// @ts-ignore
import logo from "../assets/images/logo.png"
function Header() {
    return (
        <div className="d-flex bg-orange align-items-center">
            <div className=" p-3 text-center float-left">
                <img src={logo} alt="logo" width="150px"/>
            </div>
            <div className=" p-3 text-custom-blue">
                <h3>About</h3>
            </div>
            <div className=" p-3 text-custom-blue">
                <h3>information</h3>
            </div>
        </div>
    );
}

export default Header;