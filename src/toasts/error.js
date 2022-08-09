import React, {useState} from 'react';
import {Snackbar} from "@mui/material";
import Alert from "@mui/material/Alert";

const Error = ({ childFunc,message }) => {
    const [open, setOpen] = useState(false);
    React.useEffect(() => {
        childFunc.current = handleClickOpen
    }, [])
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClickOpen =()=>{
        setOpen(true)
    }
    return (
        <Snackbar open={open} onClose={handleClose} autoHideDuration={2000} anchorOrigin={ {vertical: 'top', horizontal: 'center'} }>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Error;