import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { LoginContext } from '../../App';
import { useFormik } from 'formik'
import { formStyle } from '../Login/Login';


const PlaceOder = () => {
    const [loginUser, setLoginUser] = useContext(LoginContext)
    const [confirm,setConfirm] = useState(false);
    const initialValues = {
        name: loginUser.name,
        email: loginUser.email,
        phone:"",
        address:''

    }
    const onSubmit = values => {
        setConfirm(true)
    }
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validate: values => {
            let errors = {}
            if (values.phone.length < 6) {
                errors.phone = "Please give a valid number"
            }
            else{
                errors.phone = "Please give a valid number2"
            }
            return errors;
        }
    })
    return (
        <div>
            {confirm ?(
                <h1>Thank You For Your Order</h1>
            ):(
                
                <Form style={formStyle} onSubmit={formik.handleSubmit}>
                    <h4>Confirmation</h4>
                <Form.Group controlId="formBasicfirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text" required name="name" disabled
                        placeholder=" first name"
                        {...formik.getFieldProps("name")} />
                </Form.Group>



                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" required disabled placeholder="Enter email"
                        {...formik.getFieldProps("email")}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicphone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" name="phone" required placeholder="Number"
                        {...formik.getFieldProps("phone")} />
                    {formik.errors.phone && formik.touched.phone ? (<Form.Text className="text-danger">{formik.errors.phone}</Form.Text>) : null}
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Pickup Address</Form.Label>
                    <Form.Control type="text" name="address" required placeholder="Address"
                        {...formik.getFieldProps("address")} />

                </Form.Group>
                <Button variant="primary" type="submit" style={{ width: "60%", margin: "auto", display: "block" }}>
                    Confirm Order
                </Button>

            </Form>
            )
            
        }
            
        </div >
    );
};

export default PlaceOder;