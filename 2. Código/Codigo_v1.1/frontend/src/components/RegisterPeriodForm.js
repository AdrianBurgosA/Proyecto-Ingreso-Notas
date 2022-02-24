import React,{useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Message from './MessageAlert';

const RegisterPeriodForm = (props) => {
    const {handleSubmit} = props
    const [ messageBox, setMessage ] = useState({type: '', message: '', isHidden: true})

    const [ period, setPeriod ] = useState({
        name: '',
        startDate: new Date(),
        endDate: new Date()
    })

    const handleSubmitInternal = (e) => {
        e.preventDefault();
        handleSubmit(period, setPeriod, messageBox, setMessage)
    };

    return(
        <>
            <br/><Typography variant="h3" gutterBottom component="div" sx={{textAlign:'center'}}>
                Registrar nuevo año lectivo
            </Typography>
            <Box
                style={{width: '40%'}}
            >
                <TextField value={period.name} onChange={(event) => setPeriod({...period,name:event.target.value})}id="outlined-basic" label="Nombre" variant="outlined" style={{ width:'100%'}}/><br/><br/>
                <TextField
                    id="date"
                    label="Fecha de comienzo"
                    type="date"
                    defaultValue="2022-05-24"
                    value={period.startDate}
                    onChange= {(event) => setPeriod({...period,startDate: event.target.value})}
                    style={{ width:'100%'}}
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
                    style={{ width:'100%'}}
                    InputLabelProps={{
                    shrink: true,
                    }}
                /><br/><br/>
                <Box sx={{display: 'flex'}}>
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
                    </Button>
                    <Message type={messageBox.type} message={messageBox.message} isHidden={messageBox.isHidden}/><br/><br/>
                </Box>
            </Box>
        </>
    );
}

export default RegisterPeriodForm;