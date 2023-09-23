import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from "./router/Router";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Router/>
        </React.StrictMode>
    </BrowserRouter>
);
