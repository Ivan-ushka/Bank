import React, {useContext, useState} from 'react';
import {Button} from "react-bootstrap";
import {Context} from "../index";
import {Link} from "react-router-dom";

function RegistrationFrom() {
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    const [sex, setSex] = useState<string>('')
    const [money, setMoney] = useState<number>(0)

    const {store} = useContext(Context)

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="d-flex p-5  border border-3 border-info rounded flex-column m-1 w-30">
                    <div className="d-flex flex-row justify-content-end m-2">
                        <label className='me-2'>Input name</label>
                        <input type="text" onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div className="d-flex flex-row justify-content-end m-2">
                        <div className="d-flex flex-row align-items-start">
                            <label className='me-2'>Input age</label>
                        </div>
                        <input type="number" onChange={e => setAge(Number(e.target.value))}></input>
                    </div>
                    <div className="d-flex flex-row m-2 justify-content-end">
                        <label className='me-2'>Input money</label>
                        <input type="number" onChange={e => setMoney(Number(e.target.value))}></input>
                    </div>
                    <div className="d-flex flex-row flex-column m-2">
                        <div>
                            <input className="form-check-input m-1" type="radio" name="flexRadioDefault"
                                   onClick={() => setSex('Femail')}
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
                    <Button className="m-2" onClick={() => store.registration(name, age, sex, money)}>Add
                        user</Button>
                </div>
                <Link to="/"><Button>Go home</Button></Link>
            </div>
        </div>
    );
}

export default RegistrationFrom;