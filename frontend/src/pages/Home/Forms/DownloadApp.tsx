import React from 'react';
import downloadApp from "../../../assets/images/downloadApp.jpg"
import GooglePlay from "../../../assets/images/GooglePlayBtn.jpg"
import appStore from "../../../assets/images/AppStoreBtn.svg"
import {Link} from "react-router-dom";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
function DownloadApp() {
    return (
        <Container className="d-flex align-items-center justify-content-center">
            <Container className='d-flex position-relative my-5 w-75'>
                <div className="bg-image d-flex justify-content-center shadow rounded bg-info align-items-end" style={{height: 600, backgroundImage: `url("${downloadApp}")`, backgroundSize: '100% 100%',}}>
                    <Card style={{padding: 25}}
                          className="bg-white d-flex w-75 flex-nowrap text-center justify-content-center z-2 rounded shadow ">
                        <h2 style={{fontWeight: 700}}> Ready for the future?</h2>
                        <h2 style={{fontWeight: 700}}> Download The App!</h2>
                        <p style={{fontWeight: 300, fontSize: 16}}>Download the banking app to easily manage your finances,
                            check account balances, transfer money, pay bills, and access a range of banking services from your
                            mobile device.</p>
                        <Row >
                            <Col className="d-flex justify-content-center justify-content-lg-end"><Link to="/"><img src={GooglePlay}  alt="googlPlay" className="shadow"/></Link></Col>
                            <Col className="d-flex justify-content-center justify-content-lg-start"><Link to="/"><img src={appStore}  alt="googlPlay" className="shadow"/></Link></Col>
                        </Row>
                    </Card>
                </div>
            </Container>
        </Container>


);
}

export default DownloadApp;