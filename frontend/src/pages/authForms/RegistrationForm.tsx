import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {Context} from "../../index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {observer} from "mobx-react-lite";


function RegistrationForm() {
    const [name, setName] = useState<string>('')
    const [validName, setValidName] = useState<boolean>(false)
    const [nameFocus, setNameFocus] = useState<boolean>(false);

    const [pwd, setPwd] = useState<string>('')
    const [validPwd, setValidPwd] = useState<boolean>(false)
    const [pwdFocus, setPwdFocus] = useState<boolean>(false);

    const [confirmPwd, setConfirmPwd] = useState<string>('')
    const [validConfirmPwd, setValidConfirmPwd] = useState<boolean>(false)
    const [confirmPwdFocus, setConfirmPwdFocus] = useState<boolean>(false);


    const {store} = useContext(Context)

    useEffect( () => {
        pwd.length > 3 ? setValidPwd(true) : setValidPwd(false)
    }, [pwd])

    useEffect( () => {
        pwd === confirmPwd ? setValidConfirmPwd(true) : setValidConfirmPwd(false)
    }, [pwd, confirmPwd])

    useEffect( () => {
        console.log(name, nameFocus, validName)
        name.length > 3 ? setValidName(true) : setValidName(false)
    }, [name])

    // @ts-ignore
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center flex-column" style={{height: 600}}>
                <div className="d-flex p-5  border border-2 border-light-purple shadow rounded flex-column m-1 bg-white " style={{width: 600}}>
                    <InputGroup className="input-group input-group-lg mb-3">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUser}  color={validName ? 'green' : 'red'}/></InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={e => setName(e.target.value)}
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
                        />
                    </InputGroup>

                    <InputGroup className="input-group input-group-lg mb-3">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}  color={validPwd ? 'green' : 'red'}/></InputGroup.Text>
                        <Form.Control
                            placeholder="Password"
                            aria-label="Password"
                            type="password"
                            aria-describedby="basic-addon1"
                            onChange={e => setPwd(e.target.value)}
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                    </InputGroup>

                    <InputGroup className="input-group input-group-lg mb-3">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock} color={validConfirmPwd && pwd ? 'green' : 'red'}/></InputGroup.Text>
                        <Form.Control
                            placeholder="Repeat password"
                            aria-label="Checkpassword"
                            aria-describedby="basic-addon1"
                            type="password"
                            onChange={e => setConfirmPwd(e.target.value)}
                            onFocus={() => setConfirmPwdFocus(true)}
                            onBlur={() => setConfirmPwdFocus(false)}
                        />
                    </InputGroup>
                    <div style={{fontWeight: 300, fontSize: 20}} className="d-flex align-items-center justify-content-center flex-column">
                        {nameFocus && !validName ?  <p>Your username should consist at least 4 letters</p> : <></>}
                        {pwdFocus && !validPwd ?  <p>Your password should consist at least 4 letters</p> : <></>}
                        {confirmPwdFocus && !validConfirmPwd? <p>Must match the first password input field.</p>:<></>}
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <Button type="submit" className="w-25 btn-lg" onClick={() => store.registration(name, pwd)}>Sign in</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(RegistrationForm);