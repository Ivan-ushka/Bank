import React from 'react';
import {Button} from "react-bootstrap";

function RegistrationFrom() {
    return (
        <div>
            <div className="text-bg-info p-3 text-center">
                <h1>Bank</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div
                    className="d-flex p-5 justify-content-center align-items-center border border-3 border-info flex-column m-1 w-25">
                    <div className="d-flex flex-row m-2">
                        <label>Input name</label>
                        <input type="text"></input>
                    </div>
                    <div className="d-flex flex-row  m-2">
                        <label>Input age</label>
                        <input type="number"></input>
                    </div>
                    <div className="d-flex flex-row flex-column m-2">
                        <div>
                            <input className="form-check-input m-1" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Femail
                            </label>
                        </div>
                        <div>
                            <input className="form-check-input m-1" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Mail
                            </label>
                        </div>
                    </div>
                    <Button className="m-2">Sign in</Button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationFrom;