import React,{useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import '../index.css'
import Typography from '@mui/material/Typography';
import Message from './MessageAlert';

const RegisterStudentForm = (props) => {
    const countriesLatam = ['Ecuador','Colombia','Venezuela','Argentina','Chile','Brasil','Uruguay','Paraguay','Perú']
    const handleSubmit = props.handleSubmit;
    const students = props.students
    const [ messageBox, setMessage ] = useState({type: '', message: '', isHidden: false})
    const [ validation, setValidation ] = useState({
        nameOk: false,
        lastNameOk: false,
        idOk: false,
        emailOk: false,
        bornYearOk: false,
        userOk: false,
        passwordOk: false,
        genreOk: false,
        nationalityOk: false
    })

    const [studentValues, setStudentValues] = useState({
        name: '',
        lastName: '',
        bornYear: new Date(),
        idCard: '',
        genre: '',
        nationality: '',
        email: '',
        user: '',
        password: '',
        idCourse: ''
    });

    useEffect(() => {
        var todayDate = new Date();
        var month = todayDate.getMonth()+1;
        var day = todayDate.getDate();
        var year = todayDate.getFullYear()-4; 
        if(day<10)
            day='0'+day; 
        if(month<10)
            month='0'+month 
            setStudentValues({...studentValues, bornYear:(year)+"-"+month+"-"+day})
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStudentValues({ ...studentValues, [name]: value});
    };

    const handleSubmitInternal = (e) => {
        e.preventDefault();
        if(validation.nameOk && validation.lastNameOk && validation.idOk && validation.emailOk && validation.bornYearOk && validation.userOk && validation.passwordOk){
            handleSubmit(studentValues, setStudentValues, messageBox, setMessage);
        }else{
            setMessage({type: 'error', message: 'Ingresa correctamente los campos', isHidden: false})
        }
    };

    const nameValidation = () => {
        const name = studentValues.name
        const regexOnlyletters = /^[a-zA-Z ]+$/
        const iName = document.getElementById('iName')
        const lNames = document.getElementById('name')
        var splitName = name.split(' ')
        var auxIterator = 0
        var correctName = ""

        if (name === "") {
            iName.textContent = "*Ingrese el nombre. Campo obligatorio."
            auxIterator++
            setValidation({...validation, nameOk: false})
        }

        if (auxIterator !== 1 && !regexOnlyletters.test(name)) {
            iName.textContent = "*Solo se permiten letras"
            auxIterator++
            setValidation({...validation, nameOk: false})
        }

        if (auxIterator === 0) {
            for (var i=0; i<splitName.length; i++) {
                for (var j=0; j<splitName[i].length; j++) {
                    if (j === 0) {
                        correctName += splitName[i].charAt(j).toUpperCase()
                    }else {
                        correctName += splitName[i].charAt(j)
                    }
                }
                if (i !== splitName.length - 1) {
                    correctName += " "
                }
            }
            setStudentValues({...studentValues, name: correctName})
            iName.textContent = ""
            lNames.style.border=''
            setValidation({...validation, nameOk: true})
        }else{
            lNames.style.borderTop='2px solid red'
            lNames.style.borderBottom='2px solid red'
            lNames.style.borderRight='2px solid red'
            lNames.style.borderLeft='2px solid red'
            lNames.style.borderRadius='5px'
        }
    }

    const lastNameValidation = () => {
        const name = studentValues.lastName
        const regexOnlyletters = /^[a-zA-Z ]+$/
        const iLastName = document.getElementById('iLastName')
        const lastNames = document.getElementById('lastName')
        var splitName = name.split(' ')
        var auxIterator = 0
        var correctName = ""
        if (name === "") {
            iLastName.textContent = "*Ingrese el apellido. Campo obligatorio."
            auxIterator++
            setValidation({...validation, lastNameOk: false})
        }

        if (auxIterator !== 1 && !regexOnlyletters.test(name)) {
            iLastName.textContent = "*Solo se permiten letras"
            auxIterator++
            setValidation({...validation, lastNameOk: false})
        }

        if (auxIterator === 0) {
            for (var i=0; i<splitName.length; i++) {
                for (var j=0; j<splitName[i].length; j++) {
                    if (j === 0) {
                        correctName += splitName[i].charAt(j).toUpperCase()
                    }else {
                        correctName += splitName[i].charAt(j)
                    }
                }
                if (i !== splitName.length - 1) {
                    correctName += " "
                }
            }
            setStudentValues({...studentValues, lastName: correctName})
            iLastName.textContent = ""
            lastNames.style.border=''
            setValidation({...validation, lastNameOk: true})
        }else{
            lastNames.style.borderTop='2px solid red'
            lastNames.style.borderBottom='2px solid red'
            lastNames.style.borderRight='2px solid red'
            lastNames.style.borderLeft='2px solid red'
            lastNames.style.borderRadius='5px'
        }
    }

    const idCardValidation = () => {
        const idCard = studentValues.idCard
        const regexOnlyNumbers = /[0-9]+$/
        const iCard = document.getElementById('iCard')
        const idC = document.getElementById('idCard')
        var auxIterator = 0
        var splitIDCard = idCard.split('')
        var pairsArray = []
        var oddArray = []
        var sumOddNumbers = 0
        var sumPairNumbers = 0
        var totalSum = 0
        var auxBoolIDCard = true

        if (idCard === "") {
            iCard.textContent = "*Ingrese el ID. Campo obligatorio."
            auxIterator++
            setValidation({...validation, idOk: false})
        }

        if (auxIterator !== 1 && !regexOnlyNumbers.test(idCard)) {
            iCard.textContent = "*El ID solo debe contener números"
            auxIterator++
            setValidation({...validation, idOk: false})
        }

        if (auxIterator !== 1 && idCard.length < 10) {
            iCard.textContent = "*El ID debe tener 10 digitos"
            auxIterator++
            setValidation({...validation, idOk: false})
        }

        if (auxIterator !== 1 && !(idCard.charAt(0) === '1' || (idCard.charAt(0) === '2' && (idCard.charAt(1) === '0' || idCard.charAt(1) === '1' || 
                idCard.charAt(1) === '2' || idCard.charAt(1) === '3' || idCard.charAt(1) === '4')) || idCard.charAt(0) === '0')) 
        {
			iCard.textContent = "*Ingrese correctamente los primeros dos dígitos de la cédula"
            auxIterator++
            setValidation({...validation, idOk: false})
		}

        if (auxIterator !== 1) {
            for (var i=0; i<students.length; i++) {
                if (students[i].idCard === idCard) {
                    iCard.textContent = "*Cédula ya registrada"
                    auxIterator++
                    setValidation({...validation, idOk: false})
                    break
                }
            }
        }

        if (auxIterator !== 1) {
            for (var j=0; j<splitIDCard.length - 1; j++) {
                if ((j+1) % 2 === 0) {
                    pairsArray.push(parseInt(splitIDCard[j]));
                    
                }else{
                    oddArray.push(parseInt(splitIDCard[j]));
                    
                }
            }

            for (var k=0; k<oddArray.length; k++) {
                oddArray[k] *= 2;
                
                if(oddArray[k] > 9){
                    oddArray[k] -= 9;
                    
                }
            }
            
            for(var l=0; l<oddArray.length; l++){
                
                sumOddNumbers += oddArray[l];
            }
            
            for(var m=0; m<pairsArray.length; m++){
                
                sumPairNumbers += pairsArray[m];
            }
            
            totalSum = sumOddNumbers + sumPairNumbers;
            totalSum %= 10;
            
            if (totalSum !== 0) {
                totalSum = 10 - totalSum;
            }

            if (totalSum !== parseInt(splitIDCard[splitIDCard.length - 1])) {
                auxBoolIDCard = false;
            }

            if (auxBoolIDCard  === false) {
                iCard.textContent = "*Comprobación del último dígito errada. Ingrese correctamente su cédula"
                auxIterator++
                setValidation({...validation, idOk: false})
            }
        }

        if (auxIterator === 0) {
            iCard.textContent = ""
            idC.style.border=''
            setValidation({...validation, idOk: true})
        }else{
            idC.style.borderTop='2px solid red'
            idC.style.borderBottom='2px solid red'
            idC.style.borderRight='2px solid red'
            idC.style.borderLeft='2px solid red'
            idC.style.borderRadius='5px'
        }
    }

    const emailValidation = () => {
        const email = studentValues.email
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const iEmail = document.getElementById('iEmail')
        const emails= document.getElementById('email')
        var auxIterator = 0

        if (email === "") {
            iEmail.textContent = "*Ingrese el correo electrónico. Campo obligatorio."
            auxIterator++
            setValidation({...validation, emailOk: false})
        }

        if (auxIterator !== 1 && !regexEmail.test(email)) {
            iEmail.textContent = "*Ingrese correctamente el email"
            auxIterator++
            setValidation({...validation, emailOk: false})
        }

        if (auxIterator !== 1) {
            var auxBool = true;
            students.forEach(student => {
                if(studentValues.email === student.email){
                    auxBool = false;
                    return
                }
            })
            if(auxBool === false){
                iEmail.textContent = "*Correo electronico ya registrado";
                auxIterator++;
                setValidation({...validation, emailOk: false});
            }
        }

        if (auxIterator === 0) {
            iEmail.textContent = ""
            emails.style.border=''
            setValidation({...validation, emailOk: true})
        }else{
            emails.style.borderTop='2px solid red'
            emails.style.borderBottom='2px solid red'
            emails.style.borderRight='2px solid red'
            emails.style.borderLeft='2px solid red'
            emails.style.borderRadius='5px'
        }
    }

    const userValidation = () => {
        const userName = studentValues.user
        const iUser = document.getElementById('iUser')
        const user= document.getElementById('user')
        var auxIterator = 0
        
        if (userName === "") {
            iUser.textContent = "*Ingrese un usuario. Campo obligatorio."
            auxIterator++
            setValidation({...validation, userOk: false})
        }

        if (auxIterator !== 1 && userName.length < 4) {
            iUser.textContent = "*El usuario debe tener al menos 5 digitos"
            auxIterator++
            setValidation({...validation, userOk: false})
        }
        
        if (auxIterator !== 1) {
            var auxBool = true;
            students.forEach(student => {
                if(studentValues.user === student.user){
                    auxBool = false;
                    return
                }
            })
            if(auxBool === false){
                iUser.textContent = "*Nombre de usuario ya registrado";
                auxIterator++;
                setValidation({...validation, userOk: false});
            }
        }
        
        if (auxIterator === 0) {
            iUser.textContent = ""
            user.style.border=''
            setValidation({...validation, userOk: true})
        }else{
            user.style.borderTop='2px solid red'
            user.style.borderBottom='2px solid red'
            user.style.borderRight='2px solid red'
            user.style.borderLeft='2px solid red'
            user.style.borderRadius='5px'
        }
    }

    const passwordValidation = () => {
        const password = studentValues.password
        const iPassword = document.getElementById('iPassword')
        const pass= document.getElementById('password')
        var auxIterator = 0

        if (password === "") {
            iPassword.textContent = "*Ingrese la contraseña. Campo obligatorio."
            auxIterator++
            setValidation({...validation, passwordOk: false})
        }

        if (auxIterator !== 1 && password.length < 5) {
            iPassword.textContent = "*El Password debe tener al menos 5 digitos"
            auxIterator++
            setValidation({...validation, passwordOk: false})
        }

        if (auxIterator === 0) {
            iPassword.textContent = ""
            pass.style.border=''
            setValidation({...validation, passwordOk: true})
        }else{
            pass.style.borderTop='2px solid red'
            pass.style.borderBottom='2px solid red'
            pass.style.borderRight='2px solid red'
            pass.style.borderLeft='2px solid red'
            pass.style.borderRadius='5px'
        }
    }

    const existsValidation = () => {
        students.forEach(student => {
            if(studentValues.idCard === student.idCard){
                setMessage({type: 'error', message: 'La cedula ingresada ya existe', isHidden: false})
                return false
            }
            if(studentValues.email === student.email){
                setMessage({type: 'error', message: 'El correo ingresado ya existe', isHidden: false})
                return false
            }
            if(studentValues.user === student.user){
                setMessage({type: 'error', message: 'El usuario ingresado ya existe', isHidden: false})
                return false
            }
        })
        return true
    }

    const genreValidation = () => {
        const iGenre = document.getElementById('iGenre')
        const selector = document.getElementById('genre')

        if((studentValues.genre !== 'M') && (studentValues.genre !== 'F')){
            iGenre.textContent = "*Este campo es obligatorio"
            selector.style.borderTop='2px solid red'
            selector.style.borderBottom='2px solid red'
            selector.style.borderRight='2px solid red'
            selector.style.borderLeft='2px solid red'
            selector.style.borderRadius='5px'
            setValidation({...validation, genreOk: false})
        }else{
            iGenre.textContent = ""
            selector.style.border = ''
            setValidation({...validation, genreOk: true})
        }
    }

    const nationalityValidation = () => {
        const iNation = document.getElementById('iNational')
        const national = document.getElementById('national')
        const auxIterator = 0

        countriesLatam.forEach(country => {
            if(country === studentValues.nationality){
                auxIterator++
            }
        })

        if(auxIterator === 0){
            iNation.textContent = ''
            national.style.border = ''
            setValidation({...validation, nationalityOk: true})
        }else{
            iNation.textContent = "*Este campo es obligatorio"
            national.style.borderTop='2px solid red'
            national.style.borderBottom='2px solid red'
            national.style.borderRight='2px solid red'
            national.style.borderLeft='2px solid red'
            national.style.borderRadius='5px'
            setValidation({...validation, nationalityOk: false})
        }
    }

    const dateValidation = () => {
        const iYear = document.getElementById('iYear')
        const year = document.getElementById('date')
        const born = new Date(year.value)
        const actualDate = new Date()

        if(actualDate.getFullYear() < born.getFullYear()){
            setValidation({...validation,bornYearOk: false})
            iYear.textContent = "*El año escogido supera al año actual"
            year.style.borderTop='2px solid red'
            year.style.borderBottom='2px solid red'
            year.style.borderRight='2px solid red'
            year.style.borderLeft='2px solid red'
            year.style.borderRadius='5px'
        }else if((actualDate.getFullYear() === born.getFullYear()) || (born.getFullYear() > (actualDate.getFullYear()-4))){
            setValidation({...validation,bornYearOk: false})
            iYear.textContent = "*El estudiante debe tener  como mínimo 4 años"
            year.style.borderTop='2px solid red'
            year.style.borderBottom='2px solid red'
            year.style.borderRight='2px solid red'
            year.style.borderLeft='2px solid red'
            year.style.borderRadius='5px'
        }else{
            iYear.textContent = ''
            year.style.border = ''
            setValidation({...validation, bornYearOk: true})
        } 
    }

    return(
        <>
            <br/><Typography variant="h3" gutterBottom component="div" sx={{textAlign:'center'}}>
                Registrar nuevo estudiante
            </Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80ch'},
                }}
            >
                <TextField id="name" name='name' value={studentValues.name} onChange={handleChange} label="Nombre" onBlur={nameValidation}/><br/>
                <i id="iName" class="msgError"></i><br/>
                <TextField id = "lastName" name='lastName' value={studentValues.lastName} onChange={handleChange} label="Apellido" onBlur={lastNameValidation}/><br/>
                <i id="iLastName" class="msgError"></i><br/>
                <TextField id = "idCard" name='idCard' value={studentValues.idCard} onChange={handleChange} label="Cédula" onBlur={idCardValidation}/><br/>
                <i id="iCard" class="msgError"></i><br/>
                <FormControl fullWidth>
                    <InputLabel id="labelLevels">Género</InputLabel>
                    <Select id="genre" name='genre' onChange={handleChange}>
                        <MenuItem value="M" selected>Masculino</MenuItem>
                        <MenuItem value="F">Femenino</MenuItem>
                    </Select>
                </FormControl><br/>
                <i id="iGenre" class="msgError"></i><br/>
                <FormControl fullWidth>
                    <InputLabel id="nationality">Nacionalidad</InputLabel>
                    <Select id = "national" name='nationality' onChange={handleChange} >
                        {
                            countriesLatam.map(country => 
                                <MenuItem value={country}>{country}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl><br/>
                <i id="iNational" class="msgError"></i><br/>
                <TextField id = "email" name='email' value={studentValues.email} onChange={handleChange} label="Correo eléctronico" onBlur={emailValidation}/><br/>
                <i id="iEmail" class="msgError"></i><br/>
                <TextField id = "user" name='user' value={studentValues.user} onChange={handleChange} label="Usuario" onBlur={userValidation}/><br/>
                <i id="iUser" class="msgError"></i><br/>
                <TextField id = "password" name='password' type="password" value={studentValues.password} onChange={handleChange} label="Contraseña" onBlur={passwordValidation}/><br/>
                <i id="iPassword" class="msgError"></i><br/>
                <TextField
                    id="date"
                    name='bornYear'
                    label="Fecha de nacimiento"
                    type="date"
                    value={studentValues.bornYear}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true
                    }}
                    onBlur={dateValidation}
                /><br/>
                <i id="iYear" class="msgError"></i><br/>
                <Box sx={{display: 'flex'}}>
                    <Button
                        variant="contained"
                        size = "large"
                        type="submit"
                        onClick={handleSubmitInternal}
                        sx={{
                            boxShadow: '1px 1px 5px #333',
                            background: 'linear-gradient(to right, #4d83b8, #4d83b8)'
                        }}        
                        style={{width: '20%', p: '4px'}}
                    >
                        Registrar
                    </Button>
                    <Message type={messageBox.type} message={messageBox.message} isHidden={messageBox.isHidden}/><br/>
                </Box>
            </Box>
        </>
    );
}
export default RegisterStudentForm;