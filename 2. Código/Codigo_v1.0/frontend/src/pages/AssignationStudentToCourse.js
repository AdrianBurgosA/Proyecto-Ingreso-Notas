import Assignation from '../components/FormAssignationSubjectToProfessor';
import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';
import {getStudentsWithoutCourse, updateStudent, getStudentById} from '../services/studentService';
import {getCoursesWithCapacity} from '../services/courseService';

const cookies = new Cookies();

const AssignationSubjectoToProfessor = () => {

    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [student, setStudent] = useState({});
    const [id, setId] = useState("");

    useEffect(() => {
        async function loadStudents() {
            const response = await getStudentsWithoutCourse();

            if (response.status === 200) {
                setStudents(response.data);
                
            };
        };

        loadStudents();
        
    }, []);

    useEffect(() => {
        async function loadCourses() {
            const response = await getCoursesWithCapacity();

            if (response.status === 200) {
                setCourses(response.data);
            };
        };

        loadCourses();
        
    }, []);

    useEffect(() => {
        async function findStudent() {
            const response = await getStudentById(id);

            if (response.status === 200) {
                setStudent(response.data);
            };
        };

        findStudent();
        
    }, [id]);

    useEffect(() => {
        if (typeof cookies.get('user') === 'undefined' || cookies.get('type', {path: "/"}) !== '0') {
            window.location.href = "./";
        }
    });

    const handleUpdate = (professorData, setProfessorData) => {
        updateStudent(professorData, setProfessorData);
    };

    return(
        <>
            <NavbarAdmin /><br/>
            <center>
                <Assignation handleUpdate={handleUpdate} students={students} courses={courses} student={student} setStudent={setStudent} setId={setId} />
            </center>
        </>
    );
};

export default AssignationSubjectoToProfessor;