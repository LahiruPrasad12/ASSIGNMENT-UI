import * as Yup from "yup";

export const LoginForm = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('required'),
    password: Yup.string()
        .min(8, 'password must be at least 8 character')
        .max(50, 'Too Long!')
        .required('Required'),
});

export const UpdateProfile = Yup.object().shape({
    first_name: Yup.string().required('required'),
    last_name: Yup.string().required('required'),
    DOB: Yup.string().required('required'),
    mobile: Yup.string().required('required'),
    current_password: Yup.string()
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(8, 'password must be at least 8 character')
        .max(50, 'Too Long!')
        .required('required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'passwords must match')
        .required('required'),
});