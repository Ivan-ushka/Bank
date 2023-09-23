import React, {useContext, useState} from 'react';
import {Button} from "react-bootstrap";
import {Context} from "../index";
import CustomTable from "./CustomTable";
import {Link} from "react-router-dom";

function RegistrationFrom() {
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [sex, setSex] = useState<string>('')
    const [money, setMoney] = useState<number>(0)
    const [experience, setExperience] = useState<string>('')

    const {store} = useContext(Context)

    return (
        <div>
            <div className="text-bg-info p-3 text-center">
                <h1>Bank</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <div
                    className="d-flex p-5 justify-content-center align-items-center border border-3 border-info flex-column m-1 w-25">
                    <div className="d-flex flex-row m-2">
                        <label>Input name</label>
                        <input type="text" onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className="d-flex flex-row  m-2">
                        <label>Input age</label>
                        <input type="number" onChange={e => setAge(Number(e.target.value))}></input>
                    </div>
                    <div className="d-flex flex-row  m-2">
                        <label>Input money</label>
                        <input type="number" onChange={e => setMoney(Number(e.target.value))}></input>
                    </div>
                    <div className="d-flex flex-row flex-column m-2">
                        <div>
                            <input className="form-check-input m-1" type="radio" name="flexRadioDefault" onClick={() => setSex('Femail')}
                                   id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Femail
                            </label>
                        </div>
                        <div>
                            <input className="form-check-input m-1" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault1" onClick={() => setSex('Mail')}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Mail
                            </label>
                        </div>
                    </div>
                    <Button className="m-2" onClick={() => store.registration(name, age, sex, money, experience)}>Add user</Button>
                </div>
                <CustomTable />
                <Link to="/" ><Button>Go home</Button></Link>
            </div>
        </div>
    );
}

export default RegistrationFrom;