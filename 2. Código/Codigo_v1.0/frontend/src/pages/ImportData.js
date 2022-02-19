import Cookies from 'universal-cookie/es6';
import NavbarAdmin from '../components/NavbarAdmin';
import ImportDataComponent from '../components/ImportData';

const cookies = new Cookies();

const ImportData = () => {

    return (
        <>
            <NavbarAdmin />
            <br />
            Importar cursos
            <ImportDataComponent />
            <br />
            Importar materias
            <ImportDataComponent />
        </> 
    );

}
export default ImportData; 