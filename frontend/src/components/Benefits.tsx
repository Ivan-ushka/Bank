import React from 'react';
import bank from "../assets/images/bank.svg"
import safety from "../assets/images/safety.svg"
import staticUp from "../assets/images/statistic-up.svg"
import Card from "./ui/card";

function Benefits() {
    const data = [
        ['Financial Services', 'Banks provide a wide range of financial services, including checking and savings accounts, loans, credit cards, and investment product', bank],
        ['Safety and Security', 'Deposits in most banks are insured by government agencies, such as the Federal Deposit Insurance Corporation (FDIC)', safety],
        ['Economic Stability    ', 'Deposits in most banks are insured by government agencies, such as the Federal Deposit Insurance Corporation (FDIC)', staticUp],
    ]
    return (
        <div style={{ padding: "30px 256px"}}>
            <div className='my-5 mx-4'>
                <h3 style={{fontSize: 40, fontWeight: 800}}>Our Key Benefits</h3>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                {
                    data.map((item, i) => <Card title={item[0]} text={item[1]} link={item[2]} key={i}/>)
                }
            </div>
        </div>
    );
}

export default Benefits;