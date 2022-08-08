import React, {useState} from 'react';
import StudentNav from '../../layouts/student-navbar'
import Container from "@mui/material/Container";
import CreateNote from '../student-dashboard/models/new_note'
import UpdateNote from '../student-dashboard/models/update_note'
import Grid from "@mui/material/Grid";
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
            <box
                sx={{
                    marginTop: 8,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <CreateNote/>
                <Grid container spacing={1} sx={{marginLeft: 12}}>
                    <Grid item xs={3} border={1} borderColor={'blue'} sx={{
                        marginRight: '10px',
                        marginTop: 3
                    }}>
                        <Box sx={{float: 'right'}}>
                            <UpdateNote sx={{float: "left"}}/>
                        </Box>
                        <h3>Title</h3>
                        <h5>Description</h5>
                    </Grid>

                    <Grid item xs={3} border={1} borderColor={'blue'} sx={{
                        marginRight: '10px',
                        marginTop: 3
                    }}>
                        <Box sx={{float: 'right'}}>
                            <UpdateNote sx={{float: "left"}}/>
                        </Box>
                        <h3>Title</h3>
                        <h5>Description</h5>
                    </Grid>
                    <Grid item xs={3} border={1} borderColor={'blue'} sx={{
                        marginRight: '10px',
                        marginTop: 3
                    }}>
                        <Box sx={{float: 'right'}}>
                            <UpdateNote sx={{float: "left"}}/>
                        </Box>
                        <h3>Title</h3>
                        <h5>Description</h5>
                    </Grid>
                    <Grid item xs={3} border={1} borderColor={'blue'} sx={{
                        marginRight: '10px',
                        marginTop: 3
                    }}>
                        <Box sx={{float: 'right'}}>
                            <UpdateNote sx={{float: "left"}}/>
                        </Box>
                        <h3>Title</h3>
                        <h5>Description</h5>
                    </Grid>
                    <Grid item xs={3} border={1} borderColor={'blue'} sx={{
                        marginRight: '10px',
                        marginTop: 3
                    }}>
                        <Box sx={{float: 'right'}}>
                            <UpdateNote sx={{float: "left"}}/>
                        </Box>
                        <h3>Title</h3>
                        <h5>Description</h5>
                    </Grid>

                </Grid>
            </box>


        </Container>
    );
};

export default Home;