import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { formStyle } from './Login';
import * as firebase from "firebase/app";
import "firebase/auth";
const ForgetPassword = () => {
    const emailRef = useRef();
    const [ Mgs, setMgs] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault()
      const  email= emailRef.current.value
        let auth = firebase.auth();
        

        auth.sendPasswordResetEmail(email)
        .then( ()=> {
            setMgs("Reset Link Send")
        }).catch((error) => {
            setMgs(error.message)
        });

    }
    return (
        <div>

            <Form style={formStyle} onSubmit={handleSubmit}>
            <p className="text-warning">{Mgs}</p>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} name="email" placeholder="Enter email" />
                </Form.Group>
                <Button type='submit'>Send</Button>
            </Form>
        </div>
    );
};

export default ForgetPassword; 