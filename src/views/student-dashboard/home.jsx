import React from 'react';
import StudentNav from '../../layouts/student-navbar'
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


const Home = () => {
    return (

        <Container component="main" sx={{marginTop: '3%'}}>
            <StudentNav/>
            <box
                sx={{
                    marginTop: 8,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Button sx={{
                    float: "right",
                    marginTop:'20px'
                }} variant="contained" startIcon={<AddIcon />}>Create Note</Button>

            </box>
        </Container>
    );
};

export default Home;