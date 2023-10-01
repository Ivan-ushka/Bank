import React from 'react';
import img2 from "../assets/images/city.jpg"
import card from "../assets/images/card3.png"
import {Button} from "react-bootstrap";
function PreviewLogo() {
    return (
        <div className="d-flex bg-main align-items-center justify-content-center" style={{padding: "100px 256px"}}>
                <div className="text-light">
                    <h1>Discover Financial Freedom with CrownBank</h1>
                    <p style={{fontWeight: 400, fontSize: 18}} className="my-4">Welcome to our bank's website, where we provide secure financial solutions tailored to meet your unique needs.</p>
                    <div>
                        <Button className="me-3 btn-lg shadow">Open bank account</Button>
                        <Button className="me-3 btn-lg shadow">Learn more</Button>
                    </div>
                </div>
                <div className="d-flex justify-content-end w-100  align-items-center pe-5">
                    <img src={img2} alt="s" width={300} className='border rounded position-absolute z-1 shadow'/>
                    <img src={card} alt="s1" width={450} className="opacity-75 position-relative z-2 "/>
                </div>
        </div>
    );
}

export default PreviewLogo;