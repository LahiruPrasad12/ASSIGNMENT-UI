import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../views/admin-dashboard/home";

const AdminRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin-home" exact element={<Home/>} ></Route>
            </Routes>
        </Router>
    );
};

export default AdminRoutes;