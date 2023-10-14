import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import card5 from "../../assets/images/Card5.svg"
import card6 from "../../assets/images/Card6.svg"
import card7 from "../../assets/images/Card7.svg"
import CardWrap from "./CardWrap";
function OrderCard() {
    return (
        <div>
            <Header/>
            <div className="main  text-white">
                <div className='d-flex align-items-center justify-content-center flex-column bg-main '>
                    <div className="d-flex align-items-center justify-content-center flex-column w-75 bg-main">
                        <div className="d-flex justify-content-center align-items-center">
                            <CardWrap title={"Silver card"} src={`${card5}`} />
                            <div>
                                description
                            </div>
                        </div>

                        <CardWrap title={"Medium card"} src={`${card7}`} />
                        <CardWrap title={"Golden card"} src={`${card6}`} />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default OrderCard;