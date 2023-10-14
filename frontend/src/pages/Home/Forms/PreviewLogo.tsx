import React from 'react';
import img2 from "../../../assets/images/city.jpg"
import card from "../../../assets/images/card3.png"
import card6 from "../../../assets/images/Card7.svg"
import {Button, Col, Container, Image, Row, Stack} from "react-bootstrap";

function PreviewLogo() {
    return (
        <div className="bg-main py-5">
            <Container className="d-lg-flex bg-main py-5 align-items-center justify-content-center text-white">
                <Row>
                    <Col className="d-flex justify-content-center align-items-center text-center flex-column my-5">
                        <h1>Discover Financial Freedom with CrownBank</h1>
                        <p style={{fontWeight: 400, fontSize: 18}} className="my-4">Welcome to our bank's website, where
                            we provide secure financial solutions tailored to meet your unique needs.</p>
                        <Stack direction="horizontal" className="d-flex align-items-center justify-content-center">
                            <Button className="me-3 btn-lg shadow">Open bank account</Button>
                            <Button className="me-3 btn-lg shadow">Learn more</Button>
                        </Stack>
                    </Col>
                    <Col className="d-flex flex-wrap justify-content-end w-100 align-items-center">
                        <Image src={img2} alt="s" style={{maxHeight: 350}}
                               className='rounded position-absolute d-sm-none z-1 shadow w-sm-100 '/>
                        <Image src={card6} alt="s1" width={350} className="position-relative z-2 "
                               style={{marginRight: 170}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PreviewLogo;