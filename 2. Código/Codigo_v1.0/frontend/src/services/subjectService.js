import axios from 'axios'

const baseUrl = "http://localhost:3001";

export async function saveSubject(subjectData){

    try{
        const response = await axios({
            url: `${baseUrl}/subjects`,
            method: 'POST',
            data: subjectData
        });
        
    }catch(error){
        console.log(error);
    }
};