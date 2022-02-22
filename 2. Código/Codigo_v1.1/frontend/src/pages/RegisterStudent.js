import React from 'react'
import RegisterStudentForm from '../components/RegisterStudentForm';
import NavbarAdmin from '../components/NavbarAdmin';
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';
import {saveStudent, saveUser} from '../services/studentService';

const cookies = new Cookies();

const RegisterStudent = () => {

    const handleSubmit = (studentData, setStudentValues) => {
        saveStudent(studentData, setStudentValues);
        saveUser(studentData);
    };

    useEffect(() => {
        if (typeof cookies.get('user') === 'undefined' || cookies.get('type', {path: "/"}) !== '0') {
            window.location.href = "./";
        }
    });

    return(
        <>
            <NavbarAdmin /><br/>
            <center>
                <RegisterStudentForm handleSubmit={handleSubmit} />
            </center>
        </>
    );
};

export default RegisterStudent;