import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import CustomTable from "../components/CustomTable";
import Header from "../components/Header";
// @ts-ignore
import card1 from "../assets/images/card1.jpg"
// @ts-ignore
import card2 from "../assets/images/card2.jpg"
import PreviewLogo from "../components/PreviewLogo";
import {faMoneyCheckDollar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Benefits from "../components/Benefits";
import DownloadApp from "../components/DownloadApp";

function Home() {
    const length= 6;
    return (
        <div  style={{fontFamily: 'Plus Jakarta Sans', fontSize: 24, fontWeight: 600}}>
            <Header />
            <PreviewLogo />
            <div className="line bg-main opacity-75 m-auto d-flex align-items-center justify-content-between shadow" style={{ padding: "0 156px"}}>
                {Array.from({ length }, (_, index) => <FontAwesomeIcon icon={faMoneyCheckDollar} style={{fontSize: 75, color: 'blue'}} /> )}
            </div>
            <Benefits />
            <DownloadApp />
        </div>
    );
}

export default Home;