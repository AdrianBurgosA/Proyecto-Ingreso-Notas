import React,{useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const RegisterPeriodForm = (props) => {
    const {handleSubmit} = props
    
    const [ period, setPeriod ] = useState({
        name: '',
        startDate: new Date(),
        endDate: new Date()
    })


    const handleSubmitInternal = (e) => {
        e.preventDefault();
        handleSubmit(period, setPeriod)
    };

    return(
        <>
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
                    <TextField
                        id="date"
                        label="Fecha de comienzo"
                        type="date"
                        defaultValue="2022-05-24"
                        value={period.startDate}
                        onChange= {(event) => setPeriod({...period,startDate: event.target.value})}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    /><br/><br/>
                    <TextField
                        id="date"
                        label="Fecha de cierre"
                        type="date"
                        defaultValue="2023-05-24"
                        value={period.endDate}
                        onChange= {(event) => setPeriod({...period,endDate: event.target.value})}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
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
                            onClick={handleSubmitInternal}    
                        >
                            Registrar
                        </Button><br/>
                    </center>
                </React.Fragment>
            </Box>
        </>
    );
}

export default RegisterPeriodForm;