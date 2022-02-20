import axios from 'axios'

const baseUrl = "http://localhost:3001";

export async function saveProfessors(professorsData){

    try{
        const response = await axios({
            url: `${baseUrl}/professors`,
            method: 'POST',
            data: professorsData
        });
        
    }catch(error){
        console.log(error);
    }
};