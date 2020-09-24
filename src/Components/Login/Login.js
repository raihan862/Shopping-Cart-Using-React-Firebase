import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Authentication';
import { LoginContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useFormik } from 'formik'
import { EmailLogin, GoogleLogin } from './LoginMethod';
import logo from '../../images/google.png'
firebase.initializeApp(firebaseConfig);
export const formStyle = {
    width: "450px",
    margin: "auto",
     
    boxShadow:"5px 5px 10px rgb(0,0,0,.2),-5px -5px 10px rgb(0,0,0,.1)",
    padding: "25px 10px",
    marginTop: "20px"
}
const initialValues = {
    email: "",
    password: ""
}

const Login = () => {
    const [loginUser, setLoginUser] = useContext(LoginContext)
    
    const [errorMgs, setErrorMgs] = useState("");

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = values => {
        EmailLogin(values.email, values.password)
            .then(result => {
                if (typeof result !== "string") {
                    setUser(result)
                }
                else {
                    setErrorMgs(result)
                }
            })

    }

    const setUser = result => {
        const email = result.user.email;
        const name = result.user.displayName;
        setLoginUser({
            email: email,
            name: name
        })
        history.replace(from)
    }

    const handleGoogle = () => {
        GoogleLogin()
            .then(result => {
                if (typeof result !== "string") {
                    setUser(result)
                }
                else {
                    setErrorMgs(result)
                }
            })
    }

    const formik = useFormik({
        initialValues,
        onSubmit

    })


    return (
        <div  >

            <Form style={formStyle} onSubmit={formik.handleSubmit}>
            <h4>Login</h4>
                <p className="text-danger">{errorMgs}</p>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email"
                        {...formik.getFieldProps("email")}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password"
                        {...formik.getFieldProps("password")}
                    />
                </Form.Group>
                <Link to="/password-reset">    
                     <Button  variant="" className="text-dander" style = {{border:"none",marginLeft:"auto",display:"block",padding :"10px 5px",fontWeight:"500"}}>Forgot Password ? </Button>
                </Link>

                <Button variant="primary" type="submit" style={{ width: "60%", margin: "auto", display: "block" }}>
                    Login
                </Button>
                <p style = {{marginLeft:"auto",display:"block",padding :"5px",fontWeight:"bold"}}>Do no have an Account ?
                <Link to="/signin">    
                     <span variant="" className="text-dander" > Create An account ?</span>
                </Link>
                </p>
                <Button onClick={handleGoogle} variant="" style={{ width: "100%", borderRadius: "20px", border: "1px solid #666", marginTop: "10px" }}>
                <img src={logo} width="35px" style={{padding:"5px" }} /> Login With Google
            </Button>
            </Form>
        </div>

    );
};

export default Login;