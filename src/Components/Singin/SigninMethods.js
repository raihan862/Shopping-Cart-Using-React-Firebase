import * as firebase from "firebase/app";
import "firebase/auth";


export const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPass: ""
}


export const validate = values => {
    let errors = {}

    if (! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
        errors.email = "Please Give an Valid Email"
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)) {
        errors.password = "Password length Should at least 8 with  atleast [1 upper, 1 lower and 1 number] "
    }
    else if (values.password !== values.confirmPass) {
        errors.confirmPass = "Password Does Not Match"
    }
    return errors;
}


export const updateProfile = (values) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: values.fname +" " +values.lname,
        
    }).then(function () {
        
    }).catch(function (error) {
        console.log(error.messege);
    });

}