import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Message from './MessageAlert';
import '../index.css'

const RegisterPeriodForm = (props) => {
    const {handleSubmit} = props
    const [ messageBox, setMessage ] = useState({type: '', message: '', isHidden: true})
    const todayDate = new Date()
    
    useEffect(() => {
        var todayDate = new Date();
        var month = todayDate.getMonth()+1;
        var day = todayDate.getDate();
        var year = todayDate.getFullYear(); 
        if(day<10)
            day='0'+day; 
        if(month<10)
            month='0'+month 
        setPeriod({...period, startDate:(year)+"-"+month+"-"+day , endDate: year+"-"+month+"-"+day })
    }, []);
    
    const [ period, setPeriod ] = useState({
        name: '',
        startDate: new Date(),
        endDate: new Date()
    })

    const [validation, setValidation] = useState({
        nameOk: false,
        startDateOk: false,
        endDateOk: false
    })

    const handleSubmitInternal = (e) => {
        e.preventDefault();
        handleSubmit(period, setPeriod, messageBox, setMessage)
    };

    const nameValidation = () => {
        const periodName = period.name
        const iName = document.getElementById('iName')
        const name= document.getElementById('name')
        var auxIterator = 0

        if (periodName === "") {
            iName.textContent = "*Ingrese el nombre del año lectivo. Campo obligatorio."
            auxIterator++
            setValidation({...validation, nameOk: false})
        }

        if (auxIterator !== 1 && periodName.length < 4) {
            iName.textContent = "*El nombre del año lectivo debe tener al menos 5 digitos"
            auxIterator++
            setValidation({...validation, nameOk: false})
        }

        if (auxIterator === 0) {
            iName.textContent = ""
            name.style.border=''
            setValidation({...validation, nameOk: true})
        }else{
            name.style.borderTop='2px solid red'
            name.style.borderBottom='2px solid red'
            name.style.borderRight='2px solid red'
            name.style.borderLeft='2px solid red'
            name.style.borderRadius='5px'
        }
    }

    const startDateValidation = () => {
        const iYear = document.getElementById('iStartDate')
        const year = document.getElementById('startDate')
        const born = new Date(year.value)
        const actualDate = new Date()
        const iterator = 0
        if(year.value === ''){
            setValidation({...validation,startDateOk: false})
            iYear.textContent = "*Escoga una fecha. Campo obligatorio"
            iterator++
        }else if(born.getFullYear() > actualDate.getFullYear()){
            setValidation({...validation,startDateOk: false})
            iYear.textContent = "*El año escogido supera al año actual"
            iterator++
        }else if(born.getFullYear() === actualDate.getFullYear()){
            if((born.getMonth() <= actualDate.getMonth()) && (born.getDay() <= actualDate.getDay())){
                iYear.textContent = ""
                setValidation({...validation, startDateOk: true}) 
            }else{
                setValidation({...validation,startDateOk: false})
                iYear.textContent = "*La fecha escogida no debe se mayor a la fecha actual."
                iterator++
            }
        }

        if(iterator === 0){
            iYear.textContent = ""
            year.style.border = ''
            setValidation({...validation, startDateOk: true})
        }else{
            year.style.borderTop='2px solid red'
            year.style.borderBottom='2px solid red'
            year.style.borderRight='2px solid red'
            year.style.borderLeft='2px solid red'
            year.style.borderRadius='5px'
        }
    }

    const endDateValidation = () => {
        const endDate = document.getElementById('endDate')
        const endDateSelected = new Date(endDate.value)
        const iEndDate = document.getElementById('iEndDate')
        const actualDate = new Date()
        iEndDate.textContent = `selected: ${endDateSelected} / actual: ${actualDate}`
    }

    return(
        <>
            <br/><Typography variant="h3" gutterBottom component="div" sx={{textAlign:'center'}}>
                Registrar nuevo año lectivo
            </Typography>
            <Box
                style={{width: '40%'}}
            >
                <TextField 
                    value={period.name} 
                    onChange={(event) => setPeriod({...period,name:event.target.value})}
                    id="name" 
                    label="Nombre" 
                    style={{ width:'100%'}}
                    onBlur={nameValidation}
                /><br/>
                <i id="iName" class="msgError"></i><br/>
                <TextField
                    id="startDate"
                    label="Fecha de comienzo"
                    type="date"
                    defaultValue="2023-05-24"
                    value={period.startDate}
                    onChange= {(event) => setPeriod({...period,startDate: event.target.value})}
                    style={{ width:'100%'}}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onBlur={startDateValidation}
                /><br/><br/>
                <i id="iStartDate" class="msgError"></i>
                <TextField
                    id="endDate"
                    label="Fecha de cierre"
                    type="date"
                    defaultValue="2023-05-24"
                    value={period.endDate}
                    onChange= {(event) => setPeriod({...period,endDate: event.target.value})}
                    style={{ width:'100%'}}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onBlur={endDateValidation}
                /><br/><br/>
                <i id="iEndDate" class="msgError"></i>
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