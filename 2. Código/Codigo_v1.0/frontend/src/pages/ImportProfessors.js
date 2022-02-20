import Cookies from 'universal-cookie/es6';
import NavbarAdmin from '../components/NavbarAdmin';
import ImportDataComponent from '../components/ImportData';
import {saveProfessor, saveUser} from '../services/professorService';

const cookies = new Cookies();

const ImportData = () => {

    const handleSubmit = (professorData) => {
        saveProfessor(professorData);
        saveUser(professorData);
    };

    return (
        <>
            <NavbarAdmin />
            <br />
            <ImportDataComponent handleSubmit = {handleSubmit} />
        </> 
    );

};
export default ImportData; 