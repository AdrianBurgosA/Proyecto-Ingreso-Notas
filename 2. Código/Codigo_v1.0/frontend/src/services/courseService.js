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
}

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

export async function getCourseByNevel(level){
    try{
        const response = await axios({
            url: `${baseUrl}/coursesByLevel/${level}`,
            method: 'GET',
        })
        return response;
    }catch(error){
        console.log(error)
    }
}

export async function getCoursesWithCapacity(){
    const max = 15;

    try{
        const response = await axios({
            url: `${baseUrl}/courses`,
            method: 'GET',
        });
        const courses = response.data;
        const courseWithCapacity = [];

        for (var i=0; i<courses.length; i++) {
            
            try{
                const response2 = await axios({
                    url: `${baseUrl}/studentsByCourse/${courses[i]._id}`,
                    method: 'GET'
                });
                const numberStudents = response2.data.length;

                if (numberStudents < max) {
                    courseWithCapacity.push(courses[i]);
                };

            }catch(e){
                console.log(e);
            };

        };
        response.data = courseWithCapacity;
        return response;

    }catch(error){
      console.log(error);
    };
};

export async function updateCourse(courseData, setCourseData){
    console.log(courseData);
    const response = await axios.put(`${baseUrl}/courses/${courseData._id}`, {
        idSchoolYear: courseData.idSchoolYear
    })
    .then(response => {
        window.alert('Asignaci??n realizada con ??xito');
      
    })
    .catch(error => {
      console.log(error);
    })
    
    setCourseData([]);
    
};