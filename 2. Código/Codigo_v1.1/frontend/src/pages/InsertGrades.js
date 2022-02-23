import Cookies from 'universal-cookie/es6';
import NavbarProfessor from '../components/NavbarProfessor';
import InsertGradesComponent from '../components/InsertGrades';
import {saveGrades} from '../services/gradesService';
import {getProfessorByUsername} from '../services/professorService';
import {getCourseById} from '../services/courseService';
import {getSubjectsByTypeAndLevel, getSubjectById} from '../services/subjectService';
import {getStudentsByCourse} from '../services/studentService';
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
    const [studentsValues, setStudentsValues] = useState([]);
    const [count, setCount] = useState(0);

    const [values, setValues] = useState({
        idSubject: '',
        idCourse: '',
        quimester: 0
    })

    const handleSubmit = () => {
        for (var i=0; i<gradesValues.length; i++) {
            const grades = {
                lessons: gradesValues[i].lessons, 
                participations: gradesValues[i].participations, 
                homeworks: gradesValues[i].homeworks, 
                project: gradesValues[i].project, 
                exam: gradesValues[i].exam
            }

            const gradeInformation = {
                grades: grades,
                idStudent: gradesValues[i].idStudent,
                idProfessor: professorValues._id,
                idSubject: values.idSubject,
                quimester: values.quimester
            }

            saveGrades(gradeInformation, setGradesValues, setValues, setStudentsValues, setSubjectsValues, setCoursesValues);
        }
        window.alert("Calificaciones registradas")
        setCount(count + 1);
    };

    useEffect(() => {
        async function loadProfessor() {
            const response = await getProfessorByUsername(professorValues.user);

            if (response.status === 200) {
                setProfessorValues(response.data[0]);
                
            }
        }

        loadProfessor();
        
    }, [count]);

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
        async function loadStudents() {
            
            const response = await getStudentsByCourse(values.idCourse);
            
            if (response.status === 200) {
                setStudentsValues(response.data);
            }
        }

        loadStudents();
        
    }, [values.idCourse]);

    useEffect(() => {
        
        var gradesInicialization = []
        for (var i=0; i<studentsValues.length; i++) {
            var nameStudent = studentsValues[i].name + " " + studentsValues[i].lastName
            gradesInicialization.push({
                idStudent: studentsValues[i]._id,
                nameStudent: nameStudent,
                lessons: '',
                participations: '',
                homeworks: '',
                project: '',
                exam: ''
            })
        }

        setGradesValues(gradesInicialization)
        
    }, [studentsValues]);

    useEffect(() => {
        if (typeof cookies.get('user') === 'undefined' || cookies.get('type', {path: "/"}) !== '2') {
            window.location.href = "./";
        }
    });

    return (
        <>
            <NavbarProfessor />
            <br />
            <InsertGradesComponent handleSubmit={handleSubmit} gradesValues={gradesValues} setGradesValues={setGradesValues} professorValues={professorValues} coursesValues={coursesValues} 
                subjectsValues={subjectsValues} studentsValues={studentsValues} values={values} setValues={setValues} />
        </> 
    );

};
export default InsertGrades; 