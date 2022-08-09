import React, {useEffect, useState} from 'react';
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
import TextField from "@mui/material/TextField";
import {useFormik} from "formik";
import {CreateNote} from "../../../validations/student_forms";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import studentAPI from '../../../apis/modules/student_apis'
import SuccessToast from '../../../toasts/success'
import ErrorToast from '../../../toasts/error'
import SoloAlert from 'soloalert'

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

export default function UpdateNote(props) {
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = useState(undefined);
    const [error, setError] = useState(undefined);

    const [is_update, setIsUpdate] = React.useState(false);

    const IsUpdate=()=>{
        setIsUpdate(!is_update);
    };

    const handleClickOpen = () => {
        setError(undefined)
        setSuccess(undefined)
        setOpen(true);
    };
    const handleClose = () => {
        props.getNotices()
        setOpen(false);
    };

    const UpdateData = async(data)=>{
        try{
            let payload = {
                title : data.title,
                description : data.description
            }
            await studentAPI.updateNotice(props.id,payload);
            setSuccess('Notice update successfully')
            handleClose()
        }catch (e){
            setError(e.message)
        }
    }

    const deleteNotice = async()=>{
        try{
            SoloAlert.confirm({
                title:"Title Here",
                body:"Are you a Cat ?"
            }).then(async value => {
                if(value){
                    (await studentAPI.deleteNotice(props.id));
                    setSuccess('Notice deleted successfully')
                    handleClose()
                }
            })

        }catch (e) {
            setError(e.message)
        }
    }

    const formik = useFormik({
        initialValues: {
            title: props.title,
            description: props.description,
            id:props.id
        },
        validationSchema: CreateNote,
        onSubmit: (values) => {
            UpdateData(values);
        },
    });


    return (
        <div>
            <IconButton variant="contained" onClick={handleClickOpen} aria-label="delete" size="small">
                <EditIcon fontSize="inherit" />
            </IconButton>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    UPDATE NOTE
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <TextField
                            disabled={!is_update}
                            fullWidth
                            margin="normal"
                            id="title"
                            label="Title"
                            name="title"
                            autoFocus
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField
                            disabled={!is_update}
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
                <DialogActions hidden={is_update}>
                    <Button autoFocus variant="contained" color="inherit" startIcon={<EditIcon />} onClick={IsUpdate}>
                        EDITE
                    </Button>
                    <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={deleteNotice}>
                        Delete
                    </Button>
                </DialogActions>
                <DialogActions hidden={!is_update}>
                    <Button autoFocus variant="contained" color="inherit" onClick={IsUpdate}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="info" onClick={formik.handleSubmit}>
                        Update
                    </Button>
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
