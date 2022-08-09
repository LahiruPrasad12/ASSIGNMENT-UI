import React, {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import adminAPIS from '../../../apis/modules/admin_apis'
import {useEffect} from "react";

const columns = [
    {field: 'id', headerName: 'ID', width: 70 },
    {field: 'first_name', headerName: 'First name', width: 200},
    {field: 'last_name', headerName: 'Last name', width: 200},
    {field: 'mobile', headerName: 'Contact Number', width: 200},
    {field: 'email', headerName: 'Gmail Address', width: 200},
    {field: 'DOB', headerName: 'Date Of Birth', width: 200},
];


export default function AllUsers() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    },[])

    const viewData = (data) => {
        console.log(data.row)
    }

    const getStudents = async () => {
        try {
            const respond = (await adminAPIS.getUsers()).data.data.users.map((e,index)=>({
                id:index+1,
                first_name:e.first_name,
                last_name:e.last_name,
                mobile:e.mobile,
                email:e.email,
                DOB : new Date(e.DOB).getDate()
            }))
            console.log(respond)
            setStudents(respond)
        } catch (e) {

        }
    }
    return (
        <div style={{height: 400, width: '100%', marginTop: '10px'}}>

            <DataGrid
                onCellClick={(e) => {
                    viewData(e)
                }}
                rows={students}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />


        </div>
    );
}
