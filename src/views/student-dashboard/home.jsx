import React, {useState} from 'react';
import StudentNav from '../../layouts/student-navbar'
import Container from "@mui/material/Container";
import CreateNote from '../student-dashboard/models/new_note'

const Home = () => {
    const [openStatus, setOpenStatus] = useState(false);

    const OpenOrDialog=()=>{
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
            </box>

            <CreateNote/>
        </Container>
    );
};

export default Home;