import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import UserService from "../services/UserService";
function CustomTable(){
    const [users, setUsers] = useState<IUser[]>([])

    async function getUsers(){
        try{
            const response = await UserService.fetchUsers();
            setUsers(response.data)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() =>{
       let a =  getUsers()
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Sex</th>
                    <th scope="col">Money</th>
                    <th scope="col">Experience</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) =>
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.sex}</td>
                        <td>{user.money}</td>
                        <td>{user.experience ? user.experience : 'no experience'}</td>
                    </tr>
                   )
                }
                </tbody>
            </table>
        </div>
    );
}

export default CustomTable;