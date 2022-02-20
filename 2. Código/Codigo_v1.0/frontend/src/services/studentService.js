import axios from 'axios'

const baseUrl = "http://localhost:3001";

export async function saveStudent(studentData, setStudentValues){

    try{
        const response = await axios({
            url: `${baseUrl}/students`,
            method: 'POST',
            data: studentData
        });
        window.alert('Estudiante registrado');
        
    }catch(error){
        console.log(error);
        window.log('Fallo en el registro: ' + error);

    }
    setStudentValues({
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
};

export async function saveUser(studentData){

    try{
        const response = await axios({
            url: `${baseUrl}/users`,
            method: 'POST',
            data: {
                "email": studentData.email,
                "user": studentData.user,
                "password": studentData.password,
                "type": 3
            }
        });
        
    }catch(error){
        console.log(error);
    }
};