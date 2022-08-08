import * as Yup from "yup";

export const CreateStudent = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('required')
});
