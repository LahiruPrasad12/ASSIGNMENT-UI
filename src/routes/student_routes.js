import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../views/student-dashboard/home";

const AuthRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" exact element={<Home/>} ></Route>
            </Routes>
        </Router>
    );
};

export default AuthRoutes;