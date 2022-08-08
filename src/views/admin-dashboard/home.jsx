import React, {useState} from 'react';
import AdminNavBar from '../../layouts/admin-navbar'
import Container from "@mui/material/Container";
import CreateStudent from '../admin-dashboard/models/create_student'
import AllStudents from '../admin-dashboard/includes/AllStudents'
import {ReactNode} from "react";
import Box from "@mui/material/Box";


function Item(props: { children: ReactNode }) {
    return null;
}

const Home = () => {
    const [openStatus, setOpenStatus] = useState(false);

    const OpenOrDialog = () => {
        setOpenStatus(!openStatus);
    }

    return (

        <Container component="main" sx={{marginTop: '3%'}}>
            <AdminNavBar/>
            <Box
                sx={{
                    marginTop: 2,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <CreateStudent/>
                <AllStudents/>


            </Box>


        </Container>
    );
};

export default Home;