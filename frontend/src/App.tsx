import React, {useState} from 'react';
import "bootstrap"
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import CustomTable from "./components/CustomTable";

function App() {
    return (
        <div>
            <div className="text-bg-info p-3 text-center">
                <h1>Bank</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center p-4 flex-column">
                <div><Link to="/register"> <Button>Add user</Button> </Link></div>
                <CustomTable/>
            </div>

        </div>
    );
}

export default App;
