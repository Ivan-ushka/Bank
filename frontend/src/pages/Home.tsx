import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import CustomTable from "../components/CustomTable";
import Header from "../components/Header";
// @ts-ignore
import card1 from "../assets/images/card1.jpg"
// @ts-ignore
import card2 from "../assets/images/card2.jpg"

function Home() {
    const bg = {
        background: 'linear-gradient(150deg, rgba(211,240,8,1) 1%, rgba(231,228,27,1) 5%, rgba(57,214,157,1) 32%, rgba(105,200,220,1) 52%, rgba(110,109,209,1) 71%, rgba(147,87,199,1) 91%, rgba(169,68,194,1) 97%)',
        height: 1000,
    };

    return (
        <div style={bg} >
            <Header />
            <div className="d-flex justify-content-center align-items-center px-4 flex-column bg-opacity-25 bg-white" >
               <div className="w-75 text-custom-blue d-flex align-items-center justify-content-center">
                   <h2 className='w-50 text-center'>Оформляйте кредитные карты онлайн
                       Без посещения банка, нужны только ваши данные</h2>
               </div>
            </div>
        </div>
    );
}

export default Home;