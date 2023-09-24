import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from "./router/Router";
import {BrowserRouter} from "react-router-dom";
import Store from "./store/store";
import 'bootstrap/dist/css/bootstrap.css';

const store = new Store();

export const Context = createContext({
    store,
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Context.Provider value={{store}}>
    <BrowserRouter>
        <React.StrictMode>
            <Router/>
        </React.StrictMode>
    </BrowserRouter>
    </Context.Provider>
);
