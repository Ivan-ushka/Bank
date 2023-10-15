import React, {useContext, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import OrderCard from "../pages/orderCard/OrderCard";
import RegistrationPage from "../pages/authForms/RegistrationPage";
import About from "../pages/about/About";
import {Context} from "../index";
import LoginPage from "../pages/authForms/LoginPage";
import Contact from "../pages/contact/Contact";

function Router() {
    const {store} = useContext(Context);

    useEffect( ()=>{
        if(localStorage.getItem('token')){
            store.checkAuth();
        }
    },[store])
    return (
        <div style={{fontFamily: 'Plus Jakarta Sans', fontSize: 16, fontWeight: 600}}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<RegistrationPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/orderCard" element={<OrderCard />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
    );
}

export default Router;