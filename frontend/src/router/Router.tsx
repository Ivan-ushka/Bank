import React from 'react';
import {Route, Routes} from "react-router-dom";
import RegistrationFrom from "../components/RegistrationFrom";
import Home from "../pages/Home";
import OrderCard from "../pages/OrderCard";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<RegistrationFrom />}/>
            <Route path="/orderCard" element={<OrderCard />}/>
        </Routes>
    );
}

export default Router;