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

export async function getSubjectsByType(){
    try{
        const response = await axios({
            url: `${baseUrl}/subjectsByType`,
            method: 'GET',
        })
        
        return response;
  
    }catch(error){
      console.log(error)
    }
};