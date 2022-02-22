import Cookies from 'universal-cookie/es6';
import NavbarProfessor from '../components/NavbarProfessor';
import InsertGradesComponent from '../components/InsertGrades';
import {saveGrades} from '../services/gradesService';
import {getProfessorByUsername} from '../services/professorService';
import {getCourseById} from '../services/courseService';
import {getSubjectsByTypeAndLevel, getSubjectById} from '../services/subjectService';
import {useEffect, useState} from 'react';

const cookies = new Cookies();

const InsertGrades = () => {

    const [gradesValues, setGradesValues] = useState([]);
    const [professorValues, setProfessorValues] = useState({
        _id: '',
        name: '',
        lastName: '',
        bornYear: '',
        idCarad: '',
        specialization: '',
        level: '',
        disponibility: '',
        email: cookies.get('email', {path: "/"}),
        user: cookies.get('user', {path: "/"}),
        password: cookies.get('password', {path: "/"}),
        idSubject: '',
        idCourse: []
    });
    const [coursesValues, setCoursesValues] = useState([]);
    const [subjectsValues, setSubjectsValues] = useState([]);

    const handleSubmit = (gradesData) => {
        saveGrades(gradesData);
    };

    useEffect(() => {
        async function loadProfessor() {
            const response = await getProfessorByUsername(professorValues.user);

            if (response.status === 200) {
                setProfessorValues(response.data[0]);
                
            }
        }

        loadProfessor();
        
    }, []);

    useEffect(() => {
        async function loadCourses() {
            var courses = [];
            
            for (var i=0; i<professorValues.idCourse.length; i++) {
                const response = await getCourseById(professorValues.idCourse[i]);
                
                if (response.status === 200) {
                    courses.push(response.data);
                    
                }
            }

            setCoursesValues(courses);
            
        }

        loadCourses();
        
    }, [professorValues]);

    useEffect(() => {
        async function loadSubjects() {
            
            if (professorValues.idSubject == "") {
                const response = await getSubjectsByTypeAndLevel(0, professorValues.level);
                
                if (response.status === 200) {
                    setSubjectsValues(response.data);
                    
                }
            }else if (professorValues.idSubject != "") {
                var subjectArray =  [];
                const response = await getSubjectById(professorValues.idSubject);

                subjectArray.push(response.data);

                if (response.status === 200) {
                    setSubjectsValues(subjectArray);
                    
                }
            }
            
        }

        loadSubjects();
        
    }, [professorValues]);

    useEffect(() => {
        if (typeof cookies.get('user') === 'undefined' || cookies.get('type', {path: "/"}) !== '2') {
            window.location.href = "./";
        }
    });

    return (
        <>
            <NavbarProfessor />
            <br />
            <InsertGradesComponent handleSubmit={handleSubmit} professorValues={professorValues} coursesValues={coursesValues} subjectsValues={subjectsValues} />
        </> 
    );

};
export default InsertGrades; 