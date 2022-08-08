import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFormik} from 'formik';


import {LoginForm} from "../../validations";
import ErrorToast from '../../toasts/error'
import auth from "../../apis/modules/auth";
import Info from '../../alerts/info'

const theme = createTheme();

export default function ChangePassword() {

    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(undefined);


    const login = async (data) => {
        try {
            setBtnLoading(true);
            let payload = {
                email: data.email,
                password: data.password,
            };
            let respond = (await auth.login(payload)).data;
            localStorage.setItem("JWT", respond.token);

        } catch (e) {
            localStorage.clear();
            setError('Your email or password is incorrect')
        }
        setBtnLoading(false);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginForm,
        onSubmit: (values) => {
            login(values);
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
                    <Info message='You have to change your password by providing temporary password as current password'/>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Set New Password
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Current Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
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
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Confirm Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
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