import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {MenuItem, FormControl, InputLabel, Select} from '@mui/material';

const TableGradesProfessor = (props) => {

    const gradesValues = props.gradesValues;
    const subjectsValues = props.subjectsValues;
    const values = props.values;
    const setValues = props.setValues;

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value})
    };

    const obtainSubject = (idSubject) => {
        
        for (var i=0; i<subjectsValues.length; i++) {
            if (subjectsValues[i]._id === idSubject) {
                return subjectsValues[i].name;
            }
        }

    };

    const obtainAverage = (grades) => {
        const lessonsAveraged = 0.2 * grades.lessons;
        const participationsAveraged = 0.2 * grades.participations;
        const homeworksAveraged = 0.2 * grades.homeworks;
        const projectAveraged = 0.2 * grades.project;
        const examAveraged = 0.2 * grades.exam;

        return lessonsAveraged + participationsAveraged + homeworksAveraged + projectAveraged + examAveraged;

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

                <br /><br />

                <table>
                    <tr>
                        <th>Materias</th>
                        <th>Lecciones</th>
                        <th>Participaciones</th>
                        <th>Deberes</th>
                        <th>Proyecto</th>
                        <th>Examen</th>
                        <th>Promedio</th>
                    </tr>

                    {
                        gradesValues.map((item) => (
                            <tr>
                                <td>{obtainSubject(item.idSubject)}</td>
                                <td>{item.grades[0].lessons}</td>
                                <td>{item.grades[0].participations}</td>
                                <td>{item.grades[0].homeworks}</td>
                                <td>{item.grades[0].project}</td>
                                <td>{item.grades[0].exam}</td>
                                <td>{obtainAverage(item.grades[0])}</td>
                            </tr>
                        ))
                    }
                </table>
                
                <br /><br />
            </Box>
            
        </>
    );
}
export default TableGradesProfessor;