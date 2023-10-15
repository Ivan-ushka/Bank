import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {Card, CardText, CardTitle, Container} from "react-bootstrap";

function Contact() {
    return (
        <div>
            <Header />
            <div className="bg-main">
                <Container fluid className="p-0 m-0" >
                    <div className="bg-image w-100 d-flex justify-content-center align-items-center" style={{height: 500, backgroundImage: `url("https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1995&h=1000&q=80")`}}>
                       <h1 className="text-white border-white border-bottom p-3" style={{fontWeight: 700, fontSize: 70}}>Hello, how can we help you?</h1>
                    </div>
                    <div className="d-flex align-items-center justify-content-center p-5">
                        <Card className="d-flex align-items-center justify-content-center m-3 p-3">
                            <CardTitle>Mobile phones</CardTitle>
                                <CardText>+375(29)55-66-129 — Individuals </CardText>
                                <CardText>+375(29)51-67-131 — Business and sole proprietors </CardText>
                        </Card>
                        <Card className="d-flex align-items-center justify-content-center m-3 p-3">
                            <CardTitle>Mobile phones</CardTitle>

                            <CardText>+375(29)55-66-129 — Individuals </CardText>
                            <CardText>+375(29)51-67-131 — Business and sole proprietors </CardText>
                        </Card>
                        <Card className="d-flex align-items-center justify-content-center m-3 p-3">
                            <CardTitle>Mobile phones</CardTitle>

                            <CardText>+375(29)55-66-129 — Individuals </CardText>
                            <CardText>+375(29)51-67-131 — Business and sole proprietors </CardText>
                        </Card>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;