import React, {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Header from "../../components/Header";

function ProfileInfo() {
    const {store} = useContext(Context)
    return (
        <div>
            <Header />
            <div>

            </div>
        </div>
    );
}

export default observer(ProfileInfo);