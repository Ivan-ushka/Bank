import React, {useContext} from 'react';
import Header from "../../components/Header";
import RegistrationFrom from "./RegistrationForm";
import Footer from "../../components/Footer";
import {Context} from "../../index";
import {Navigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

function RegistrationPage() {
    const {store} = useContext(Context)
    return (
        <div>
            {store.isAuth ? <Navigate to="/" replace /> : (
                <div>
                    <Header/>
                    <div className="bg-main">
                        <RegistrationFrom/>
                    </div>
                    <Footer/>
                </div>
            )}
        </div>
    );
}

export default observer(RegistrationPage);