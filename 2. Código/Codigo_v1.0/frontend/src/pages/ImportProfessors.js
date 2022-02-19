import Cookies from 'universal-cookie/es6';
import NavbarAdmin from '../components/NavbarAdmin';
import ImportDataComponent from '../components/ImportData';
import {saveProfessors} from '../services/professorService';

const cookies = new Cookies();

const handleSubmit = (professorsData) => {
    saveProfessors(professorsData);
};

const ImportData = () => {

    return (
        <>
            <NavbarAdmin />
            <br />
            <ImportDataComponent handleSubmit = {handleSubmit} />
        </> 
    );

};
export default ImportData; 