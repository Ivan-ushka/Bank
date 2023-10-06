import React from 'react';
import Header from "../components/Header";
import RegistrationFrom from "../components/RegistrationFrom";
import Footer from "../components/Footer";

function RegistrationPage() {
    return (
        <div>
            <Header />
            <div className="bg-main">
                <RegistrationFrom />
            </div>
            <Footer />
        </div>
    );
}

export default RegistrationPage;