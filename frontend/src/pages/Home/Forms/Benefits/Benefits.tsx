import React from 'react';
import bank from "../../../../assets/images/bank.svg"
import safety from "../../../../assets/images/safety.svg"
import staticUp from "../../../../assets/images/statistic-up.svg"
import {Card, CardBody, CardTitle, Col, Container, Row} from "react-bootstrap";
import CardBenefit from "./CardBenefit";

function Benefits() {
    const data = [
        ['Financial Services', 'Banks provide a wide range of financial services, including checking and savings accounts, loans, credit cards, and investment product', bank],
        ['Safety and Security', 'Deposits in most banks are insured by government agencies, such as the Federal Deposit Insurance Corporation (FDIC)', safety],
        ['Economic Stability    ', 'Deposits in most banks are insured by government agencies, such as the Federal Deposit Insurance Corporation (FDIC)', staticUp],
    ]
    return (
        <Container className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="p-5">
               Our Key Benefits
            </h1>
            <Row className="d-lg-flex flex-lg-wrap flex-lg-row d-flex flex-column justify-content-center">
                {
                    data.map((item, i) => <Col sm={4}><CardBenefit title={item[0]} text={item[1]} link={item[2]} key={i}/></Col>)
                }
            </Row>
        </Container>
    );
}

export default Benefits;