import React, {useContext} from 'react';
import {Context} from "../../index";
import {Navigate} from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoginForm from "./LoginForm";
import {observer} from "mobx-react-lite";

function LoginPage() {
    const {store} = useContext(Context)
    return (
        <div>
            {store.isAuth ? <Navigate to="/" replace /> : (
                <div>
                    <Header/>
                    <div className="bg-main">
                        <LoginForm/>
                    </div>
                    <Footer/>
                </div>
            )}
        </div>
    );
}

export default observer(LoginPage);