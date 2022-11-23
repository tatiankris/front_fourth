import * as React from "react";
import {useAppDispatch} from "../../hooks";
import {
    Container,
    Grid,
    Paper,
    Stack,
    TableContainer,
    Button,
    Divider,
    FormControl,
    FormLabel,
    FormGroup, TextField
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {FormikErrors, useFormik} from "formik";
import {loginTC} from "../../store/authReducer";

type FormikErrorType   = {
    email?: string;
    password?: string;
}

function Login() {

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
            console.log(values)


            dispatch(loginTC(values));
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
                                    <h2>Login</h2>
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
                                        Log In
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

export default Login;