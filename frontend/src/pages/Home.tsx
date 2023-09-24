import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import CustomTable from "../components/CustomTable";
import Header from "../components/Header";

function Home() {
    return (
        <div>
            <Header />
            <div className="d-flex justify-content-center align-items-center p-4 flex-column">
                <div><Link to="/register"> <Button>Add user</Button> </Link></div>
                <CustomTable/>
            </div>
        </div>
    );
}

export default Home;