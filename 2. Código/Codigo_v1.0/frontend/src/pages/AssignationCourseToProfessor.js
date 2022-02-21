import React, {useState, useEffect} from 'react'
import Assignation from '../components/FormAssignationCourseToProfessor';
import Cookies from 'universal-cookie/es6';
import NavbarAdmin from '../components/NavbarAdmin';
import { getProfessorsByLevel, updateCoursesProfessor, getProfessorById } from '../services/professorService';
import { getCourseByNevel } from '../services/courseService'

const cookies = new Cookies();

const AssignationCourseToProfessor = () => {
    const [ professors, setProfessors ] = useState([]);
    const [ courses, setCourses ] = useState([]);
    const [ professor, setProfessor ] = useState({});
    const [ level, setLevel ] = useState("");
    const [ id, setId ] = useState("")

    useEffect(() => {
        async function loadProfessors() {
            const response = await getProfessorsByLevel(level);
            if (response.status === 200) {
                setProfessors(response.data);
            };
        };
        loadProfessors();
    }, [level]);

    useEffect(() => {
        async function loadCourses() {
            const response = await getCourseByNevel(level);
            if (response.status === 200) {
                setCourses(response.data);
            };
        };
        loadCourses();
    }, [level]);

    useEffect(() => {
        async function findProfessor() {
            const response = await getProfessorById(id);

            if (response.status === 200) {
                setProfessor(response.data);
                
            };
        };

        findProfessor();
        
    }, [id]);

    useEffect(() => {
        if (typeof cookies.get('user') === 'undefined' || cookies.get('type', {path: "/"}) !== '0') {
            window.location.href = "./";
        }
    });

    const handleUpdate = (professorData, setProfessorData) => {
        updateCoursesProfessor(professorData, setProfessorData);
    }

    return(
        <>
            <NavbarAdmin/><br/><br/>
            <center>
                <Assignation professors={professors} courses={courses} setLevel={setLevel}
                id={id} setId={setId} setProfessor = {setProfessor} professor={professor} handleUpdate={handleUpdate}/>
            </center>
        </>
    )
}

export default AssignationCourseToProfessor;