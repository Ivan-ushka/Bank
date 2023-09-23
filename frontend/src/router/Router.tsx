import React from 'react';
import {Route, Routes} from "react-router-dom";
import RegistrationFrom from "../components/RegistrationFrom";
import App from "../App";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/register" element={<RegistrationFrom />}/>
        </Routes>
    );
}

export default Router;