import Cookies from 'universal-cookie/es6';
import NavbarAdmin from '../components/NavbarAdmin';
import ImportDataComponent from '../components/ImportData';
import {saveProfessor, saveUser} from '../services/professorService';
import {useEffect} from 'react';

const cookies = new Cookies();

const ImportData = () => {

    const handleSubmit = (professorData) => {
        saveProfessor(professorData);
        saveUser(professorData);
    };

    useEffect(() => {
        if (typeof cookies.get('user') === 'undefined' || cookies.get('type', {path: "/"}) !== '0') {
            window.location.href = "./";
        }
    });

    return (
        <>
            <NavbarAdmin />
            <br />
            <ImportDataComponent handleSubmit = {handleSubmit} title="Importar Profesores"/>
        </> 
    );

};
export default ImportData; 