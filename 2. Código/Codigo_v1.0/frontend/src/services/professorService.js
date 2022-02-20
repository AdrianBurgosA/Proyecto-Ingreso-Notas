import axios from 'axios'

const baseUrl = "http://localhost:3001";

export async function saveProfessor(professorData){

    try{
        const response = await axios({
            url: `${baseUrl}/professors`,
            method: 'POST',
            data: professorData
        });
        
    }catch(error){
        console.log(error);
    }
};

export async function saveUser(professorData){

    try{
        const response = await axios({
            url: `${baseUrl}/users`,
            method: 'POST',
            data: {
                "email": professorData.Correo,
                "user": professorData.Usuario,
                "password": professorData.Contraseña,
                "type": 2 
            }
        });
        
    }catch(error){
        console.log(error);
    }
};

export async function getProfessorWithoutSubjects(){
    try{
        const response = await axios({
            url: `${baseUrl}/professorsWithoutSubjects`,
            method: 'GET',
        })
        
        return response;
  
    }catch(error){
      console.log(error)
    }
};

export async function getProfessorById(professorId){
    try{
        const response = await axios({
            url: `${baseUrl}/professors/${professorId}`,
            method: 'GET',
        })
        console.log(response)
        return response;
  
    }catch(error){
      console.log(error)
    }
};

export async function updateProfessor(professorData, setProfessorData){
    console.log(professorData);

    const response = await axios.put(`${baseUrl}/professors/${professorData._id}`, {
        idCourse: professorData.idCourse,
        idSubject: professorData.idSubject
    })
    .then(response => {
        window.alert('Asignación realizada con éxito');
      
    })
    .catch(error => {
      console.log(error);
    })
    
    setProfessorData([]);
    
};