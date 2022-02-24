import React,{useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../index.css'
import Typography from '@mui/material/Typography';
import Message from './MessageAlert';

const RegisterStudentForm = (props) => {

    const handleSubmit = props.handleSubmit;
    const [ messageBox, setMessage ] = useState({type: '', message: '', isHidden: false})
    const [ validation, setValidation ] = useState({
        nameOk: false,
        lastNameOk: false,
        idOk: false,
        emailOk: false,
        genreOk: true,
        nationality: false,
        bornYearOk: false,
        userOk: false,
        passwordOk: false
    })

    const [studentValues, setStudentValues] = useState({
        name: '',
        lastName: '',
        bornYear: '',
        idCard: '',
        genre: '',
        nationality: '',
        email: '',
        user: '',
        password: '',
        idCourse: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStudentValues({ ...studentValues, [name]: value});
    };

    const handleSubmitInternal = (e) => {
        e.preventDefault();
        handleSubmit(studentValues, setStudentValues, messageBox, setMessage);
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
            for (var i=0; i<studentValues.length; i++) {
                if (studentValues[i].idCard === idCard) {
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
            iUser.textContent = "*Ingrese la contraseña. Campo obligatorio."
            auxIterator++
            setValidation({...validation, userOk: false})
        }

        if (auxIterator !== 1 && userName.length < 4) {
            iUser.textContent = "*El usuario debe tener al menos 5 digitos"
            auxIterator++
            setValidation({...validation, userOk: false})
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
                <TextField id = "genre" name='genre' value={studentValues.genre} onChange={handleChange} label="Género"  /><br/>
                <i id="iGenre" class="msgError"></i><br/>
                <TextField id = "national" name='nationality' value={studentValues.nationality} onChange={handleChange} label="Nacionalidad"/><br/>
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
                />
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