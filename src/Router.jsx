import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './views/auth/login'
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login/>} ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;