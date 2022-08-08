import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../views/auth/login";
import ChangePassword from "../views/auth/change_password";

const AuthRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login/>} ></Route>
                <Route path="/update-account" exact element={<ChangePassword/>} ></Route>
            </Routes>
        </Router>
    );
};

export default AuthRoutes;