import React,{useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';
import {MenuItem, FormControl, InputLabel, Select} from '@mui/material';

const InsertGrades = (props) => {

    const handleSubmit = props.handleSubmit;
    const gradesValues = props.gradesValues;
    const setGradesValues = props.setGradesValues;
    const professorValues = props.professorValues;
    const coursesValues = props.coursesValues;
    const subjectsValues = props.subjectsValues;
    const studentsValues = props.studentsValues;
    const values = props.values;
    const setValues = props.setValues;
    
    const [counter, setCounter] = useState(0)

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value})
    };

    const handleChangeGrades = (event) => {
        const { id, name, value } = event.target
        //setGradesValues([...gradesValues, {[name]: value}])

        const newGrades = gradesValues.map((grade) => {
            if (grade.idStudent === id) {
                return {
                    ...grade,
                    [name]: value
                }
            }
            return grade
        })
        console.log(newGrades)
        setGradesValues(newGrades)
    };
    
    console.log(gradesValues)

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

                    <br />

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
                                        <TextField fullWidth 
                                            id={item.idStudent} 
                                            name="lessons"
                                            value={item.lessons} 
                                            onChange={handleChangeGrades}
                                            label="Lecciones" 
                                            type="number"
                                        />
                                    </td>
                                    <td>
                                        <TextField fullWidth 
                                            id={item.idStudent} 
                                            name="participations"
                                            value={item.participations} 
                                            onChange={handleChangeGrades}
                                            label="Participaciones" 
                                            type="number"
                                        />
                                    </td>
                                    <td>
                                        <TextField fullWidth 
                                            id={item.idStudent} 
                                            name="homeworks"
                                            value={item.homeworks} 
                                            onChange={handleChangeGrades}
                                            label="Deberes" 
                                            type="number"
                                        />
                                    </td>
                                    <td>
                                        <TextField fullWidth 
                                            id={item.idStudent} 
                                            name="project"
                                            value={item.project} 
                                            onChange={handleChangeGrades}
                                            label="Proyecto" 
                                            type="number"
                                        />
                                    </td>
                                    <td>
                                        <TextField fullWidth 
                                            id={item.idStudent} 
                                            name="exam"
                                            value={item.exam} 
                                            onChange={handleChangeGrades}
                                            label="Examen" 
                                            type="number"
                                        />
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