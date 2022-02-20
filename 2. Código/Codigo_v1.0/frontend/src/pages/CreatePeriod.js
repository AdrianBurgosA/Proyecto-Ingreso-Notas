import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin';
import RegisterForm from '../components/RegisterPeriodForm'

const CreatePeriod = () => {
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