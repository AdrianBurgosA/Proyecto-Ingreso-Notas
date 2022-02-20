import React from 'react'
import RegisterForm from '../components/RegisterStudentForm';
import NavbarAdmin from '../components/NavbarAdmin';
import Cookies from 'universal-cookie/es6';
import {useEffect} from 'react';

const cookies = new Cookies();

const RegisterStudent = () => {

    useEffect(() => {
        if (typeof cookies.get('user') === 'undefined' || cookies.get('type', {path: "/"}) !== '0') {
            window.location.href = "./";
        }
    });

    return(
        <>
            <NavbarAdmin /><br/>
            <center>
                <RegisterForm/>
            </center>
        </>
    )
}

export default RegisterStudent;