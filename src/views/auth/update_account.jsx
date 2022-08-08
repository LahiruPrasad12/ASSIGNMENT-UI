import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFormik} from 'formik';


import {UpdateProfile} from "../../validations/auth_forms";
import ErrorToast from '../../toasts/error'
import Info from '../../alerts/info'
import Grid from "@mui/material/Grid";

const theme = createTheme();

export default function ChangePassword() {

    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(undefined);


    const setNewPassword = async (data) => {
        try {
            setBtnLoading(true);
            let payload = {
                current_password: data.current_password,
                password: data.password,
                confirm_password: data.confirm_password
            };
            console.log(payload)
            // let respond = (await auth.login(payload)).data;


        } catch (e) {
            localStorage.clear();
            setError('Your email or password is incorrect')
        }
        setBtnLoading(false);
    };

    const formik = useFormik({
        initialValues: {
            first_name:'',
            last_name:'',
            DOB:'',
            mobile:'',
            current_password: '',
            password: '',
            confirm_password: '',
        },
        validationSchema: UpdateProfile,
        onSubmit: (values) => {
            setNewPassword(values);
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Info
                        message='You can manage you profile using this form'/>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Update Account Details
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{mt: 1}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="first_name"
                                    label="First Name"
                                    type="text"
                                    id="first_name"
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                                    helperText={formik.touched.first_name && formik.errors.first_name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="last_name"
                                    label="Last Name"
                                    type="text"
                                    id="last_name"
                                    value={formik.values.last_name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                                    helperText={formik.touched.last_name && formik.errors.last_name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="DOB"
                                    type="date"
                                    id="DOB"
                                    value={formik.values.DOB}
                                    onChange={formik.handleChange}
                                    error={formik.touched.DOB && Boolean(formik.errors.DOB)}
                                    helperText={formik.touched.DOB && formik.errors.DOB}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="mobile"
                                    label="Contact Number"
                                    type="number"
                                    id="mobile"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                    helperText={formik.touched.mobile && formik.errors.mobile}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="current_password"
                                    label="Current Password"
                                    type="password"
                                    id="current_password"
                                    autoComplete="current-password"
                                    value={formik.values.current_password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.current_password && Boolean(formik.errors.current_password)}
                                    helperText={formik.touched.current_password && formik.errors.current_password}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="confirm_password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm_password"
                                    autoComplete="current-password"
                                    value={formik.values.confirm_password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                                    helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                                />
                            </Grid>
                        </Grid>
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            loading={btnLoading}
                            sx={{mt: 2, mb: 2}}
                        >
                            Change Password
                        </LoadingButton>
                    </Box>
                </Box>
            </Container>


            {
                error ? <ErrorToast message={error}/> : ''
            }


        </ThemeProvider>
    );
}