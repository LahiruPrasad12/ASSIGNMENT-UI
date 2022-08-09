import React, {useState,forwardRef, useImperativeHandle, useRef} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props}/>;
});

export default function SingleStudent({ childFunc,student }) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        childFunc.current = handleClickOpen
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{student.first_name+' '+student.last_name}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Full Name :  <b>{student.first_name+' '+student.last_name}</b><br/>
                        Email Address : <b>{student.email}</b><br/>
                        Contact Number : <b>{student.mobile}</b><br/>
                        Date Of Birth : <b>{student.DOB}</b><br/>
                        Account Type : <b>{student.account_type}</b><br/>
                        Account Status : <b>{student.status?'Active':'Pending'}</b>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
