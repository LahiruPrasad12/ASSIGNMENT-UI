import React from 'react';

import Auth_routes from './routes/auth_routes'
import Student_routes from './routes/student_routes'
const Routers = () => {
    return (
        <div>
            <Auth_routes/>
            <Student_routes/>
        </div>
    );
};

export default Routers;