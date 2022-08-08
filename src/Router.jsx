import React from 'react';

import Auth_routes from './routes/auth_routes'
import Student_routes from './routes/student_routes'
import AdminRoutes from './routes/admin_routes'
const Routers = () => {
    return (
        <div>
            <Auth_routes/>
            <Student_routes/>
            <AdminRoutes/>
        </div>
    );
};

export default Routers;