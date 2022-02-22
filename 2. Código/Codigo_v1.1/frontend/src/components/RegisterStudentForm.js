import React,{useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';

const RegisterStudentForm = (props) => {

    const handleSubmit = props.handleSubmit;

    const [studentValues, setStudentValues] = useState({
        name: '',
        lastName: '',
        bornYear: '',
        idCard: '',
        genre: '',
        nationality: '',
        email: '',
        user: '',
        password: '',
        idCourse: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStudentValues({ ...studentValues, [name]: value});
    };

    const handleSubmitInternal = (e) => {
        e.preventDefault();
        handleSubmit(studentValues, setStudentValues);
    };

    return(
        <>
            <br/><Typography variant="h3" gutterBottom component="div" sx={{textAlign:'center'}}>
                Registrar nuevo estudiante
            </Typography><br/><br/>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80ch'},
                }}
            >
                <TextField name='name' value={studentValues.name} onChange={handleChange} id="outlined-basic" label="Nombre" variant="outlined" /><br/>
                <TextField name='lastName' value={studentValues.lastName} onChange={handleChange} id="outlined-basic" label="Apellido" variant="outlined"/><br/>
                <TextField name='idCard' value={studentValues.idCard} onChange={handleChange} id="outlined-basic" label="Cédula" variant="outlined" /><br/>
                <TextField name='genre' value={studentValues.genre} onChange={handleChange} id="outlined-basic" label="Género" variant="outlined" /><br/>
                <TextField name='nationality' value={studentValues.nationality} onChange={handleChange} id="outlined-basic" label="Nacionalidad" variant="outlined"/><br/>
                <TextField name='email' value={studentValues.email} onChange={handleChange} id="outlined-basic" label="Correo eléctronico" variant="outlined" /><br/>
                <TextField name='user' value={studentValues.user} onChange={handleChange} id="outlined-basic" label="Usuario" variant="outlined" /><br/>
                <TextField name='password' value={studentValues.password} onChange={handleChange} id="outlined-basic" label="Contraseña" variant="outlined" /><br/>
                <TextField
                    id="date"
                    name='bornYear'
                    label="Fecha de nacimiento"
                    type="date"
                    value={studentValues.bornYear}
                    onChange={handleChange}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <br/><br/>
                <Button
                    variant="contained"
                    size = "large"
                    type="submit"
                    onClick={handleSubmitInternal}
                    sx={{
                        boxShadow: '1px 1px 5px #333',
                        background: 'linear-gradient(to right, #4d83b8, #4d83b8)',
                    }}        
                >
                    Registrar
                </Button><br/>
            </Box>
        </>
    );
}
export default RegisterStudentForm;