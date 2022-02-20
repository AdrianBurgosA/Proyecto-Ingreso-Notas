import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin';
import RegisterForm from '../components/RegisterPeriodForm'
import Cookies from 'universal-cookie/es6';
import {useEffect} from 'react';

const cookies = new Cookies();

const CreatePeriod = () => {

    useEffect(() => {
        if (typeof cookies.get('user') === 'undefined' || cookies.get('type', {path: "/"}) !== '0') {
            window.location.href = "./";
        }
    });

    return(
        <>
            <NavbarAdmin/>
            <center>
                <RegisterForm/>
            </center>
        </>
    )
}

export default CreatePeriod;