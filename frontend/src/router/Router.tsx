import React from 'react';
import {Route, Routes} from "react-router-dom";
import RegistrationFrom from "../components/RegistrationFrom";
import App from "../App";
import Home from "../pages/Home";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<RegistrationFrom />}/>
        </Routes>
    );
}

export default Router;