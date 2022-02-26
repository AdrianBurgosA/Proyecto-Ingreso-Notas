import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {MenuItem, FormControl, InputLabel, Select} from '@mui/material';
import '../index.css';

const InsertGrades = (props) => {

    const handleSubmit = props.handleSubmit;
    const gradesValues = props.gradesValues;
    const setGradesValues = props.setGradesValues;
    const coursesValues = props.coursesValues;
    const subjectsValues = props.subjectsValues;
    const values = props.values;
    const setValues = props.setValues;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value});
    };

    const handleChangeGrades = (event) => {
        const { name, value } = event.target;
        const index = event.target.selectedIndex;
        const optionElement = event.target.childNodes[index];
        const id = optionElement.getAttribute('id');

        const newGrades = gradesValues.map((grade) => {
            if (grade.idStudent === id) {
                return {
                    ...grade,
                    [name]: value
                }
            }
            return grade
        })
        
        setGradesValues(newGrades);
    };

    const handleSubmitInternal = (e) => {
        e.preventDefault();
        handleSubmit();

    };

    return(
        <>
            <br/>
            <Typography variant="h3" gutterBottom component="div" sx={{textAlign:'center'}}>
                Registrar calificaciones
            </Typography><br/><br/>

            <form id='submitGrades' onSubmit={handleSubmitInternal}>
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
                                    <td>{item.nameStudent}</td>
                                    <td>
                                        <select
                                            class="select"
                                            name="lessons"
                                            value={item.lessons} 
                                            onChange={handleChangeGrades}
                                            label="Lecciones"
                                        >
                                            <option disabled selected>Seleccione una calificación </option>
                                            <option id={item.idStudent} value="I">I</option>
                                            <option id={item.idStudent} value="EP">EP</option>
                                            <option id={item.idStudent} value="A">A</option>
                                            <option id={item.idStudent} value="N/E">N/E</option>
                                        </select>
                                    </td>
                                    <td>
                                        
                                        <select
                                            class="select"
                                            name='participations'
                                            value={item.participations} 
                                            label="Participaciones"
                                            onChange={handleChangeGrades}
                                        >
                                            <option disabled selected>Seleccione una calificación </option>
                                            <option id={item.idStudent} value="I">I</option>
                                            <option id={item.idStudent} value="EP">EP</option>
                                            <option id={item.idStudent} value="A">A</option>
                                            <option id={item.idStudent} value="N/E">N/E</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            class="select"
                                            name='homeworks'
                                            value={item.homeworks} 
                                            label="Deberes"
                                            onChange={handleChangeGrades}
                                        >
                                            <option disabled selected>Seleccione una calificación </option>
                                            <option id={item.idStudent} value="I">I</option>
                                            <option id={item.idStudent} value="EP">EP</option>
                                            <option id={item.idStudent} value="A">A</option>
                                            <option id={item.idStudent} value="N/E">N/E</option>
                                                
                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            class="select"
                                            name='project'
                                            value={item.project} 
                                            label="Proyecto"
                                            onChange={handleChangeGrades}
                                        >
                                            <option disabled selected>Seleccione una calificación </option>
                                            <option id={item.idStudent} value="I">I</option>
                                            <option id={item.idStudent} value="EP">EP</option>
                                            <option id={item.idStudent} value="A">A</option>
                                            <option id={item.idStudent} value="N/E">N/E</option>

                                        </select>
                                    </td>
                                    <td>
                                        <select
                                            class="select"
                                            name='exam'
                                            value={item.exam} 
                                            label="Examen"
                                            onChange={handleChangeGrades}
                                        >
                                            <option disabled selected>Seleccione una calificación </option>
                                            <option id={item.idStudent} value="I">I</option>
                                            <option id={item.idStudent} value="EP">EP</option>
                                            <option id={item.idStudent} value="A">A</option>
                                            <option id={item.idStudent} value="N/E">N/E</option>
                                                
                                        </select>
                                    </td>
                                </tr>
                            ))
                        }

                    </table>
                    
                    <br />
                    <br />
                    <Button
                        variant="contained"
                        size = "large"
                        type="submit"
                        onClick={handleSubmitInternal}
                        sx={{
                            boxShadow: '1px 1px 5px #333',
                            background: 'linear-gradient(to right, #4d83b8, #4d83b8)',
                            width: '30%',
                            marginLeft: '35%'
                        }}        
                    >
                        Registrar
                    </Button><br/><br/>
                </Box>
            </form>
        </>
    );
}
export default InsertGrades;