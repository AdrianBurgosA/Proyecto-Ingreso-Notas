import React,{useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';

const RegisterStudentForm = () => {
    const [ student , setStudent ] = useState({
        name: '',
        lastName: '',
        bornYear: new Date(),
        idCard:'',
        genre: '',
        nationality: '',
        email: '',
        user: '',
        password: '',
    })

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
                <TextField value={student.name} onChange={(event) => setStudent({...student,name:event.target.value})}id="outlined-basic" label="Nombre" variant="outlined" /><br/>
                <TextField value={student.lastName} onChange={(event) => setStudent({...student,lastName:event.target.value})}id="outlined-basic" label="Apellido" variant="outlined"/><br/>
                <TextField value={student.idCard} onChange={(event) => setStudent({...student,idCard:event.target.value})}id="outlined-basic" label="Cédula" variant="outlined" /><br/>
                <TextField value={student.genre} onChange={(event) => setStudent({...student,genre:event.target.value})}id="outlined-basic" label="Género" variant="outlined" /><br/>
                <TextField value={student.nationality} onChange={(event) => setStudent({...student,nationality:event.target.value})}id="outlined-basic" label="Nacionalidad" variant="outlined"/><br/>
                <TextField value={student.email} onChange={(event) => setStudent({...student,email:event.target.value})}id="outlined-basic" label="Correo eléctronico" variant="outlined" /><br/>
                <TextField value={student.user} onChange={(event) => setStudent({...student,user:event.target.value})}id="outlined-basic" label="Usuario" variant="outlined" /><br/>
                <TextField value={student.password} onChange={(event) => setStudent({...student,password:event.target.value})}id="outlined-basic" label="Contraseña" variant="outlined" /><br/>
                <TextField
                        id="date"
                        label="Fecha de nacimiento"
                        type="date"
                        defaultValue="2022-05-24"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                /><br/><br/>
                <Button
                    variant="contained"
                    size = "large"
                    type="submit"
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