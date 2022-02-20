import Cookies from 'universal-cookie/es6';
import * as XLSX from 'xlsx';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const cookies = new Cookies();

const ImportData = (props) => {
    const {title, handleSubmit} = props

    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
    
            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, {type: 'buffer'});
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };
            fileReader.onerror = ((error) => {
                reject(error);
            });
        });
    
        promise.then((d) => {
            console.log(d);
            d.map(data => {
                handleSubmit(data);
            });
            
        });
    };

    return (
        <center>
            <Card sx={{borderRadius: '20px', width: '500px', p: 3, boxShadow: '1px 1px 5px #333', marginTop: '200px'}}>
                <Typography variant="h3" gutterBottom component="div">
                    {title}
                </Typography><br/><br/>
                <input 
                    type="file" 
                    onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }}
                /><br/><br/>
                <Button
                    variant="contained"
                    size = "large"
                    type="submit"
                    sx={{
                        boxShadow: '1px 1px 5px #333',
                        background: 'linear-gradient(to right, #4d83b8, #4d83b8)',
                    }}        
                >
                    Importar
                </Button><br/>
            </Card>
        </center>
    );

}
export default ImportData; 