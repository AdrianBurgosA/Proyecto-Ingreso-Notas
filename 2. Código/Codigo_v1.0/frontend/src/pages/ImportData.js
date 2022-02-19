import Cookies from 'universal-cookie/es6';
import NavbarAdmin from '../components/NavbarAdmin';
import ImportDataComponent from '../components/ImportData';
import {saveSubject} from '../services/subjectService';
import {saveCourse} from '../services/courseService';

const cookies = new Cookies();

const ImportData = () => {

    const handleSubmitSubject = (subjectData) => {
        saveSubject(subjectData);
    };

    const handleSubmitCourse = (courseData) => {
        saveCourse(courseData);
    };

    return (
        <>
            <NavbarAdmin />
            <br />
            Importar cursos
            <ImportDataComponent handleSubmit = {handleSubmitCourse} />
            <br />
            Importar materias
            <ImportDataComponent handleSubmit = {handleSubmitSubject} />
        </> 
    );

};
export default ImportData; 