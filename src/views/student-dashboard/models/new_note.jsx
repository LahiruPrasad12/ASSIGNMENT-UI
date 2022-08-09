import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import {CreateNote} from "../../../validations/student_forms";
import studentAPI from '../../../apis/modules/student_apis'
import SuccessToast from '../../../toasts/success'
import ErrorToast from '../../../toasts/error'
import LoadingButton from "@mui/lab/LoadingButton";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function AddNote(props) {
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = useState(undefined);
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(undefined);




    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        props.getNotices()
        setOpen(false);
    };

    const SaveData = async(data)=>{
        try{
            setBtnLoading(true)
            let payload = {
                title : data.title,
                description : data.description
            }
            let respond = (await studentAPI.createNewNotice(payload)).data
            setSuccess('Your notice is published successfully')
            handleClose()
        }catch (e){
            setError(e.message)
        }
        setBtnLoading(false)
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: CreateNote,
        onSubmit: (values) => {
            SaveData(values);
        },
    });


    return (
        <div>
            <Button sx={{
                float: "right",
                marginTop: '20px'
            }} variant="contained" startIcon={<AddIcon/>} onClick={handleClickOpen}>Create Note</Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    CREATE NEW NOTE
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="title"
                            label="Email Title"
                            name="title"
                            autoFocus
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="description"
                            label="Description"
                            name="description"
                            autoFocus
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}

                        />
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <LoadingButton autoFocus onClick={formik.handleSubmit} loading={btnLoading}>
                        Save changes
                    </LoadingButton>
                </DialogActions>
            </BootstrapDialog>

            {
                error ? <ErrorToast message={error}/> : ''
            }
            {
                success ? <SuccessToast message={success}/> : ''
            }
        </div>
    );
}
