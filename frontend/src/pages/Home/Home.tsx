import React from 'react';
import Header from "../../components/Header";
import PreviewLogo from "./Forms/PreviewLogo";
import {faMoneyCheckDollar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Benefits from "./Forms/Benefits/Benefits";
import DownloadApp from "./Forms/DownloadApp";
import Footer from "../../components/Footer";

function Home() {
    const length= 6;
    return (
        <div>
            <Header />
            <PreviewLogo />
            <div className="line bg-main opacity-75 m-auto d-flex align-items-center justify-content-between shadow" style={{ padding: "0 156px"}}>
                {Array.from({ length }, (_, index) => <FontAwesomeIcon icon={faMoneyCheckDollar} style={{fontSize: 75, color: 'blue'}} key={index}/> )}
            </div>
            <Benefits />
            <DownloadApp />
            <Footer />
        </div>
    );
}

export default Home;