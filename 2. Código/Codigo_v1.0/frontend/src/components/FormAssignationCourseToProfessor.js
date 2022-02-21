import React, { useState } from 'react'
import {Box, Button, MenuItem, Select, FormControl, InputLabel, Grid, Card, Typography} from "@mui/material";

const FormAssignationCourseToProfessor = (props) => {
    const { professors, courses, setLevel, id, setId, setProfessor, professor, handleUpdate } = props;

    const handleChangeLevel = (event) => {
        const { value } = event.target;
        setLevel(value);
    }
    
    const handleChangeId = (event) => {
        const { value } = event.target;
        setId(value);
    };
    
    const handleChangeProfessor = (event) => {
        const { name, value } = event.target;

        const coursesArray = professor.idCourse;
        coursesArray.push(value);

        setProfessor({...professor, [name]: coursesArray});
    }
    
    const handleUpdateInternal = (e) => {
        e.preventDefault();
        handleUpdate(professor, setProfessor);
    };

    return(
        <>
            <form onSubmit={handleUpdateInternal}>
                <Box sx={{ width: '100%'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Card sx={{borderRadius: '20px', width: '61%', p: 3}}>
                                <Typography variant="h3" gutterBottom component="div">
                                    Niveles
                                </Typography><br/><br/>
                                <FormControl fullWidth>
                                    <InputLabel id="labelLevels">Niveles</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId='labelLevels'
                                        name='idLevel'
                                        id='idLevel'
                                        label='Nivel'
                                        onChange={handleChangeLevel}
                                    >
                                        <MenuItem disabled selected>Seleccione el nivel</MenuItem>                                        
                                        <MenuItem value="Primaria_Preparatoria">Primaria/Preparatoria</MenuItem>                                        
                                        <MenuItem value="EGB">Educación General Básica</MenuItem>                                        
                                    </Select>
                                </FormControl>
                            </Card>
                        </Grid>
                        
                        <Grid item xs={4} sx={{ marginLeft: '17%'}}>
                            <Card sx={{borderRadius: '20px', width: '85%', p: 3, boxShadow: '1px 1px 5px #333'}}>
                                <Typography variant="h3" gutterBottom component="div">
                                    Docentes
                                </Typography><br/><br/>
                                <FormControl fullWidth>
                                    <InputLabel id="labelProfessors">Profesores</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId='labelProfessors'
                                        name='idProfessor'
                                        id='idProfessor'
                                        label='Docente'
                                        onChange={handleChangeId}
                                    >
                                        <MenuItem disabled selected>Seleccione un profesor</MenuItem>
                                        {
                                            professors.map(item => (
                                                <MenuItem value={item._id}>{item.name} {item.lastName}</MenuItem>
                                            ))
                                        }
                                        
                                    </Select>
                                </FormControl>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{borderRadius: '20px', width: '85%', p: 3, boxShadow: '1px 1px 5px #333'}}>
                                <Typography variant="h3" gutterBottom component="div">
                                    Cursos
                                </Typography><br/><br/>
                                <FormControl fullWidth>
                                    <InputLabel id="labelSubjects">Cursos</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId='labelSubjects'
                                        name='idCourse'
                                        id='idCourse'
                                        label='Curso'
                                        onChange={handleChangeProfessor}
                                    >
                                        <MenuItem disabled selected>Seleccione un curso</MenuItem>
                                        {
                                            courses.map(item => (
                                                <MenuItem value={item._id}>{item.number} {item.parallel}</MenuItem>
                                                
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <br /><br />
                <Button
                    variant="contained"
                    size = "large"
                    type="submit"
                    sx={{
                        boxShadow: '1px 1px 5px #333',
                        background: 'linear-gradient(to right, #4d83b8, #4d83b8)',
                        width: '15%'
                    }}        
                >
                    Asignar
                </Button><br/>

            </form>
        </>
    );
}

export default FormAssignationCourseToProfessor;