import React, {useState} from 'react';
import StudentNav from '../../layouts/student-navbar'
import Container from "@mui/material/Container";
import CreateNote from '../student-dashboard/models/new_note'
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
            <StudentNav/>
            <Box
                sx={{
                    marginTop: 8,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <CreateNote/>

            </Box>


        </Container>
    );
};

export default Home;