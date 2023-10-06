import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import city from "../assets/images/1.jpg"
import glass from "../assets/images/2_.jpg"
import { Carousel } from 'react-bootstrap';

function About() {
    return (
        <div>
            <Header/>
            <div className="bg-main d-flex justify-content-center align-items-center ">
                <Carousel style={{height: 400, width: 900}}>
                    <Carousel.Item style={{height: 400, width: 900}} className="bg-opacity-25">
                        <img src="https://images.pexels.com/photos/342943/pexels-photo-342943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="f"  style={{height: 400, width: 900}}/>

                        <Carousel.Caption className=" text-primary ">
                            <h1>First slide label First slide label First slide label First slide label First slide label</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height: 400, width: 900}}>
                        <img src="https://images.pexels.com/photos/7634157/pexels-photo-7634157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="f"  style={{height: 400, width: 900}}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height: 400, width: 900}}>
                        <img src="https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="f"  style={{height: 400, width: 900}}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Footer/>
        </div>
);
}

export default About;