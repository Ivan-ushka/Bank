import React from 'react';
import bank from "../../assets/images/bank.svg";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
interface CardProps {
    title: string,
    text: string,
    link: string
}
function Card({title, text, link}: CardProps) {
    return (
        <div className='card d-flex justify-content-center align-items-center text-center p-3 mx-3 shadow' style={{width: 350, height: 400}}>
            <img className='m-3' src={link} alt="bank" width={80}/>
            <h3 className='m-3' style={{fontWeight: 600}}>{title}</h3>
            <p className='m-3'style={{fontWeight: 300, fontSize: 16}}>{text}</p>
            <Link to="/" className="text-decoration-none text-main d-flex w-100 justify-content-end align-items-center" style={{fontWeight: 300, fontSize: 16}}>
                Read more
                <FontAwesomeIcon icon={faArrowRight} className="mx-2"></FontAwesomeIcon>
            </Link>
        </div>
    );
}

export default Card;