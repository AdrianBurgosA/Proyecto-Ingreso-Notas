import axios from 'axios'

const baseUrl = "http://localhost:3001";

export async function saveGrades(gradesData){

    try{
        const response = await axios({
            url: `${baseUrl}/grades`,
            method: 'POST',
            data: gradesData
        });
        
    }catch(error){
        console.log(error);
    }
};
