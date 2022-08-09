import React, {useState, forwardRef, useImperativeHandle, useRef} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import adminAPIS from '../../../apis/modules/admin_apis'
import {useEffect} from "react";
import SingleStudents from '../models/single_student'
import Loader from '../../../loader/loader'
import TextField from "@mui/material/TextField";


const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'first_name', headerName: 'First name', width: 200},
    {field: 'last_name', headerName: 'Last name', width: 200},
    {field: 'mobile', headerName: 'Contact Number', width: 200},
    {field: 'email', headerName: 'Gmail Address', width: 200},
    {field: 'DOB', headerName: 'Date Of Birth', width: 200},
];


export default function AllUsers() {
    const childFunc = React.useRef(null)
    const [students, setStudents] = useState([]);
    const [is_loading, setLoading] = useState(false);
    const [singleStudent, setSingleStudent] = useState({});


    useEffect(() => {
        getStudents();
    }, [])

    const viewData = (data) => {
        console.log(data.row)
        setSingleStudent(data.row)
        childFunc.current()
    }

    const getStudents = async (query='') => {
        try {
            setLoading(true)
            const respond = (await adminAPIS.getUsers(query)).data.data.users.map((e, index) => ({
                id: index + 1,
                first_name: e.first_name,
                last_name: e.last_name,
                mobile: e.mobile,
                email: e.email,
                DOB: new Date(e.DOB).getDate(),
                account_type: e.account_type,
                status: e.status
            }))
            console.log(respond)
            setStudents(respond)
        } catch (e) {

        }
        setLoading(false)
    }
    return (
        <div style={{height: 400, width: '100%', marginTop: '10px'}}>
            <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=>{getStudents(e.target.value)}}
            />
            <SingleStudents childFunc={childFunc} student={singleStudent}/>
            {
                is_loading ? <Loader/> : <DataGrid
                    onCellClick={(e) => {
                        viewData(e)
                    }}
                    rows={students}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            }


        </div>
    );
}
