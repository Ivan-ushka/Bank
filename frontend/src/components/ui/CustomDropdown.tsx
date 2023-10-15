import React, {useContext} from 'react';
import {Dropdown} from "react-bootstrap";
import {Context} from "../../index";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
function CustomDropdown() {
    const {store} = useContext(Context)
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                <FontAwesomeIcon icon={faUser} />
                Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Information</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bank account</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cards</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => store.logout()}>Log out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default CustomDropdown;