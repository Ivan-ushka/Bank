import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="bg-light-purple bg-opacity-75 d-flex justify-content-between" style={{ padding: "30px 295px", fontWeight: 300, fontSize: 18}}>
            <div>2023. All Rights Reserved</div>
            <div>Privacy & Policy</div>
            <ul className='list-group list-group-numbered d-flex justify-content-center align-items-center flex-row'>
                <li><Link to='/'><FontAwesomeIcon icon={faTelegram} className="text-primary px-2" fontSize={30}/></Link></li>
                <li><Link to='/'><FontAwesomeIcon icon={faFacebook} className="text-primary px-2" fontSize={30}/></Link></li>
                <li><Link to='/'><FontAwesomeIcon icon={faInstagram} className="text-primary px-2" fontSize={30}/></Link></li>
                <li><Link to='/'><FontAwesomeIcon icon={faTwitter} className="text-primary px-2" fontSize={30}/></Link></li>
            </ul>

        </div>
    );
}

export default Footer;