import React from 'react';
import Typography from '@mui/material/Typography';
import {Box, Button, MenuItem, Select, FormControl, InputLabel, Grid, Card} from "@mui/material";

const RegisterStudentForm = (props) => {

    const handleUpdate = props.handleUpdate;
    const students = props.students;
    const courses = props.courses;
    const student = props.student;
    const setStudent = props.setStudent;
    const setId = props.setId;

    const handleChangeId = (event) => {
        const { value } = event.target;
        console.log(value);
        setId(value);
    };

    const handleChangeStudent = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value});
    };

    const handleUpdateInternal = (e) => {
        e.preventDefault();
        handleUpdate(student, setStudent);
    };

    return(
        <>
            <form onSubmit={handleUpdateInternal}>
                <Box sx={{ width: '100%', marginLeft: '17%'}}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Card sx={{borderRadius: '20px', width: '85%', p: 3, boxShadow: '1px 1px 5px #333', marginTop: '30%'}}>
                                <Typography variant="h3" gutterBottom component="div">
                                    Estudiantes
                                </Typography><br/><br/>

                                <FormControl fullWidth>
                                    <InputLabel id="labelStudents">Estudiantes</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId='labelStudents'
                                        name='idStudent'
                                        id='idStudent'
                                        label='Estudiante'
                                        onChange={handleChangeId}
                                    >
                                        
                                        <MenuItem disabled selected>Seleccione un estudiante</MenuItem>
                                        {
                                            students.map(item => (
                                                <MenuItem value={item._id}>{item.name} {item.lastName}</MenuItem>
                                                
                                            ))
                                        }
                                        
                                    </Select>
                                </FormControl>
                            </Card>
                        </Grid>

                        <Grid item xs={4}>
                            <Card sx={{borderRadius: '20px', width: '85%', p: 3, boxShadow: '1px 1px 5px #333', marginTop: '30%'}}>
                                <Typography variant="h3" gutterBottom component="div">
                                    Cursos
                                </Typography><br/><br/>
                                <FormControl fullWidth>
                                    <InputLabel id="labelCourses">Cursos</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId='labelCourses'
                                        name='idCourse'
                                        id='idCourse'
                                        label='Curso'
                                        onChange={handleChangeStudent}
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
export default RegisterStudentForm;