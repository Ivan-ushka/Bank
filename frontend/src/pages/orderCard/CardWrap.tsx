import React from 'react';
import card7 from "../../assets/images/Card7.svg";
import {Button, Card, CardBody, CardImg, CardTitle} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
interface CardWrapProps {
    title: string,
    src: string,
}
function CardWrap({title, src}: CardWrapProps) {
    return (
        <Card className="m-4 d-flex flex-column bg-main justify-content-center align-items-center shadow p-5">
            <CardTitle className="p-3">{title}</CardTitle>
            <CardImg src={src} alt='f2'/>
            <CardBody className="d-flex p-4">
                <Button className="text-decoration-none  bg-light d-flex shadow p-2 m-2 rounded shadow justify-content-end align-items-center text-main">
                    <FontAwesomeIcon icon={faArrowLeft} className="mx-2"></FontAwesomeIcon>
                    Order card
                </Button>
                <Button className='text-decoration-none bg-light d-flex shadow p-2 m-2 rounded shadow justify-content-end align-items-center text-center text-main'>
                    Read more
                    <FontAwesomeIcon icon={faArrowRight} className="mx-2"></FontAwesomeIcon>
                </Button>
            </CardBody>
        </Card>
    );
}

export default CardWrap;