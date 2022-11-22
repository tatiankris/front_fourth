import * as React from "react";
import {
    Button,
    FormControl,
    FormGroup,
    FormLabel,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField
} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import {LOGIN} from "../../Routing";
import {useAppDispatch} from "../../hooks";
import {FormikErrors, useFormik} from "formik";
import {registerTC} from "../../store/authReducer";

type FormikErrorType   = {
    email?: string;
    password?: string;
}

function Register() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            let errors: FormikErrors<FormikErrorType> = {};
        },
        onSubmit: values => {



            dispatch(registerTC(values));
            formik.resetForm();
        },
    });
    return (
        <div className="Register">
            <Grid container justifyContent={'center'} >
                <Grid marginTop={'50px'} textAlign={"center"} width={'400px'} >
                    <Paper elevation={14} style={{padding:'30px'}}>
                        <form onSubmit={formik.handleSubmit} >
                            <FormControl text-align={'center'} fullWidth>
                                <FormLabel>
                                    <h2>Registration</h2>
                                </FormLabel>
                                <FormGroup >
                                    <TextField
                                        label="Email"
                                        variant="standard"
                                        {...formik.getFieldProps("email")}
                                    />
                                    <TextField
                                        label="Password"
                                        type='password'
                                        variant="standard"
                                        {...formik.getFieldProps("password")}
                                    />
                                    <Button type={'submit'} color={'primary'}>
                                        Sign Up
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Register;