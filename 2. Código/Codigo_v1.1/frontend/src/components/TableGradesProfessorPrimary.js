import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {MenuItem, FormControl, InputLabel, Select} from '@mui/material';

const TableGradesProfessorPrimary = (props) => {

    const gradesValues = props.gradesValues;
    const coursesValues = props.coursesValues;
    const subjectsValues = props.subjectsValues;
    const studentsValues = props.studentsValues;
    const values = props.values;
    const setValues = props.setValues;

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value})
    };

    const obtainNameStudent = (idStudent) => {
        
        for (var i=0; i<studentsValues.length; i++) {
            if (studentsValues[i]._id === idStudent) {
                return studentsValues[i].name + " " + studentsValues[i].lastName;
            }
        }

    };

    return(
        <>
            <br/>
            <Typography variant="h3" gutterBottom component="div" sx={{textAlign:'center'}}>
                Visualizar calificaciones
            </Typography><br/><br/>

            
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50%', marginLeft: '25%'},
                }}
            >

                <FormControl fullWidth>
                    <InputLabel id="quimesterLabel">Quimestre</InputLabel>
                    <Select
                        fullWidth
                        labelId="quimesterLabel"
                        id="quimester"
                        name='quimester'
                        value={values.quimester}
                        label="Quimestre"
                        onChange={handleChange}
                    >
                        <MenuItem disabled selected>Seleccione un quimestre </MenuItem>
                        <MenuItem value={1}>Primer quimestre</MenuItem>
                        <MenuItem value={2}>Segundo quimestre</MenuItem>
                                
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="labelCourse">Cursos</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelCourse"
                        id="idCourse"
                        name='idCourse'
                        value={values.idCourse}
                        label="Cursos"
                        onChange={handleChange}
                    >
                        <MenuItem disabled selected>Seleccione un curso </MenuItem>
                        {
                            coursesValues.map(item => (
                                <MenuItem value={item._id}>{item.number} {item.parallel}</MenuItem>
                                
                            ))
                        }

                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="labelSubject">Materias</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelSubject"
                        id="idSubject"
                        name='idSubject'
                        value={values.idSubject}
                        label="Materias"
                        onChange={handleChange}
                    >
                        <MenuItem disabled selected>Seleccione una materia </MenuItem>
                        {
                            subjectsValues.map(item => (
                                <MenuItem value={item._id}>{item.name}</MenuItem>
                                
                            ))
                        }

                    </Select>
                </FormControl>


                <br /><br />

                <table>
                    <tr>
                        <th>Estudiantes</th>
                        <th>Lecciones</th>
                        <th>Participaciones</th>
                        <th>Deberes</th>
                        <th>Proyecto</th>
                        <th>Examen</th>
                    </tr>

                    {
                        gradesValues.map((item) => (
                            <tr>
                                <td>{obtainNameStudent(item.idStudent)}</td>
                                <td>{item.grades[0].lessons}</td>
                                <td>{item.grades[0].participations}</td>
                                <td>{item.grades[0].homeworks}</td>
                                <td>{item.grades[0].project}</td>
                                <td>{item.grades[0].exam}</td>
                            </tr>
                        ))
                    }
                </table>
                
                <br /><br />
            </Box>
            
        </>
    );
}
export default TableGradesProfessorPrimary;