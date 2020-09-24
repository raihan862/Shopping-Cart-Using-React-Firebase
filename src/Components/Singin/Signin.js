import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik'
import { initialValues, updateProfile, validate } from './SigninMethods';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router-dom';
import { formStyle } from '../Login/Login';
import { GoogleLogin } from '../Login/LoginMethod';
import logo from '../../images/google.png'
const Signin = () => {
    const [errorMgs,setErrorMgs] = useState("");
    const history = useHistory();
    const onSubmit = (values,{resetForm}) => {
        firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
            .then(resutl => {
                updateProfile(values)
                  
                history.push("/login")
            })
            .catch(error => {
    
                console.log(error.message);
                setErrorMgs( error.message);
                
            });
    
    }
    
    const formik = useFormik({
        initialValues:initialValues,
        onSubmit,
        validate:validate

    })
    
    
    return (
        <div>
            <Form style={formStyle} onSubmit={formik.handleSubmit}>
            <h4>SignUp</h4>
            <p className="text-danger">{errorMgs}</p>
                <Form.Group controlId="formBasicfirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text" required name="fname"
                        placeholder=" first name"
                        {...formik.getFieldProps("fname")} />
                </Form.Group>

                <Form.Group controlId="formBasiclastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lname" required
                        placeholder=" last name"
                        {...formik.getFieldProps("lname")}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="Enter email"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.errors.email && formik.touched.email ? (<Form.Text className="text-danger">{formik.errors.email}</Form.Text>) : null}

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required placeholder="Password"
                        {...formik.getFieldProps("password")} />
                    {formik.errors.password && formik.touched.password ? (<Form.Text className="text-danger" >{formik.errors.password}</Form.Text>) : null}
                </Form.Group>
                <Form.Group controlId="formBasicPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPass" required placeholder="Rewrite Password"
                        {...formik.getFieldProps("confirmPass")} />
                    {formik.errors.confirmPass && formik.touched.confirmPass ? (<Form.Text className="text-danger">{formik.errors.confirmPass}</Form.Text>) : null}
                </Form.Group>
                <Button variant="primary" type="submit" style={{ width: "60%", margin: "auto", display: "block" }}>
                    Signin
                </Button>
                <Button variant="" onClick={GoogleLogin} style={{ width: "100%", borderRadius: "20px", border: "1px solid #666", marginTop: "10px" }}>
                <img src={logo} width="35px" style={{padding:"5px" }} />  SignIn With Google
                </Button>
            </Form>
        </div >
    );
};

export default Signin;