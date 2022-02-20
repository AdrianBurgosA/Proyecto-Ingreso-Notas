import React from 'react'
import RegisterForm from '../components/RegisterStudentForm';
import NavbarAdmin from '../components/NavbarAdmin';

const registerStudent = () => {
    return(
        <>
            <NavbarAdmin /><br/>
            <center>
                <RegisterForm/>
            </center>
        </>
    )
}

export default registerStudent;