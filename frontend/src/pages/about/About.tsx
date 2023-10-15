import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Carousel } from 'react-bootstrap';

function About() {
    return (
        <div>
            <Header/>
            <div className="bg-main d-flex justify-content-center align-items-center ">
                <Carousel className="w-100">
                    <Carousel.Item  className="bg-opacity-25">
                        <img src="https://images.unsplash.com/photo-1534302000698-2f5e30b10bdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80" alt="f"  width="100%" height={500}/>
                        <Carousel.Caption className=" text-white ">
                            <h1>First slide label First slide label First slide label First slide label First slide label</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img src="https://images.unsplash.com/photo-1530053969600-caed2596d242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBibHVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=3000&h=2000&q=80" alt="f"  width="100%" height={500}/>
                        <Carousel.Caption className=" text-white ">
                            <h1>First slide label First slide label First slide label First slide label First slide label</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://images.unsplash.com/photo-1489183988443-b37b7e119ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZSUyMGJsdWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=3000&q=80" alt="f"  width="100%" height={500}/>
                        <Carousel.Caption className=" text-white ">
                            <h1>First slide label First slide label First slide label First slide label First slide label</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Footer/>
        </div>
);
}

export default About;