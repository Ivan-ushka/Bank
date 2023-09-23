import React, {useState} from 'react';
import "bootstrap"
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";
import {Button} from "react-bootstrap";

function App() {
    const [users, setUsers] = useState<IUser[]>([])

    async function getUsers(){
        try{
           const response = await UserService.fetchUsers();
           setUsers(response.data)
        }catch(e){
            console.log(e)
        }
    }

    function LogUsers(){
        console.log(users)
    }
    return (
        <div>
            <div className="text-bg-info p-3 text-center">
                <h1>Bank</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center p-4">
                <Button className="m-1" onClick={getUsers}>Get users</Button>
                <Button className="m-1" onClick={LogUsers}>Log users</Button>
            </div>
            <div>
                {
                    users.map(user => <div key={user.id}>{user.name}</div>)
                }
            </div>
        </div>
    );
}

export default App;
