import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import OrderCard from "../pages/orderCard/OrderCard";
import RegistrationPage from "../pages/RegistrationPage";
import About from "../pages/About";

function Router() {
    return (
        <div style={{fontFamily: 'Plus Jakarta Sans', fontSize: 16, fontWeight: 600}}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<RegistrationPage />}/>
                <Route path="/orderCard" element={<OrderCard />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </div>
    );
}

export default Router;