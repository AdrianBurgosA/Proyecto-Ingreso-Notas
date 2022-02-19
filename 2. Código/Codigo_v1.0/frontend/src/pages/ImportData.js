import Cookies from 'universal-cookie/es6';
import NavbarAdmin from '../components/NavbarAdmin';
import ImportDataComponent from '../components/ImportData';

const cookies = new Cookies();

const ImportData = () => {

    return (
        <>
            <NavbarAdmin />
            <br />
            <ImportDataComponent />
            <br />
            <ImportDataComponent />
        </> 
    );

}
export default ImportData; 