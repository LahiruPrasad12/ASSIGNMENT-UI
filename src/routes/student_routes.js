import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../views/student-dashboard/home";

const StudentRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/student-home" exact element={<Home/>} ></Route>
            </Routes>
        </Router>
    );
};

export default StudentRoutes;