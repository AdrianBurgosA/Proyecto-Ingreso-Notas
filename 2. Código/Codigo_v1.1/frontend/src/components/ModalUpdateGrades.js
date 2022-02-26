import { Modal, Box, TextField, Button } from '@mui/material'
import React from 'react';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

const ModalUpdateGrades = ( props ) => {

    const handleUpdate = props.handleUpdate;
    const modal = props.modal;
    const setModal = props.setModal;
    const gradesValues = props.gradesValues;
    const setGradesValues = props.setGradesValues;
    const studentsValues = props.studentsValues;

    const obtainNameStudent = (idStudent) => {
        
        for (var i=0; i<studentsValues.length; i++) {
            if (studentsValues[i]._id === idStudent) {
                return studentsValues[i].name + " " + studentsValues[i].lastName;
            }
        }

    };
    
    const handleChangeGrades = (event) => {
        const { id, name, value } = event.target
        const newGrades = [];

        for (var i=0; i<gradesValues.length; i++) {
            if (gradesValues[i].idStudent === id) {
                const grade = {
                    _id: gradesValues[i]._id,
                    idStudent: gradesValues[i].idStudent,
                    idProfessor: gradesValues[i].idProfessor,
                    idSubject: gradesValues[i].idSubject,
                    idCourse: gradesValues[i].idCourse,
                    quimester: gradesValues[i].quimester,
                    __v: gradesValues[i].__v,
                    grades: [{
                        ...gradesValues[i].grades[0],
                        [name]: value
                    }]
                };

                newGrades.push(grade);
            }else {
                newGrades.push(gradesValues[i]);
            }
        }
        
        setGradesValues(newGrades);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        handleUpdate();
        setModal(false);
    };

    return (
        <>
            
            <Modal
                open={modal}
            >
                <form id='submitGrades' onSubmit={handleEdit}>
                    <Box sx={style} style={{width: '70%'}}>
                        
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
                                        <td>
                                            <TextField fullWidth 
                                                id={item.idStudent} 
                                                name="lessons"
                                                value={item.grades[0].lessons} 
                                                onChange={handleChangeGrades}
                                                label="Lecciones" 
                                                type="number"
                                            />
                                        </td>
                                        <td>
                                            <TextField fullWidth 
                                                id={item.idStudent} 
                                                name="participations"
                                                value={item.grades[0].participations} 
                                                onChange={handleChangeGrades}
                                                label="Participaciones" 
                                                type="number"
                                            />
                                        </td>
                                        <td>
                                            <TextField fullWidth 
                                                id={item.idStudent} 
                                                name="homeworks"
                                                value={item.grades[0].homeworks} 
                                                onChange={handleChangeGrades}
                                                label="Deberes" 
                                                type="number"
                                            />
                                        </td>
                                        <td>
                                            <TextField fullWidth 
                                                id={item.idStudent} 
                                                name="project"
                                                value={item.grades[0].project} 
                                                onChange={handleChangeGrades}
                                                label="Proyecto" 
                                                type="number"
                                            />
                                        </td>
                                        <td>
                                            <TextField fullWidth 
                                                id={item.idStudent} 
                                                name="exam"
                                                value={item.grades[0].exam} 
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
                            onClick={handleEdit}
                            sx={{
                                boxShadow: '1px 1px 5px #333',
                                background: 'linear-gradient(to right, #4d83b8, #4d83b8)',
                                width: '30%',
                                marginLeft: '35%'
                            }}        
                        >
                            Registrar
                        </Button><br/>
                        <Button
                            variant="contained"
                            size = "large"
                            onClick={() => setModal(false)}
                            sx={{
                                boxShadow: '1px 1px 5px #333',
                                background: 'linear-gradient(to right, #4d83b8, #4d83b8)',
                                width: '30%',
                                marginLeft: '35%'
                            }}        
                        >
                            Cancelar
                        </Button><br/><br/>
                    </Box>
                </form>
            </Modal>
        
        
        </>
    )
}
export default ModalUpdateGrades