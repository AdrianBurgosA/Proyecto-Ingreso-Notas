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

<<<<<<< HEAD
export async function getCourses(){
    try{
        const response = await axios({
            url: `${baseUrl}/courses`,
            method: 'GET',
        })
        return response;
    }catch(error){
        console.log(error);
    }
=======
export async function getCoursesWithoutSchoolYear(){
    try{
        const response = await axios({
            url: `${baseUrl}/coursesWithoutSchoolYear`,
            method: 'GET',
        })
        
        return response;
  
    }catch(error){
      console.log(error)
    }
};

export async function getCourseById(courseId){
    try{
        const response = await axios({
            url: `${baseUrl}/courses/${courseId}`,
            method: 'GET',
        })

        return response;
  
    }catch(error){
      console.log(error)
    }
};

export async function updateCourse(courseData, setCourseData){
    console.log(courseData);

    const response = await axios.put(`${baseUrl}/courses/${courseData._id}`, {
        idSchoolYear: courseData.idSchoolYear
    })
    .then(response => {
        window.alert('Asignación realizada con éxito');
      
    })
    .catch(error => {
      console.log(error);
    })
    
    setCourseData([]);
    
>>>>>>> 51d4e4a74aef6bd5c56c6ecc061ba2377b2ef94a
};