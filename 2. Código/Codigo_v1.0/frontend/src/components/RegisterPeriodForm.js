import React,{useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';

const RegisterPeriodForm = () => {
    const [ period, setPeriod ] = useState({
        name: '',
        startDate: new Date(),
        endDate: new Date()
    })

    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <br/><Typography variant="h3" gutterBottom component="div" sx={{textAlign:'center'}}>
                Registrar nuevo año lectivo
            </Typography><br/><br/>
            <Box
                component="form"
                sx={{
                    '& ': { m: 1, width: '80ch'},
                }}
            >
                <React.Fragment>
                    <TextField value={period.name} onChange={(event) => setPeriod({...period,name:event.target.value})}id="outlined-basic" label="Nombre" variant="outlined" /><br/><br/>
                    <DesktopDatePicker
                        label="Fecha de comienzo"
                        inputFormat="MM/dd/yyyy"
                        renderInput={(params) => <TextField {...params} />}
                    /><br/><br/>
                    <DesktopDatePicker
                        label="Fecha de cierre"
                        inputFormat="MM/dd/yyyy"
                        renderInput={(params) => <TextField {...params} />}
                    /><br/><br/>
                    <center>
                        <Button
                            variant="contained"
                            size = "large"
                            type="submit"
                            sx={{
                                boxShadow: '1px 1px 5px #333',
                                background: 'linear-gradient(to right, #4d83b8, #4d83b8)',
                            }}        
                        >
                            Registrar
                        </Button><br/>
                    </center>
                </React.Fragment>
            </Box>
        </LocalizationProvider>
    );
}

export default RegisterPeriodForm;