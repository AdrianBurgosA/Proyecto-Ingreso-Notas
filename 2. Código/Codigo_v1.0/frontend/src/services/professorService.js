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

        return response;
  
    }catch(error){
      console.log(error)
    }
};

export async function getProfessorsByLevel(level){
    try{
        const response = await axios({
            url: `${baseUrl}/professorsByLevel/${level}`,
            method: 'GET',
        })
        console.log('level service : '+ level);
        return response;
    }catch(error){
        console.log(error)
    }
}

export async function updateProfessor(professorData, setProfessorData){
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

export async function updateCoursesProfessor(professorData, setProfessorData){
    const response = await axios.put(`${baseUrl}/professorsCourses/${professorData._id}`, {
        idCourse: professorData.idCourse
    })
    .then(response => {
        console.log('Data: ' + professorData)
        window.alert('Asignación realizada con éxito');
    })
    .catch(error => {
      console.log(error);
    })
    setProfessorData([]);
};