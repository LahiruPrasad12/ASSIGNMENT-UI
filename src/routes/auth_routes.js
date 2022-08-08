import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../views/auth/login";

const AuthRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login/>} ></Route>
            </Routes>
        </Router>
    );
};

export default AuthRoutes;