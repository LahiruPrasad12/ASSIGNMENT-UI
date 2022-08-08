import * as Yup from "yup";

export const CreateNote = Yup.object().shape({
    title: Yup.string().required('required'),
    description: Yup.string()
        .min(8, 'Too short')
        .max(50, 'Too Long!')
        .required('Required'),
});
