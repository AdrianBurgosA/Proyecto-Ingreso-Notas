import axios from 'axios'

const baseUrl = "http://localhost:3001";

export async function saveCourse(courseData){

    try{
        const response = await axios({
            url: `${baseUrl}/courses`,
            method: 'POST',
            data: courseData
        });
        
    }catch(error){
        console.log(error);
    }
};