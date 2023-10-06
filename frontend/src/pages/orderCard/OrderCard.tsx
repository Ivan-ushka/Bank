import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import card5 from "../../assets/images/Card5.svg"
import card6 from "../../assets/images/Card6.svg"
import card7 from "../../assets/images/Card7.svg"
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import bank from "../../assets/images/a-waterfall-with-a-blue-sky-and-clouds.jpg"
function OrderCard() {
    return (
        <div>
            <Header/>
            <div className="main  text-white">
                <div className='d-flex align-items-center justify-content-center flex-column bg-main '>
                    <div className="d-flex align-items-center justify-content-center flex-column w-75 bg-main">
                        <div className="m-4 d-flex flex-column justify-content-center align-items-center shadow p-5">
                            <h3 className="p-3">Silver card</h3>
                            <img src={card5} alt='f'/>
                            <div className="d-flex p-4">
                                <Button className="text-decoration-none  bg-light d-flex shadow p-2 m-2 rounded shadow justify-content-end align-items-center text-main">
                                    <FontAwesomeIcon icon={faArrowLeft} className="mx-2"></FontAwesomeIcon>
                                    <div className="me-1">Order card</div>
                                </Button>
                                <Button className='text-decoration-none bg-light d-flex shadow p-2 m-2 rounded shadow justify-content-end align-items-center text-center text-main'>
                                    <div className="ms-1">Read more</div>
                                    <FontAwesomeIcon icon={faArrowRight} className="mx-2"></FontAwesomeIcon>
                                </Button>
                            </div>
                        </div>
                        <div className="m-4 d-flex flex-column justify-content-center align-items-center shadow p-5">
                            <h3 className="p-3">Medium card</h3>
                            <img src={card7} alt='f2'/>
                            <div className="d-flex p-4">
                                <Button className="text-decoration-none  bg-light d-flex shadow p-2 m-2 rounded shadow justify-content-end align-items-center text-main">
                                    <FontAwesomeIcon icon={faArrowLeft} className="mx-2"></FontAwesomeIcon>
                                    <div className="me-1">Order card</div>
                                </Button>
                                <Button className='text-decoration-none bg-light d-flex shadow p-2 m-2 rounded shadow justify-content-end align-items-center text-center text-main'>
                                    <div className="ms-1">Read more</div>
                                    <FontAwesomeIcon icon={faArrowRight} className="mx-2"></FontAwesomeIcon>
                                </Button>
                            </div>
                        </div>
                        <div className="m-4 d-flex flex-column justify-content-center align-items-center shadow p-5">
                            <h3 className="p-3">Golden card</h3>
                            <img src={card6} alt='f1'/>
                            <div className="d-flex p-4">
                                <Button className="text-decoration-none  bg-light d-flex shadow p-2 m-2 rounded shadow justify-content-end align-items-center text-main">
                                    <FontAwesomeIcon icon={faArrowLeft} className="mx-2"></FontAwesomeIcon>
                                    <div className="me-1">Order card</div>
                                </Button>
                                <Button className='text-decoration-none bg-light d-flex shadow p-2 m-2 rounded shadow justify-content-end align-items-center text-center text-main'>
                                    <div className="ms-1">Read more</div>
                                    <FontAwesomeIcon icon={faArrowRight} className="mx-2"></FontAwesomeIcon>
                                </Button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default OrderCard;