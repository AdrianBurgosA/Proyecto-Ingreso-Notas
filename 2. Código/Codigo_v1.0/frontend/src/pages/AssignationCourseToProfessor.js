import React, {useState, useEffect} from 'react'
import Assignation from '../components/FormAssignationCourseToProfessor';
import Cookies from 'universal-cookie/es6';
import NavbarAdmin from '../components/NavbarAdmin';
import { getProfessorsByLevel } from '../services/professorService';
import { getCourses } from '../services/courseService'

const cookies = new Cookies();

const AssignationCourseToProfessor = () => {
    const [ professors, setProfessors ] = useState([]);
    const [ courses, setCourses ] = useState([]);
    const [ level, setLevel ] = useState("");

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
            const response = await getCourses();
            if (response.status === 200) {
                setCourses(response.data);
            };
        };
        loadCourses();
    }, []);

    useEffect(() => {
        if (typeof cookies.get('user') === 'undefined' || cookies.get('type', {path: "/"}) !== '0') {
            window.location.href = "./";
        }
    });

    return(
        <>
            <NavbarAdmin/><br/><br/>
            <center>
                <Assignation professors={professors} courses={courses} level={level} setLevel={setLevel}/>
            </center>
        </>
    )
}

export default AssignationCourseToProfessor;