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