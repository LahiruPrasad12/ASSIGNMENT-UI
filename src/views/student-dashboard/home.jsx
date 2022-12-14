import React, {useEffect, useState} from 'react';
import StudentNav from '../../layouts/student-navbar'
import Container from "@mui/material/Container";
import CreateNote from '../student-dashboard/models/new_note'
import UpdateNote from '../student-dashboard/models/update_note'
import Grid from "@mui/material/Grid";
import {ReactNode} from "react";
import Box from "@mui/material/Box";
import studentAPI from '../../apis/modules/student_apis'
import Loader from '../../loader/loader'



function Item(props: { children: ReactNode }) {
    return null;
}

const Home = () => {
    const [openStatus, setOpenStatus] = useState(false);
    const [notices, setNotices] = useState([]);
    const [is_loading, setLoading] = useState(false);


    const OpenOrDialog = () => {
        setOpenStatus(!openStatus);
    }

    useEffect(()=>{
        getNotices()
    },[])

    const getNotices = async()=>{
        try{
            setLoading(true)
           let respond =  (await studentAPI.getMyNotices()).data.data.all_notices
            setNotices(respond)
        }catch (e) {
            if(e.request.status === 401){
                localStorage.clear();
                window.location = '/'
            }else {

            }
        }
        setLoading(false)
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
                <CreateNote getNotices={getNotices}/>
                {
                    is_loading?<Loader/>: <Grid container spacing={1} sx={{marginLeft: 12}}>
                        {
                            notices.map((x)=>{
                                return  <Grid item xs={3} border={1} borderColor={'blue'} sx={{
                                    marginRight: '10px',
                                    marginTop: 3
                                }}>
                                    <Box sx={{float: 'right'}}>
                                        <UpdateNote sx={{float: "left"}} title={x.title} description={x.description}
                                                    getNotices={getNotices} id={x._id}/>
                                    </Box>
                                    <h3>{x.title}</h3>
                                    <h5>{x.description}</h5>
                                </Grid>
                            })
                        }

                    </Grid>
                }

            </box>


        </Container>
    );
};

export default Home;