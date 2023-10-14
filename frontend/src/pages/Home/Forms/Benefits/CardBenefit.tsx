import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Card, CardImg, CardText, CardTitle} from "react-bootstrap";
interface CardProps {
    title: string,
    text: string,
    link: string
}
function CardBenefit({title, text, link}: CardProps) {
    return (
        <Card className='card d-flex justify-content-center align-items-center text-center p-3 shadow' style={{width: 350, height: 400}}>
            <CardImg className='m-3' src={link} alt="bank" width={80} height={80}/>
            <CardTitle className='m-3' style={{fontWeight: 600}}>{title}</CardTitle>
            <CardText className='m-3'style={{fontWeight: 300, fontSize: 16}}>{text}</CardText>
            <Link to="/" className="text-decoration-none text-main d-flex w-100 justify-content-end align-items-center" style={{fontWeight: 300, fontSize: 16}}>
                Read more
                <FontAwesomeIcon icon={faArrowRight} className="mx-2"></FontAwesomeIcon>
            </Link>
        </Card>
    );
}

export default CardBenefit;