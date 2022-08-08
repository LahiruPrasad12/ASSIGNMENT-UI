import * as React from 'react';
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
import {TextareaAutosize} from "@mui/material";
import Grid from "@mui/material/Grid";


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

export default function CreateStudent() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const CreateStudent = async (data) => {
        try {
            let payload = {
                title: data.title,
                description: data.default
            }
        } catch (e) {

        }
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: CreateNote,
        onSubmit: (values) => {
            CreateStudent(values);
        },
    });


    return (
        <div>
            <Button sx={{
                float: "right",
            }} variant="contained" startIcon={<AddIcon/>} onClick={handleClickOpen}>Create Student</Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title">
                    CREATE NEW STUDENT
                </BootstrapDialogTitle>
                <DialogContent dividers sx={{width:'100%'}}>
                    <Typography gutterBottom>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Email"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={formik.handleSubmit}>
                        Cancel
                    </Button>
                    <Button autoFocus onClick={formik.handleSubmit}>
                        Create User
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
