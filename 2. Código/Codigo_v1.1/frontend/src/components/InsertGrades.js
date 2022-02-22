import React,{useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';

const InsertGrades = (props) => {

    const handleSubmit = props.handleSubmit;
    const professorValues = props.professorValues;
    const coursesValues = props.coursesValues;
    const subjectsValues = props.subjectsValues;

    console.log(professorValues);
    console.log(coursesValues);
    console.log(subjectsValues);

    const handleSubmitInternal = (e) => {
        e.preventDefault();
        
    };

    return(
        <>
            <br/>
            <Typography variant="h3" gutterBottom component="div" sx={{textAlign:'center'}}>
                Registrar calificaciones
            </Typography><br/><br/>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80ch'},
                }}
            >
                
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
export default InsertGrades;