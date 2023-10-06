import React from 'react';
import downloadApp from "../../../assets/images/downloadApp.jpg"
import GooglePlay from "../../../assets/images/GooglePlayBtn.jpg"
import appStore from "../../../assets/images/AppStoreBtn.svg"
import {Link} from "react-router-dom";
function DownloadApp() {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className='d-flex justify-content-end align-items-end my-5'>
                <img src={downloadApp} alt='download' className=" position-relative z-1 shadow"/>
                <div style={{height: 300, width: 600, padding: 25}}
                     className="bg-white position-absolute z-2 rounded shadow">
                    <h2 style={{fontWeight: 700}}> Ready for the future?</h2>
                    <h2 style={{fontWeight: 700}}> Download The App!</h2>
                    <p style={{fontWeight: 300, fontSize: 16}}>Download the banking app to easily manage your finances,
                        check account balances, transfer money, pay bills, and access a range of banking services from your
                        mobile device.</p>
                    <Link to="/"><img src={GooglePlay} alt="googlPlay" className="shadow"/></Link>
                    <Link to="/"><img src={appStore} alt="googlPlay" className="ms-4 shadow"/></Link>
                </div>
            </div>
        </div>


);
}

export default DownloadApp;